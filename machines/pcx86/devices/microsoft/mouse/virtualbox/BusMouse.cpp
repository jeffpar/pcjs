/* $Id$ */
/** @file
 * BusMouse - Microsoft Bus (parallel) mouse controller device.
 */

/*
 * Copyright (C) 2006-2016 Oracle Corporation
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */


/*********************************************************************************************************************************
*   Header Files                                                                                                                 *
*********************************************************************************************************************************/
#define LOG_GROUP LOG_GROUP_DEV_KBD
#include <VBox/vmm/pdmdev.h>
#include <VBox/version.h>
#include <iprt/assert.h>
#include <iprt/uuid.h>

/** @page pg_busmouse DevBusMouse - Microsoft Bus Mouse Emulation
 *
 * The Microsoft Bus Mouse was an early mouse sold by Microsoft, originally
 * introduced in 1983. The mouse had a D-shaped 9-pin connector which plugged
 * into a small ISA add-in board.
 *
 * The mouse itself was very simple (compared to a serial mouse) and most of the
 * logic was located on the ISA board. Later, Microsoft sold an InPort mouse,
 * which was also called a "bus mouse", but used a different interface.
 *
 * Microsoft part numbers for the Bus Mouse were 037-099 (100 ppi)
 * and 037-199 (200 ppi).
 *
 * The Bus Mouse adapter included IRQ configuration jumpers (ref. MS article
 * Q12230). The IRQ could be set to one of 2, 3, 4, 5. The typical setting
 * would be IRQ 2 for a PC/XT and IRQ 5 for an AT compatible. Because IRQ 5
 * may conflict with a SoundBlaster or a PCI device, this device defaults to
 * IRQ 3. Note that IRQ 3 is also used by the COM 2 device, not often needed.
 *
 * The ISA adapter was built around an Intel 8255A compatible chip (ref.
 * MS article Q46369). Once enabled, the adapter raises the configured IRQ
 * 30 times per second; the rate is not configurable. The interrupts
 * occur regardless of whether the mouse state has changed or not.
 *
 * To function properly, the 8255A must be programmed as follows:
 *  - Port A: Input. Used to read motion deltas and button states.
 *  - Port B: Output. Not used except for mouse detection.
 *  - Port C: Split. Upper bits set as output, used for control purposes.
 *                   Lower bits set as input, reflecting IRQ state.
 *
 * Detailed information was gleaned from Windows and OS/2 DDK mouse samples.
 */


/*********************************************************************************************************************************
*   Defined Constants And Macros                                                                                                 *
*********************************************************************************************************************************/
/** The original bus mouse controller is fixed at I/O port 0x23C. */
#define BMS_IO_BASE         0x23C
#define BMS_IO_SIZE         4

/** @name Offsets relative to the I/O base.
 *@{ */
#define BMS_PORT_DATA       0   /**< 8255 Port A. */
#define BMS_PORT_SIG        1   /**< 8255 Port B. */
#define BMS_PORT_CTRL       2   /**< 8255 Port C. */
#define BMS_PORT_INIT       3   /**< 8255 Control Port. */
/** @} */

/** @name Port C bits (control port).
 * @{  */
#define BMS_CTL_INT_DIS     RT_BIT(4)   /**< Disable IRQ (else enabled). */
#define BMS_CTL_SEL_HIGH    RT_BIT(5)   /**< Select hi nibble (else lo). */
#define BMS_CTL_SEL_Y       RT_BIT(6)   /**< Select X to read (else Y). */
#define BMS_CTL_HOLD        RT_BIT(7)   /**< Hold counter (else clear). */
/** @} */

/** @name Port A bits (data port).
 * @{ */
#define BMS_DATA_DELTA      0x0F        /**< Motion delta in lower nibble. */
#define BMS_DATA_B3_UP      RT_BIT(5)   /**< Button 3 (right) is up. */
#define BMS_DATA_B2_UP      RT_BIT(6)   /**< Button 2 (middle) is up. */
#define BMS_DATA_B1_UP      RT_BIT(7)   /**< Button 1 (left) is up. */
/** @} */

/** Convert IRQ level (2/3/4/5) to a bit in the control register. */
#define BMS_IRQ_BIT(a)      (1 << (5 - a))

/** IRQ period, corresponds to approx. 30 Hz. */
#define BMS_IRQ_PERIOD_MS   34

/** Default IRQ setting. */
#define BMS_DEFAULT_IRQ     3

/** The saved state version. */
#define BMS_SAVED_STATE_VERSION     1


/*********************************************************************************************************************************
*   Structures and Typedefs                                                                                                      *
*********************************************************************************************************************************/
/**
 * The device state.
 */
typedef struct MouState
{
    /** @name 8255A state
     * @{ */
    uint8_t         port_a;
    uint8_t         port_b;
    uint8_t         port_c;
    uint8_t         ctrl_port;
    uint8_t         cnt_held;   /**< Counters held for reading. */
    uint8_t         held_dx;
    uint8_t         held_dy;
    uint8_t         irq;        /**< The "jumpered" IRQ level. */
    int32_t         irq_toggle_counter;
    /** Mouse timer handle - HC. */
    PTMTIMERR3      MouseTimer;
    /** Timer period in milliseconds. */
    uint32_t        cTimerPeriodMs;
    /** @} */

    /** @name mouse state
     * @{ */
    int32_t         disable_counter;
    uint8_t         mouse_enabled;
    int32_t         mouse_dx; /* current values, needed for 'poll' mode */
    int32_t         mouse_dy;
    uint8_t         mouse_buttons;
    uint8_t         mouse_buttons_reported;
    /** @}  */

    /** Pointer to the device instance - RC. */
    PPDMDEVINSRC    pDevInsRC;
    /** Pointer to the device instance - R3 . */
    PPDMDEVINSR3    pDevInsR3;
    /** Pointer to the device instance. */
    PPDMDEVINSR0    pDevInsR0;

    /**
     * Mouse port - LUN#0.
     *
     * @implements  PDMIBASE
     * @implements  PDMIMOUSEPORT
     */
    struct
    {
        /** The base interface for the mouse port. */
        PDMIBASE                            IBase;
        /** The mouse port base interface. */
        PDMIMOUSEPORT                       IPort;

        /** The base interface of the attached mouse driver. */
        R3PTRTYPE(PPDMIBASE)                pDrvBase;
        /** The mouse interface of the attached mouse driver. */
        R3PTRTYPE(PPDMIMOUSECONNECTOR)      pDrv;
    } Mouse;
} MouState;



#ifndef VBOX_DEVICE_STRUCT_TESTCASE

# ifdef IN_RING3

/**
 * Report a change in status down the driver chain.
 *
 * We want to report the mouse as enabled if and only if the guest is "using"
 * it. That way, other devices (e.g. a PS/2 or USB mouse) can receive mouse
 * events when the bus mouse is disabled. Enabling interrupts constitutes
 * enabling the bus mouse. The mouse is considered disabled if interrupts are
 * disabled for several consecutive mouse timer ticks; this is because the
 * interrupt handler in the guest typically temporarily disables interrupts and
 * we do not want to toggle the enabled/disabled state more often than
 * necessary.
 */
static void bms_update_downstream_status(MouState *pThis)
{
    PPDMIMOUSECONNECTOR pDrv = pThis->Mouse.pDrv;
    bool fEnabled = !!pThis->mouse_enabled;
    pDrv->pfnReportModes(pDrv, fEnabled, false, false);
}

/**
 * Set the emulated hardware to a known initial state.
 */
static void bms_reset(MouState *pThis)
{
    /* Clear the device setup. */
    pThis->port_a = pThis->port_b = 0;
    pThis->port_c = BMS_CTL_INT_DIS;    /* Interrupts disabled. */
    pThis->ctrl_port = 0x91;            /* Default 8255A setup. */

    /* Clear motion/button state. */
    pThis->cnt_held = false;
    pThis->mouse_dx = pThis->mouse_dy = 0;
    pThis->mouse_buttons = 0;
    pThis->mouse_buttons_reported = 0;
    pThis->disable_counter = 0;
    pThis->irq_toggle_counter = 1000;

    if (pThis->mouse_enabled)
    {
        pThis->mouse_enabled = false;
        bms_update_downstream_status(pThis);
    }
}

/* Process a mouse event coming from the host. */
static void bms_mouse_event(MouState *pThis, int dx, int dy, int dz, int dw,
                            int buttons_state)
{
    LogRel3(("%s: dx=%d, dy=%d, dz=%d, dw=%d, buttons_state=0x%x\n",
             __PRETTY_FUNCTION__, dx, dy, dz, dw, buttons_state));

    /* Only record X/Y movement and buttons. */
    pThis->mouse_dx += dx;
    pThis->mouse_dy += dy;
    pThis->mouse_buttons = buttons_state;
}

static DECLCALLBACK(void) bmsTimerCallback(PPDMDEVINS pDevIns, PTMTIMER pTimer, void *pvUser)
{
    RT_NOREF(pvUser);
    MouState   *pThis = PDMINS_2_DATA(pDevIns, MouState *);
    uint8_t     irq_bit;

    /* Toggle the IRQ line if interrupts are enabled. */
    irq_bit = BMS_IRQ_BIT(pThis->irq);

    if (pThis->port_c & irq_bit)
    {
        if (!(pThis->port_c & BMS_CTL_INT_DIS))
            PDMDevHlpISASetIrq(pThis->CTX_SUFF(pDevIns), pThis->irq, PDM_IRQ_LEVEL_LOW);
        pThis->port_c &= ~irq_bit;
    }
    else
    {
        pThis->port_c |= irq_bit;
        if (!(pThis->port_c & BMS_CTL_INT_DIS))
            PDMDevHlpISASetIrq(pThis->CTX_SUFF(pDevIns), pThis->irq, PDM_IRQ_LEVEL_HIGH);
    }

    /* Handle enabling/disabling of the mouse interface. */
    if (pThis->port_c & BMS_CTL_INT_DIS)
    {
        if (pThis->disable_counter)
            --pThis->disable_counter;

        if (pThis->disable_counter == 0 && pThis->mouse_enabled)
        {
            pThis->mouse_enabled = false;
            bms_update_downstream_status(pThis);
        }
    }
    else
    {
        pThis->disable_counter = 8; /* Re-arm the disable countdown. */
        if (!pThis->mouse_enabled)
        {
            pThis->mouse_enabled = true;
            bms_update_downstream_status(pThis);
        }
    }

    /* Re-arm the timer. */
    TMTimerSetMillies(pTimer, pThis->cTimerPeriodMs);
}

# endif /* IN_RING3 */

static void bms_set_reported_buttons(MouState *pThis, unsigned fButtons, unsigned fButtonMask)
{
    pThis->mouse_buttons_reported |= (fButtons & fButtonMask);
    pThis->mouse_buttons_reported &= (fButtons | ~fButtonMask);
}

/* Update the internal state after a write to port C. */
static void bms_update_ctrl(MouState *pThis)
{
    int32_t     dx, dy;

    /* If the controller is in hold state, transfer data from counters. */
    if (pThis->port_c & BMS_CTL_HOLD)
    {
        if (!pThis->cnt_held)
        {
            pThis->cnt_held = true;
            dx = pThis->mouse_dx < 0 ? RT_MAX(pThis->mouse_dx, -128)
                                     : RT_MIN(pThis->mouse_dx, 127);
            dy = pThis->mouse_dy < 0 ? RT_MAX(pThis->mouse_dy, -128)
                                     : RT_MIN(pThis->mouse_dy, 127);
            pThis->mouse_dx -= dx;
            pThis->mouse_dy -= dy;
            bms_set_reported_buttons(pThis, pThis->mouse_buttons & 0x07, 0x07);

            /* Force type conversion. */
            pThis->held_dx = dx;
            pThis->held_dy = dy;
        }
    }
    else
        pThis->cnt_held = false;

    /* Move the appropriate nibble into port A. */
    if (pThis->cnt_held)
    {
        if (pThis->port_c & BMS_CTL_SEL_Y)
        {
            if (pThis->port_c & BMS_CTL_SEL_HIGH)
                pThis->port_a = pThis->held_dy >> 4;
            else
                pThis->port_a = pThis->held_dy & 0xF;
        }
        else
        {
            if (pThis->port_c & BMS_CTL_SEL_HIGH)
                pThis->port_a = pThis->held_dx >> 4;
            else
                pThis->port_a = pThis->held_dx & 0xF;
        }
        /* And update the button bits. */
        pThis->port_a |= pThis->mouse_buttons & 1 ? 0 : BMS_DATA_B1_UP;
        pThis->port_a |= pThis->mouse_buttons & 2 ? 0 : BMS_DATA_B3_UP;
        pThis->port_a |= pThis->mouse_buttons & 4 ? 0 : BMS_DATA_B2_UP;
    }
    /* Immediately clear the IRQ if necessary. */
    if (pThis->port_c & BMS_CTL_INT_DIS)
    {
        PDMDevHlpISASetIrq(pThis->CTX_SUFF(pDevIns), pThis->irq, PDM_IRQ_LEVEL_LOW);
        pThis->port_c &= ~(BMS_IRQ_BIT(pThis->irq));
    }
}

static int bms_write_port(MouState *pThis, uint32_t offPort, uint32_t uValue)
{
    int rc = VINF_SUCCESS;

    LogRel3(("%s: write port %d: 0x%02x\n", __PRETTY_FUNCTION__, offPort, uValue));

    switch (offPort)
    {
        case BMS_PORT_SIG:
            /* Update port B. */
            pThis->port_b = uValue;
            break;
        case BMS_PORT_DATA:
            /* Do nothing, port A is not writable. */
            break;
        case BMS_PORT_INIT:
            pThis->ctrl_port = uValue;
            break;
        case BMS_PORT_CTRL:
            /* Update the high nibble of port C. */
            pThis->port_c = (uValue & 0xF0) | (pThis->port_c & 0x0F);
            bms_update_ctrl(pThis);
            break;
        default:
            AssertMsgFailed(("invalid port %#x\n", offPort));
            break;
    }
    return rc;
}

static uint32_t bms_read_port(MouState *pThis, uint32_t offPort)
{
    uint32_t uValue;

    switch (offPort)
    {
        case BMS_PORT_DATA:
            /* Read port A. */
            uValue = pThis->port_a;
            break;
        case BMS_PORT_SIG:
            /* Read port B. */
            uValue = pThis->port_b;
            break;
        case BMS_PORT_CTRL:
            /* Read port C. */
            uValue = pThis->port_c;
            /* Some Microsoft driver code reads the control port 10,000 times when
             * determining the IRQ level. This can occur faster than the IRQ line
             * transitions and the detection fails. To work around this, we force
             * the IRQ bit to toggle every once in a while.
             */
            if (pThis->irq_toggle_counter)
                pThis->irq_toggle_counter--;
            else
            {
                pThis->irq_toggle_counter = 1000;
                uValue ^= BMS_IRQ_BIT(pThis->irq);
            }
            break;
        case BMS_PORT_INIT:
            /* Read the 8255A control port. */
            uValue = pThis->ctrl_port;
            break;
        default:
            AssertMsgFailed(("invalid port %#x\n", offPort));
            uValue = 0xff;
            break;
    }
    LogRel3(("%s: read port %d: 0x%02x\n", __PRETTY_FUNCTION__, offPort, uValue));
    return uValue;
}

/**
 * Port I/O Handler for port IN operations.
 *
 * @returns VBox status code.
 *
 * @param   pDevIns     The device instance.
 * @param   pvUser      User argument - ignored.
 * @param   Port        Port number used for the IN operation.
 * @param   pu32        Where to store the result.
 * @param   cb          Number of bytes read.
 */
PDMBOTHCBDECL(int) mouIOPortRead(PPDMDEVINS pDevIns, void *pvUser, RTIOPORT Port, uint32_t *pu32, unsigned cb)
{
    NOREF(pvUser);
    if (cb == 1)
    {
        MouState *pThis = PDMINS_2_DATA(pDevIns, MouState *);
        *pu32 = bms_read_port(pThis, Port & 3);
        Log2(("mouIOPortRead: Port=%#x cb=%d *pu32=%#x\n", Port, cb, *pu32));
        return VINF_SUCCESS;
    }
    AssertMsgFailed(("Port=%#x cb=%d\n", Port, cb));
    return VERR_IOM_IOPORT_UNUSED;
}

/**
 * Port I/O Handler for port OUT operations.
 *
 * @returns VBox status code.
 *
 * @param   pDevIns     The device instance.
 * @param   pvUser      User argument - ignored.
 * @param   Port        Port number used for the IN operation.
 * @param   u32         The value to output.
 * @param   cb          The value size in bytes.
 */
PDMBOTHCBDECL(int) mouIOPortWrite(PPDMDEVINS pDevIns, void *pvUser, RTIOPORT Port, uint32_t u32, unsigned cb)
{
    int rc = VINF_SUCCESS;
    NOREF(pvUser);
    if (cb == 1)
    {
        MouState *pThis = PDMINS_2_DATA(pDevIns, MouState *);
        rc = bms_write_port(pThis, Port & 3, u32);
        Log2(("mouIOPortWrite: Port=%#x cb=%d u32=%#x\n", Port, cb, u32));
    }
    else
        AssertMsgFailed(("Port=%#x cb=%d\n", Port, cb));
    return rc;
}

# ifdef IN_RING3

/**
 * Saves the state of the device.
 *
 * @returns VBox status code.
 * @param   pDevIns     The device instance.
 * @param   pSSMHandle  The handle to save the state to.
 */
static DECLCALLBACK(int) mouSaveExec(PPDMDEVINS pDevIns, PSSMHANDLE pSSMHandle)
{
    MouState    *pThis = PDMINS_2_DATA(pDevIns, MouState *);

    /* 8255A state. */
    SSMR3PutU8(pSSMHandle, pThis->port_a);
    SSMR3PutU8(pSSMHandle, pThis->port_b);
    SSMR3PutU8(pSSMHandle, pThis->port_c);
    SSMR3PutU8(pSSMHandle, pThis->ctrl_port);
    /* Other device state. */
    SSMR3PutU8(pSSMHandle, pThis->cnt_held);
    SSMR3PutU8(pSSMHandle, pThis->held_dx);
    SSMR3PutU8(pSSMHandle, pThis->held_dy);
    SSMR3PutU8(pSSMHandle, pThis->irq);
    SSMR3PutU32(pSSMHandle, pThis->cTimerPeriodMs);
    /* Current mouse state deltas. */
    SSMR3PutS32(pSSMHandle, pThis->mouse_dx);
    SSMR3PutS32(pSSMHandle, pThis->mouse_dy);
    SSMR3PutU8(pSSMHandle, pThis->mouse_buttons_reported);
    /* Timer. */
    return TMR3TimerSave(pThis->MouseTimer, pSSMHandle);
}

/**
 * Loads a saved device state.
 *
 * @returns VBox status code.
 * @param   pDevIns     The device instance.
 * @param   pSSMHandle  The handle to the saved state.
 * @param   uVersion    The data unit version number.
 * @param   uPass       The data pass.
 */
static DECLCALLBACK(int) mouLoadExec(PPDMDEVINS pDevIns, PSSMHANDLE pSSMHandle, uint32_t uVersion, uint32_t uPass)
{
    int         rc;
    MouState    *pThis = PDMINS_2_DATA(pDevIns, MouState *);

    Assert(uPass == SSM_PASS_FINAL); NOREF(uPass);

    if (uVersion > BMS_SAVED_STATE_VERSION)
        return VERR_SSM_UNSUPPORTED_DATA_UNIT_VERSION;

    /* 8255A state. */
    SSMR3GetU8(pSSMHandle, &pThis->port_a);
    SSMR3GetU8(pSSMHandle, &pThis->port_b);
    SSMR3GetU8(pSSMHandle, &pThis->port_c);
    SSMR3GetU8(pSSMHandle, &pThis->ctrl_port);
    /* Other device state. */
    SSMR3GetU8(pSSMHandle, &pThis->cnt_held);
    SSMR3GetU8(pSSMHandle, &pThis->held_dx);
    SSMR3GetU8(pSSMHandle, &pThis->held_dy);
    SSMR3GetU8(pSSMHandle, &pThis->irq);
    SSMR3GetU32(pSSMHandle, &pThis->cTimerPeriodMs);
    /* Current mouse state deltas. */
    SSMR3GetS32(pSSMHandle, &pThis->mouse_dx);
    SSMR3GetS32(pSSMHandle, &pThis->mouse_dy);
    SSMR3GetU8(pSSMHandle, &pThis->mouse_buttons_reported);
    /* Timer. */
    rc = TMR3TimerLoad(pThis->MouseTimer, pSSMHandle);
    return rc;
}

/**
 * Reset notification.
 *
 * @returns VBox status code.
 * @param   pDevIns     The device instance data.
 */
static DECLCALLBACK(void) mouReset(PPDMDEVINS pDevIns)
{
    MouState   *pThis = PDMINS_2_DATA(pDevIns, MouState *);

    /* Reinitialize the timer. */
    pThis->cTimerPeriodMs = BMS_IRQ_PERIOD_MS / 2;
    TMTimerSetMillies(pThis->MouseTimer, pThis->cTimerPeriodMs);

    bms_reset(pThis);
}


/* -=-=-=-=-=- Mouse: IBase  -=-=-=-=-=- */

/**
 * @interface_method_impl{PDMIBASE,pfnQueryInterface}
 */
static DECLCALLBACK(void *) mouQueryMouseInterface(PPDMIBASE pInterface, const char *pszIID)
{
    MouState *pThis = RT_FROM_MEMBER(pInterface, MouState, Mouse.IBase);
    PDMIBASE_RETURN_INTERFACE(pszIID, PDMIBASE, &pThis->Mouse.IBase);
    PDMIBASE_RETURN_INTERFACE(pszIID, PDMIMOUSEPORT, &pThis->Mouse.IPort);
    return NULL;
}


/* -=-=-=-=-=- Mouse: IMousePort  -=-=-=-=-=- */

/**
 * @interface_method_impl{PDMIMOUSEPORT,pfnPutEvent}
 */
static DECLCALLBACK(int) mouPutEvent(PPDMIMOUSEPORT pInterface, int32_t dx,
                                     int32_t dy, int32_t dz, int32_t dw,
                                     uint32_t fButtons)
{
    MouState *pThis = RT_FROM_MEMBER(pInterface, MouState, Mouse.IPort);
    int rc = PDMCritSectEnter(pThis->CTX_SUFF(pDevIns)->CTX_SUFF(pCritSectRo), VERR_SEM_BUSY);
    AssertReleaseRC(rc);

    bms_mouse_event(pThis, dx, dy, dz, dw, fButtons);

    PDMCritSectLeave(pThis->CTX_SUFF(pDevIns)->CTX_SUFF(pCritSectRo));
    return VINF_SUCCESS;
}

/**
 * @interface_method_impl{PDMIMOUSEPORT,pfnPutEventAbs}
 */
static DECLCALLBACK(int) mouPutEventAbs(PPDMIMOUSEPORT pInterface, uint32_t x, uint32_t y,
                                        int32_t dz, int32_t dw, uint32_t fButtons)
{
    RT_NOREF(pInterface, x, y, dz, dw, fButtons);
    AssertFailedReturn(VERR_NOT_SUPPORTED);
}

/**
 * @interface_method_impl{PDMIMOUSEPORT,pfnPutEventMultiTouch}
 */
static DECLCALLBACK(int) mouPutEventMultiTouch(PPDMIMOUSEPORT pInterface, uint8_t cContacts,
                                               const uint64_t *pau64Contacts, uint32_t u32ScanTime)
{
    RT_NOREF(pInterface, cContacts, pau64Contacts, u32ScanTime);
    AssertFailedReturn(VERR_NOT_SUPPORTED);
}

/* -=-=-=-=-=- setup code -=-=-=-=-=- */


/**
 * Attach command.
 *
 * This is called to let the device attach to a driver for a specified LUN
 * during runtime. This is not called during VM construction, the device
 * constructor have to attach to all the available drivers.
 *
 * This is like plugging in the mouse after turning on the PC.
 *
 * @returns VBox status code.
 * @param   pDevIns     The device instance.
 * @param   iLUN        The logical unit which is being detached.
 * @param   fFlags      Flags, combination of the PDMDEVATT_FLAGS_* \#defines.
 * @remark  The controller doesn't support this action, this is just
 *          implemented to try out the driver<->device structure.
 */
static DECLCALLBACK(int) mouAttach(PPDMDEVINS pDevIns, unsigned iLUN, uint32_t fFlags)
{
    int         rc;
    MouState   *pThis = PDMINS_2_DATA(pDevIns, MouState *);

    AssertMsgReturn(fFlags & PDM_TACH_FLAGS_NOT_HOT_PLUG,
                    ("Bus mouse device does not support hotplugging\n"),
                    VERR_INVALID_PARAMETER);

    switch (iLUN)
    {
        /* LUN #0: mouse */
        case 0:
            rc = PDMDevHlpDriverAttach(pDevIns, iLUN, &pThis->Mouse.IBase, &pThis->Mouse.pDrvBase, "Bus Mouse Port");
            if (RT_SUCCESS(rc))
            {
                pThis->Mouse.pDrv = PDMIBASE_QUERY_INTERFACE(pThis->Mouse.pDrvBase, PDMIMOUSECONNECTOR);
                if (!pThis->Mouse.pDrv)
                {
                    AssertLogRelMsgFailed(("LUN #0 doesn't have a mouse interface! rc=%Rrc\n", rc));
                    rc = VERR_PDM_MISSING_INTERFACE;
                }
            }
            else if (rc == VERR_PDM_NO_ATTACHED_DRIVER)
            {
                Log(("%s/%d: warning: no driver attached to LUN #0!\n", pDevIns->pReg->szName, pDevIns->iInstance));
                rc = VINF_SUCCESS;
            }
            else
                AssertLogRelMsgFailed(("Failed to attach LUN #0! rc=%Rrc\n", rc));
            break;

        default:
            AssertMsgFailed(("Invalid LUN #%d\n", iLUN));
            return VERR_PDM_NO_SUCH_LUN;
    }

    return rc;
}


/**
 * Detach notification.
 *
 * This is called when a driver is detaching itself from a LUN of the device.
 * The device should adjust it's state to reflect this.
 *
 * This is like unplugging the network cable to use it for the laptop or
 * something while the PC is still running.
 *
 * @param   pDevIns     The device instance.
 * @param   iLUN        The logical unit which is being detached.
 * @param   fFlags      Flags, combination of the PDMDEVATT_FLAGS_* \#defines.
 * @remark  The controller doesn't support this action, this is just
 *          implemented to try out the driver<->device structure.
 */
static DECLCALLBACK(void) mouDetach(PPDMDEVINS pDevIns, unsigned iLUN, uint32_t fFlags)
{
#if 0
    /*
     * Reset the interfaces and update the controller state.
     */
    MouState   *pThis = PDMINS_2_DATA(pDevIns, MouState *);
    switch (iLUN)
    {
        /* LUN #0: mouse */
        case 0:
            pThis->Mouse.pDrv = NULL;
            pThis->Mouse.pDrvBase = NULL;
            break;

        default:
            AssertMsgFailed(("Invalid LUN #%d\n", iLUN));
            break;
    }
#else
    RT_NOREF(pDevIns, iLUN, fFlags);
#endif
}


/**
 * @copydoc FNPDMDEVRELOCATE
 */
static DECLCALLBACK(void) mouRelocate(PPDMDEVINS pDevIns, RTGCINTPTR offDelta)
{
    RT_NOREF(offDelta);
    MouState *pThis = PDMINS_2_DATA(pDevIns, MouState *);
    pThis->pDevInsRC = PDMDEVINS_2_RCPTR(pDevIns);
}


/**
 * @interface_method_impl{PDMDEVREG,pfnConstruct}
 */
static DECLCALLBACK(int) mouConstruct(PPDMDEVINS pDevIns, int iInstance, PCFGMNODE pCfg)
{
    RT_NOREF(iInstance);
    PDMDEV_CHECK_VERSIONS_RETURN(pDevIns);
    MouState   *pThis = PDMINS_2_DATA(pDevIns, MouState *);
    int         rc;
    bool        fGCEnabled;
    bool        fR0Enabled;
    uint8_t     irq_lvl;
    Assert(iInstance == 0);


    /*
     * Validate and read the configuration.
     */
    if (!CFGMR3AreValuesValid(pCfg, "IRQ\0GCEnabled\0R0Enabled\0"))
        return VERR_PDM_DEVINS_UNKNOWN_CFG_VALUES;
    rc = CFGMR3QueryBoolDef(pCfg, "GCEnabled", &fGCEnabled, true);
    if (RT_FAILURE(rc))
        return PDMDEV_SET_ERROR(pDevIns, rc, N_("Failed to query \"GCEnabled\" from the config"));
    rc = CFGMR3QueryBoolDef(pCfg, "R0Enabled", &fR0Enabled, true);
    if (RT_FAILURE(rc))
        return PDMDEV_SET_ERROR(pDevIns, rc, N_("Failed to query \"R0Enabled\" from the config"));
    rc = CFGMR3QueryU8Def(pCfg, "IRQ", &irq_lvl, BMS_DEFAULT_IRQ);
    if (RT_FAILURE(rc))
        return PDMDEV_SET_ERROR(pDevIns, rc, N_("Failed to query \"IRQ\" from the config"));
    if ((irq_lvl < 2) || (irq_lvl > 5))
        return PDMDEV_SET_ERROR(pDevIns, rc, N_("Invalid \"IRQ\" config setting"));

    pThis->irq = irq_lvl;
    /// @todo remove after properly enabling RC/GC support
    fGCEnabled = fR0Enabled = false;
    Log(("busmouse: IRQ=%d fGCEnabled=%RTbool fR0Enabled=%RTbool\n", irq_lvl, fGCEnabled, fR0Enabled));

    /*
     * Initialize the interfaces.
     */
    pThis->pDevInsR3 = pDevIns;
    pThis->pDevInsR0 = PDMDEVINS_2_R0PTR(pDevIns);
    pThis->pDevInsRC = PDMDEVINS_2_RCPTR(pDevIns);
    pThis->Mouse.IBase.pfnQueryInterface     = mouQueryMouseInterface;
    pThis->Mouse.IPort.pfnPutEvent           = mouPutEvent;
    pThis->Mouse.IPort.pfnPutEventAbs        = mouPutEventAbs;
    pThis->Mouse.IPort.pfnPutEventMultiTouch = mouPutEventMultiTouch;

    /*
     * Create the interrupt timer.
     */
    rc = PDMDevHlpTMTimerCreate(pDevIns, TMCLOCK_VIRTUAL, bmsTimerCallback,
                                pThis, TMTIMER_FLAGS_DEFAULT_CRIT_SECT,
                                "Bus Mouse Timer", &pThis->MouseTimer);
    if (RT_FAILURE(rc))
        return rc;

    /*
     * Register I/O ports, saved state, and mouse event handlers.
     */
    rc = PDMDevHlpIOPortRegister(pDevIns, BMS_IO_BASE, BMS_IO_SIZE, NULL, mouIOPortWrite, mouIOPortRead, NULL, NULL, "Bus Mouse");
    if (RT_FAILURE(rc))
        return rc;
    if (fGCEnabled)
    {
        rc = PDMDevHlpIOPortRegisterRC(pDevIns, BMS_IO_BASE, BMS_IO_SIZE, 0, "mouIOPortWrite", "mouIOPortRead", NULL, NULL, "Bus Mouse");
        if (RT_FAILURE(rc))
            return rc;
    }
    if (fR0Enabled)
    {
        rc = PDMDevHlpIOPortRegisterR0(pDevIns, BMS_IO_BASE, BMS_IO_SIZE, 0, "mouIOPortWrite", "mouIOPortRead", NULL, NULL, "Bus Mouse");
        if (RT_FAILURE(rc))
            return rc;
    }
    rc = PDMDevHlpSSMRegister(pDevIns, BMS_SAVED_STATE_VERSION, sizeof(*pThis), mouSaveExec, mouLoadExec);
    if (RT_FAILURE(rc))
        return rc;

    /*
     * Attach to the mouse driver.
     */
    rc = mouAttach(pDevIns, 0, PDM_TACH_FLAGS_NOT_HOT_PLUG);
    if (RT_FAILURE(rc))
        return rc;

    /*
     * Initialize the device state.
     */
    mouReset(pDevIns);

    return VINF_SUCCESS;
}


/**
 * The device registration structure.
 */
const PDMDEVREG g_DeviceBusMouse =
{
    /* u32Version */
    PDM_DEVREG_VERSION,
    /* szName */
    "busmouse",
    /* szRCMod */
    "VBoxDDRC.rc",
    /* szR0Mod */
    "VBoxDDR0.r0",
    /* pszDescription */
    "Microsoft Bus Mouse controller. "
    "LUN #0 is the mouse connector.",
    /* fFlags */
    PDM_DEVREG_FLAGS_HOST_BITS_DEFAULT | PDM_DEVREG_FLAGS_GUEST_BITS_32_64 | PDM_DEVREG_FLAGS_PAE36
    | PDM_DEVREG_FLAGS_RC | PDM_DEVREG_FLAGS_R0,
    /* fClass */
    PDM_DEVREG_CLASS_INPUT,
    /* cMaxInstances */
    1,
    /* cbInstance */
    sizeof(MouState),
    /* pfnConstruct */
    mouConstruct,
    /* pfnDestruct */
    NULL,
    /* pfnRelocate */
    mouRelocate,
    /* pfnMemSetup */
    NULL,
    /* pfnPowerOn */
    NULL,
    /* pfnReset */
    mouReset,
    /* pfnSuspend */
    NULL,
    /* pfnResume */
    NULL,
    /* pfnAttach */
    mouAttach,
    /* pfnDetach */
    mouDetach,
    /* pfnQueryInterface. */
    NULL,
    /* pfnInitComplete */
    NULL,
    /* pfnPowerOff */
    NULL,
    /* pfnSoftReset */
    NULL,
    /* u32VersionEnd */
    PDM_DEVREG_VERSION
};

#ifdef VBOX_IN_EXTPACK_R3
/**
 * @callback_method_impl{FNPDMVBOXDEVICESREGISTER}
 */
extern "C" DECLEXPORT(int) VBoxDevicesRegister(PPDMDEVREGCB pCallbacks, uint32_t u32Version)
{
    AssertLogRelMsgReturn(u32Version >= VBOX_VERSION,
                          ("u32Version=%#x VBOX_VERSION=%#x\n", u32Version, VBOX_VERSION),
                          VERR_EXTPACK_VBOX_VERSION_MISMATCH);
    AssertLogRelMsgReturn(pCallbacks->u32Version == PDM_DEVREG_CB_VERSION,
                          ("pCallbacks->u32Version=%#x PDM_DEVREG_CB_VERSION=%#x\n", pCallbacks->u32Version, PDM_DEVREG_CB_VERSION),
                          VERR_VERSION_MISMATCH);

    return pCallbacks->pfnRegister(pCallbacks, &g_DeviceBusMouse);
}
#endif /* VBOX_IN_EXTPACK_R3 */

# endif /* IN_RING3 */
#endif /* !VBOX_DEVICE_STRUCT_TESTCASE */

