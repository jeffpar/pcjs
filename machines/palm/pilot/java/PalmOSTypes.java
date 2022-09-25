/*  PalmOSTypes.java
 *
 *  v1.0 created May 2001 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This class describes all the PalmOS data types and API calls.
 *
 *  Notes
 *  -----
 *
 *  Opening the Launcher (http://www.doublebit.com/mirrors/palmos_com/dev/tech/docs/palmos/UserInterface.html#926590):
 *
 *      EventType newEvent;
 *      newEvent.eType = keyDownEvent;
 *      newEvent.data.keyDown.chr = launchChr;
 *      newEvent.data.keyDown.modifiers = commandKeyMask;
 *      EvtAddEventToQueue (&newEvent);
 *
 *  Do NOT use SysUIAppSwitch() to launch the Launcher.  There is also SysAppLauncherDialog (http://www.doublebit.com/mirrors/palmos_com/dev/tech/docs/palmos/SystemDialogs.html#924927),
 *  because prior to PalmOS 3.0, the Launcher was implemented as a popup.  However, SysUIAppSwitch() seems to work just fine on PalmOS 1.0,
 *  so I'm not sure I care.
 */


class PalmOSTypes extends ScriptVarType
{
    public static final String[] aAPIDescs = {              // http://www.doublebit.com/mirrors/palmos_com/dev/tech/docs/palmos/ReferenceTOC.html
        "MemInit",                              // 0x000
        "MemInitHeapTable",                     // 0x001
        "MemStoreInit",                         // 0x002
        "MemCardFormat",                        // 0x003
        "MemCardInfo(cardNo:uw,cardName:psz32,manufName:psz32,version:puw,crDate:pui,romSize:pui,ramSize:pui,freeBytes:pui):Err:uw",    // 0x004    // http://www.doublebit.com/mirrors/palmos_com/dev/tech/docs/palmos/MemoryManager.html#924915
        "MemStoreInfo",                         // 0x005
        "MemStoreSetInfo",                      // 0x006
        "MemNumHeaps",                          // 0x007
        "MemNumRAMHeaps",                       // 0x008
        "MemHeapID",                            // 0x009
        "MemHeapPtr",                           // 0x00a
        "MemHeapFreeBytes",                     // 0x00b
        "MemHeapSize",                          // 0x00c
        "MemHeapFlags",                         // 0x00d
        "MemHeapCompact",                       // 0x00e
        "MemHeapInit",                          // 0x00f
        "MemHeapFreeByOwnerID",                 // 0x010
        "MemChunkNew",                          // 0x011
        "MemChunkFree(p:p):Err:uw",             // 0x012    // http://www.doublebit.com/mirrors/palmos_com/dev/tech/docs/palmos/MemoryManager.html#925616
        "MemPtrNew(size:ui):p",                 // 0x013    // http://www.doublebit.com/mirrors/palmos_com/dev/tech/docs/palmos/MemoryManager.html#925646
        "MemPtrRecoverHandle",                  // 0x014
        "MemPtrFlags",                          // 0x015
        "MemPtrSize",                           // 0x016
        "MemPtrOwner",                          // 0x017
        "MemPtrHeapID",                         // 0x018
        "MemPtrCardNo",                         // 0x019
        "MemPtrToLocalID",                      // 0x01a
        "MemPtrSetOwner",                       // 0x01b
        "MemPtrResize",                         // 0x01c
        "MemPtrResetLock",                      // 0x01d
        "MemHandleNew",                         // 0x01e
        "MemHandleLockCount",                   // 0x01f
        "MemHandleToLocalID",                   // 0x020
        "MemHandleLock",                        // 0x021
        "MemHandleUnlock",                      // 0x022
        "MemLocalIDToGlobal",                   // 0x023
        "MemLocalIDKind",                       // 0x024
        "MemLocalIDToPtr",                      // 0x025
        "MemMove",                              // 0x026
        "MemSet",                               // 0x027
        "MemStoreSearch",                       // 0x028
        "MemPtrDataStorage",                    // 0x029
        "MemKernelInit",                        // 0x02a
        "MemHandleFree",                        // 0x02b
        "MemHandleFlags",                       // 0x02c
        "MemHandleSize",                        // 0x02d
        "MemHandleOwner",                       // 0x02e
        "MemHandleHeapID",                      // 0x02f
        "MemHandleDataStorage",                 // 0x030
        "MemHandleCardNo",                      // 0x031
        "MemHandleSetOwner",                    // 0x032
        "MemHandleResize",                      // 0x033
        "MemHandleResetLock",                   // 0x034
        "MemPtrUnlock",                         // 0x035
        "MemLocalIDToLockedPtr",                // 0x036
        "MemSetDebugMode",                      // 0x037
        "MemHeapScramble",                      // 0x038
        "MemHeapCheck",                         // 0x039
        "MemNumCards",                          // 0x03a
        "MemDebugMode",                         // 0x03b
        "MemSemaphoreReserve",                  // 0x03c
        "MemSemaphoreRelease",                  // 0x03d
        "MemHeapDynamic",                       // 0x03e
        "MemNVParams",                          // 0x03f
        "DmInit",                               // 0x040
        "DmCreateDatabase",                     // 0x041
        "DmDeleteDatabase(cardNo:uw,dbID:ui):Err:uw",       // 0x042    // http://www.doublebit.com/mirrors/palmos_com/dev/tech/docs/palmos/DataAndResourceManager.html#988040
        "DmNumDatabases",                       // 0x043
        "DmGetDatabase",                        // 0x044
        "DmFindDatabase(cardNo:uw,name:psz):LocalID:ui",    // 0x045    // http://www.doublebit.com/mirrors/palmos_com/dev/tech/docs/palmos/DataAndResourceManager.html#925838
        "DmDatabaseInfo",                       // 0x046
        "DmSetDatabaseInfo",                    // 0x047
        "DmDatabaseSize",                       // 0x048
        "DmOpenDatabase",                       // 0x049
        "DmCloseDatabase",                      // 0x04a
        "DmNextOpenDatabase",                   // 0x04b
        "DmOpenDatabaseInfo",                   // 0x04c
        "DmResetRecordStates",                  // 0x04d
        "DmGetLastErr",                         // 0x04e
        "DmNumRecords",                         // 0x04f
        "DmRecordInfo",                         // 0x050
        "DmSetRecordInfo",                      // 0x051
        "DmAttachRecord",                       // 0x052
        "DmDetachRecord",                       // 0x053
        "DmMoveRecord",                         // 0x054
        "DmNewRecord",                          // 0x055
        "DmRemoveRecord",                       // 0x056
        "DmDeleteRecord",                       // 0x057
        "DmArchiveRecord",                      // 0x058
        "DmNewHandle",                          // 0x059
        "DmRemoveSecretRecords",                // 0x05a
        "DmQueryRecord",                        // 0x05b
        "DmGetRecord",                          // 0x05c
        "DmResizeRecord",                       // 0x05d
        "DmReleaseRecord",                      // 0x05e
        "DmGetResource",                        // 0x05f
        "DmGet1Resource",                       // 0x060
        "DmReleaseResource",                    // 0x061
        "DmResizeResource",                     // 0x062
        "DmNextOpenResDatabase",                // 0x063
        "DmFindResourceType",                   // 0x064
        "DmFindResource",                       // 0x065
        "DmSearchResource",                     // 0x066
        "DmNumResources",                       // 0x067
        "DmResourceInfo",                       // 0x068
        "DmSetResourceInfo",                    // 0x069
        "DmAttachResource",                     // 0x06a
        "DmDetachResource",                     // 0x06b
        "DmNewResource",                        // 0x06c
        "DmRemoveResource",                     // 0x06d
        "DmGetResourceIndex",                   // 0x06e
        "DmQuickSort",                          // 0x06f
        "DmQueryNextInCategory",                // 0x070
        "DmNumRecordsInCategory",               // 0x071
        "DmPositionInCategory",                 // 0x072
        "DmSeekRecordInCategory",               // 0x073
        "DmMoveCategory",                       // 0x074
        "DmOpenDatabaseByTypeCreator",          // 0x075
        "DmWrite",                              // 0x076
        "DmStrCopy",                            // 0x077
        "DmGetNextDatabaseByTypeCreator",       // 0x078
        "DmWriteCheck",                         // 0x079
        "DmMoveOpenDBContext",                  // 0x07a
        "DmFindRecordByID",                     // 0x07b
        "DmGetAppInfoID",                       // 0x07c
        "DmFindSortPositionV10",                // 0x07d
        "DmSet",                                // 0x07e
        "DmCreateDatabaseFromImage(buffer:p):Err:uw",   // 0x07f    // http://www.doublebit.com/mirrors/palmos_com/dev/tech/docs/palmos/DataAndResourceManager.html#925506
        "DbgSrcMessage",                        // 0x080
        "DbgMessage",                           // 0x081
        "DbgGetMessage",                        // 0x082
        "DbgCommSettings",                      // 0x083
        "ErrDisplayFileLineMsg",                // 0x084
        "ErrSetJump",                           // 0x085
        "ErrLongJump",                          // 0x086
        "ErrThrow",                             // 0x087
        "ErrExceptionList",                     // 0x088
        "SysBroadcastActionCode",               // 0x089
        "SysUnimplemented",                     // 0x08a
        "SysColdBoot",                          // 0x08b
        "SysReset",                             // 0x08c
        "SysDoze",                              // 0x08d
        "SysAppLaunch",                         // 0x08e
        "SysAppStartup",                        // 0x08f
        "SysAppExit",                           // 0x090
        "SysSetA5",                             // 0x091
        "SysSetTrapAddress",                    // 0x092
        "SysGetTrapAddress",                    // 0x093
        "SysTranslateKernelErr",                // 0x094
        "SysSemaphoreCreate",                   // 0x095
        "SysSemaphoreDelete",                   // 0x096
        "SysSemaphoreWait",                     // 0x097
        "SysSemaphoreSignal",                   // 0x098
        "SysTimerCreate",                       // 0x099
        "SysTimerWrite",                        // 0x09a
        "SysTaskCreate",                        // 0x09b
        "SysTaskDelete",                        // 0x09c
        "SysTaskTrigger",                       // 0x09d
        "SysTaskID",                            // 0x09e
        "SysTaskUserInfoPtr",                   // 0x09f
        "SysTaskDelay",                         // 0x0a0
        "SysTaskSetTermProc",                   // 0x0a1
        "SysUILaunch",                          // 0x0a2
        "SysNewOwnerID",                        // 0x0a3
        "SysSemaphoreSet",                      // 0x0a4
        "SysDisableInts",                       // 0x0a5
        "SysRestoreStatus",                     // 0x0a6
        "SysUIAppSwitch(cardNo:uw,dbID:ui,cmd:uw,cmdPBP:p):Err:uw",     // 0x0a7    // http://www.doublebit.com/mirrors/palmos_com/dev/tech/docs/palmos/SystemManager.html#925699
        "SysCurAppInfoP",                       // 0x0a8
        "SysHandleEvent",                       // 0x0a9
        "SysInit",                              // 0x0aa
        "SysQSort",                             // 0x0ab
        "SysCurAppDatabase",                    // 0x0ac
        "SysFatalAlert",                        // 0x0ad
        "SysResSemaphoreCreate",                // 0x0ae
        "SysResSemaphoreDelete",                // 0x0af
        "SysResSemaphoreReserve",               // 0x0b0
        "SysResSemaphoreRelease",               // 0x0b1
        "SysSleep",                             // 0x0b2
        "SysKeyboardDialogV10",                 // 0x0b3
        "SysAppLauncherDialog",                 // 0x0b4
        "SysSetPerformance",                    // 0x0b5
        "SysBatteryInfo",                       // 0x0b6
        "SysLibInstall",                        // 0x0b7
        "SysLibRemove",                         // 0x0b8
        "SysLibTblEntry",                       // 0x0b9
        "SysLibFind",                           // 0x0ba
        "SysBatteryDialog",                     // 0x0bb
        "SysCopyStringResource",                // 0x0bc
        "SysKernelInfo",                        // 0x0bd
        "SysLaunchConsole",                     // 0x0be
        "SysTimerDelete",                       // 0x0bf
        "SysSetAutoOffTime",                    // 0x0c0
        "SysFormPointerArrayToStrings",         // 0x0c1
        "SysRandom",                            // 0x0c2
        "SysTaskSwitching",                     // 0x0c3
        "SysTimerRead",                         // 0x0c4
        "StrCopy",                              // 0x0c5
        "StrCat",                               // 0x0c6
        "StrLen",                               // 0x0c7
        "StrCompare",                           // 0x0c8
        "StrIToA",                              // 0x0c9
        "StrCaselessCompare",                   // 0x0ca
        "StrIToH",                              // 0x0cb
        "StrChr",                               // 0x0cc
        "StrStr",                               // 0x0cd
        "StrAToI",                              // 0x0ce
        "StrToLower",                           // 0x0cf
        "SerReceiveISP",                        // 0x0d0
        "SlkOpen",                              // 0x0d1
        "SlkClose",                             // 0x0d2
        "SlkOpenSocket",                        // 0x0d3
        "SlkCloseSocket",                       // 0x0d4
        "SlkSocketRefNum",                      // 0x0d5
        "SlkSocketSetTimeout",                  // 0x0d6
        "SlkFlushSocket",                       // 0x0d7
        "SlkSetSocketListener",                 // 0x0d8
        "SlkSendPacket",                        // 0x0d9
        "SlkReceivePacket",                     // 0x0da
        "SlkSysPktDefaultResponse",             // 0x0db
        "SlkProcessRPC",                        // 0x0dc
        "ConPutS",                              // 0x0dd
        "ConGetS",                              // 0x0de
        "FplInit",                              // 0x0df
        "FplFree",                              // 0x0e0
        "FplFToA",                              // 0x0e1
        "FplAToF",                              // 0x0e2
        "FplBase10Info",                        // 0x0e3
        "FplLongToFloat",                       // 0x0e4
        "FplFloatToLong",                       // 0x0e5
        "FplFloatToULong",                      // 0x0e6
        "FplMul",                               // 0x0e7
        "FplAdd",                               // 0x0e8
        "FplSub",                               // 0x0e9
        "FplDiv",                               // 0x0ea
        "ScrInit",                              // 0x0eb
        "ScrCopyRectangle",                     // 0x0ec
        "ScrDrawChars",                         // 0x0ed
        "ScrLineRoutine",                       // 0x0ee
        "ScrRectangleRoutine",                  // 0x0ef
        "ScrScreenInfo",                        // 0x0f0
        "ScrDrawNotify",                        // 0x0f1
        "ScrSendUpdateArea",                    // 0x0f2
        "ScrCompressScanLine",                  // 0x0f3
        "ScrDeCompressScanLine",                // 0x0f4
        "TimGetSeconds",                        // 0x0f5
        "TimSetSeconds",                        // 0x0f6
        "TimGetTicks",                          // 0x0f7
        "TimInit",                              // 0x0f8
        "TimSetAlarm",                          // 0x0f9
        "TimGetAlarm",                          // 0x0fa
        "TimHandleInterrupt",                   // 0x0fb
        "TimSecondsToDateTime",                 // 0x0fc
        "TimDateTimeToSeconds",                 // 0x0fd
        "TimAdjust",                            // 0x0fe
        "TimSleep",                             // 0x0ff
        "TimWake",                              // 0x100
        "CategoryCreateListV10",                // 0x101
        "CategoryFreeListV10",                  // 0x102
        "CategoryFind",                         // 0x103
        "CategoryGetName",                      // 0x104
        "CategoryEditV10",                      // 0x105
        "CategorySelectV10",                    // 0x106
        "CategoryGetNext",                      // 0x107
        "CategorySetTriggerLabel",              // 0x108
        "CategoryTruncateName",                 // 0x109
        "ClipboardAddItem",                     // 0x10a
        "ClipboardCheckIfItemExist",            // 0x10b
        "ClipboardGetItem",                     // 0x10c
        "CtlDrawControl",                       // 0x10d
        "CtlEraseControl",                      // 0x10e
        "CtlHideControl",                       // 0x10f
        "CtlShowControl",                       // 0x110
        "CtlGetValue",                          // 0x111
        "CtlSetValue",                          // 0x112
        "CtlGetLabel",                          // 0x113
        "CtlSetLabel",                          // 0x114
        "CtlHandleEvent",                       // 0x115
        "CtlHitControl",                        // 0x116
        "CtlSetEnabled",                        // 0x117
        "CtlSetUsable",                         // 0x118
        "CtlEnabled",                           // 0x119
        "EvtInitialize",                        // 0x11a
        "EvtAddEventToQueue",                   // 0x11b
        "EvtCopyEvent",                         // 0x11c
        "EvtGetEvent",                          // 0x11d
        "EvtGetPen",                            // 0x11e
        "EvtSysInit",                           // 0x11f
        "EvtGetSysEvent",                       // 0x120
        "EvtProcessSoftKeyStroke",              // 0x121
        "EvtGetPenBtnList",                     // 0x122
        "EvtSetPenQueuePtr",                    // 0x123
        "EvtPenQueueSize",                      // 0x124
        "EvtFlushPenQueue",                     // 0x125
        "EvtEnqueuePenPoint",                   // 0x126
        "EvtDequeuePenStrokeInfo",              // 0x127
        "EvtDequeuePenPoint",                   // 0x128
        "EvtFlushNextPenStroke",                // 0x129
        "EvtSetKeyQueuePtr",                    // 0x12a
        "EvtKeyQueueSize",                      // 0x12b
        "EvtFlushKeyQueue",                     // 0x12c
        "EvtEnqueueKey",                        // 0x12d
        "EvtDequeueKeyEvent",                   // 0x12e
        "EvtWakeup",                            // 0x12f
        "EvtResetAutoOffTimer",                 // 0x130
        "EvtKeyQueueEmpty",                     // 0x131
        "EvtEnableGraffiti",                    // 0x132
        "FldCopy",                              // 0x133
        "FldCut",                               // 0x134
        "FldDrawField",                         // 0x135
        "FldEraseField",                        // 0x136
        "FldFreeMemory",                        // 0x137
        "FldGetBounds",                         // 0x138
        "FldGetTextPtr",                        // 0x139
        "FldGetSelection",                      // 0x13a
        "FldHandleEvent",                       // 0x13b
        "FldPaste",                             // 0x13c
        "FldRecalculateField",                  // 0x13d
        "FldSetBounds",                         // 0x13e
        "FldSetText",                           // 0x13f
        "FldGetFont",                           // 0x140
        "FldSetFont",                           // 0x141
        "FldSetSelection",                      // 0x142
        "FldGrabFocus",                         // 0x143
        "FldReleaseFocus",                      // 0x144
        "FldGetInsPtPosition",                  // 0x145
        "FldSetInsPtPosition",                  // 0x146
        "FldSetScrollPosition",                 // 0x147
        "FldGetScrollPosition",                 // 0x148
        "FldGetTextHeight",                     // 0x149
        "FldGetTextAllocatedSize",              // 0x14a
        "FldGetTextLength",                     // 0x14b
        "FldScrollField",                       // 0x14c
        "FldScrollable",                        // 0x14d
        "FldGetVisibleLines",                   // 0x14e
        "FldGetAttributes",                     // 0x14f
        "FldSetAttributes",                     // 0x150
        "FldSendChangeNotification",            // 0x151
        "FldCalcFieldHeight",                   // 0x152
        "FldGetTextHandle",                     // 0x153
        "FldCompactText",                       // 0x154
        "FldDirty",                             // 0x155
        "FldWordWrap",                          // 0x156
        "FldSetTextAllocatedSize",              // 0x157
        "FldSetTextHandle",                     // 0x158
        "FldSetTextPtr",                        // 0x159
        "FldGetMaxChars",                       // 0x15a
        "FldSetMaxChars",                       // 0x15b
        "FldSetUsable",                         // 0x15c
        "FldInsert",                            // 0x15d
        "FldDelete",                            // 0x15e
        "FldUndo",                              // 0x15f
        "FldSetDirty",                          // 0x160
        "FldSendHeightChangeNotification",      // 0x161
        "FldMakeFullyVisible",                  // 0x162
        "FntGetFont",                           // 0x163
        "FntSetFont",                           // 0x164
        "FntGetFontPtr",                        // 0x165
        "FntBaseLine",                          // 0x166
        "FntCharHeight",                        // 0x167
        "FntLineHeight",                        // 0x168
        "FntAverageCharWidth",                  // 0x169
        "FntCharWidth",                         // 0x16a
        "FntCharsWidth",                        // 0x16b
        "FntDescenderHeight",                   // 0x16c
        "FntCharsInWidth",                      // 0x16d
        "FntLineWidth",                         // 0x16e
        "FrmInitForm",                          // 0x16f
        "FrmDeleteForm",                        // 0x170
        "FrmDrawForm",                          // 0x171
        "FrmEraseForm",                         // 0x172
        "FrmGetActiveForm",                     // 0x173
        "FrmSetActiveForm",                     // 0x174
        "FrmGetActiveFormID",                   // 0x175
        "FrmGetUserModifiedState",              // 0x176
        "FrmSetNotUserModified",                // 0x177
        "FrmGetFocus",                          // 0x178
        "FrmSetFocus",                          // 0x179
        "FrmHandleEvent",                       // 0x17a
        "FrmGetFormBounds",                     // 0x17b
        "FrmGetWindowHandle",                   // 0x17c
        "FrmGetFormId",                         // 0x17d
        "FrmGetFormPtr",                        // 0x17e
        "FrmGetNumberOfObjects",                // 0x17f
        "FrmGetObjectIndex",                    // 0x180
        "FrmGetObjectId",                       // 0x181
        "FrmGetObjectType",                     // 0x182
        "FrmGetObjectPtr",                      // 0x183
        "FrmHideObject",                        // 0x184
        "FrmShowObject",                        // 0x185
        "FrmGetObjectPosition",                 // 0x186
        "FrmSetObjectPosition",                 // 0x187
        "FrmGetControlValue",                   // 0x188
        "FrmSetControlValue",                   // 0x189
        "FrmGetControlGroupSelection",          // 0x18a
        "FrmSetControlGroupSelection",          // 0x18b
        "FrmCopyLabel",                         // 0x18c
        "FrmSetLabel",                          // 0x18d
        "FrmGetLabel",                          // 0x18e
        "FrmSetCategoryLabel",                  // 0x18f
        "FrmGetTitle",                          // 0x190
        "FrmSetTitle",                          // 0x191
        "FrmAlert",                             // 0x192
        "FrmDoDialog",                          // 0x193
        "FrmCustomAlert",                       // 0x194
        "FrmHelp",                              // 0x195
        "FrmUpdateScrollers",                   // 0x196
        "FrmGetFirstForm",                      // 0x197
        "FrmVisible",                           // 0x198
        "FrmGetObjectBounds",                   // 0x199
        "FrmCopyTitle",                         // 0x19a
        "FrmGotoForm",                          // 0x19b
        "FrmPopupForm",                         // 0x19c
        "FrmUpdateForm",                        // 0x19d
        "FrmReturnToForm",                      // 0x19e
        "FrmSetEventHandler",                   // 0x19f
        "FrmDispatchEvent",                     // 0x1a0
        "FrmCloseAllForms",                     // 0x1a1
        "FrmSaveAllForms",                      // 0x1a2
        "FrmGetGadgetData",                     // 0x1a3
        "FrmSetGadgetData",                     // 0x1a4
        "FrmSetCategoryTrigger",                // 0x1a5
        "UIInitialize",                         // 0x1a6
        "UIReset",                              // 0x1a7
        "InsPtInitialize",                      // 0x1a8
        "InsPtSetLocation",                     // 0x1a9
        "InsPtGetLocation",                     // 0x1aa
        "InsPtEnable",                          // 0x1ab
        "InsPtEnabled",                         // 0x1ac
        "InsPtSetHeight",                       // 0x1ad
        "InsPtGetHeight",                       // 0x1ae
        "InsPtCheckBlink",                      // 0x1af
        "LstSetDrawFunction",                   // 0x1b0
        "LstDrawList",                          // 0x1b1
        "LstEraseList",                         // 0x1b2
        "LstGetSelection",                      // 0x1b3
        "LstGetSelectionText",                  // 0x1b4
        "LstHandleEvent",                       // 0x1b5
        "LstSetHeight",                         // 0x1b6
        "LstSetSelection",                      // 0x1b7
        "LstSetListChoices",                    // 0x1b8
        "LstMakeItemVisible",                   // 0x1b9
        "LstGetNumberOfItems",                  // 0x1ba
        "LstPopupList",                         // 0x1bb
        "LstSetPosition",                       // 0x1bc
        "MenuInit",                             // 0x1bd
        "MenuDispose",                          // 0x1be
        "MenuHandleEvent",                      // 0x1bf
        "MenuDrawMenu",                         // 0x1c0
        "MenuEraseStatus",                      // 0x1c1
        "MenuGetActiveMenu",                    // 0x1c2
        "MenuSetActiveMenu",                    // 0x1c3
        "RctSetRectangle",                      // 0x1c4
        "RctCopyRectangle",                     // 0x1c5
        "RctInsetRectangle",                    // 0x1c6
        "RctOffsetRectangle",                   // 0x1c7
        "RctPtInRectangle",                     // 0x1c8
        "RctGetIntersection",                   // 0x1c9
        "TblDrawTable",                         // 0x1ca
        "TblEraseTable",                        // 0x1cb
        "TblHandleEvent",                       // 0x1cc
        "TblGetItemBounds",                     // 0x1cd
        "TblSelectItem",                        // 0x1ce
        "TblGetItemInt",                        // 0x1cf
        "TblSetItemInt",                        // 0x1d0
        "TblSetItemStyle",                      // 0x1d1
        "TblUnhighlightSelection",              // 0x1d2
        "TblSetRowUsable",                      // 0x1d3
        "TblGetNumberOfRows",                   // 0x1d4
        "TblSetCustomDrawProcedure",            // 0x1d5
        "TblSetRowSelectable",                  // 0x1d6
        "TblRowSelectable",                     // 0x1d7
        "TblSetLoadDataProcedure",              // 0x1d8
        "TblSetSaveDataProcedure",              // 0x1d9
        "TblGetBounds",                         // 0x1da
        "TblSetRowHeight",                      // 0x1db
        "TblGetColumnWidth",                    // 0x1dc
        "TblGetRowID",                          // 0x1dd
        "TblSetRowID",                          // 0x1de
        "TblMarkRowInvalid",                    // 0x1df
        "TblMarkTableInvalid",                  // 0x1e0
        "TblGetSelection",                      // 0x1e1
        "TblInsertRow",                         // 0x1e2
        "TblRemoveRow",                         // 0x1e3
        "TblRowInvalid",                        // 0x1e4
        "TblRedrawTable",                       // 0x1e5
        "TblRowUsable",                         // 0x1e6
        "TblReleaseFocus",                      // 0x1e7
        "TblEditing",                           // 0x1e8
        "TblGetCurrentField",                   // 0x1e9
        "TblSetColumnUsable",                   // 0x1ea
        "TblGetRowHeight",                      // 0x1eb
        "TblSetColumnWidth",                    // 0x1ec
        "TblGrabFocus",                         // 0x1ed
        "TblSetItemPtr",                        // 0x1ee
        "TblFindRowID",                         // 0x1ef
        "TblGetLastUsableRow",                  // 0x1f0
        "TblGetColumnSpacing",                  // 0x1f1
        "TblFindRowData",                       // 0x1f2
        "TblGetRowData",                        // 0x1f3
        "TblSetRowData",                        // 0x1f4
        "TblSetColumnSpacing",                  // 0x1f5
        "WinCreateWindow",                      // 0x1f6
        "WinCreateOffscreenWindow",             // 0x1f7
        "WinDeleteWindow",                      // 0x1f8
        "WinInitializeWindow",                  // 0x1f9
        "WinAddWindow",                         // 0x1fa
        "WinRemoveWindow",                      // 0x1fb
        "WinSetActiveWindow",                   // 0x1fc
        "WinSetDrawWindow",                     // 0x1fd
        "WinGetDrawWindow",                     // 0x1fe
        "WinGetActiveWindow",                   // 0x1ff
        "WinGetDisplayWindow",                  // 0x200
        "WinGetFirstWindow",                    // 0x201
        "WinEnableWindow",                      // 0x202
        "WinDisableWindow",                     // 0x203
        "WinGetWindowFrameRect",                // 0x204
        "WinDrawWindowFrame",                   // 0x205
        "WinEraseWindow",                       // 0x206
        "WinSaveBits",                          // 0x207
        "WinRestoreBits",                       // 0x208
        "WinCopyRectangle",                     // 0x209
        "WinScrollRectangle",                   // 0x20a
        "WinGetDisplayExtent",                  // 0x20b
        "WinGetWindowExtent",                   // 0x20c
        "WinDisplayToWindowPt",                 // 0x20d
        "WinWindowToDisplayPt",                 // 0x20e
        "WinGetClip",                           // 0x20f
        "WinSetClip",                           // 0x210
        "WinResetClip",                         // 0x211            
        "WinClipRectangle",                     // 0x212
        "WinDrawLine",                          // 0x213
        "WinDrawGrayLine",                      // 0x214
        "WinEraseLine",                         // 0x215
        "WinInvertLine",                        // 0x216
        "WinFillLine",                          // 0x217
        "WinDrawRectangle",                     // 0x218
        "WinEraseRectangle",                    // 0x219
        "WinInvertRectangle",                   // 0x21a
        "WinDrawRectangleFrame",                // 0x21b
        "WinDrawGrayRectangleFrame",            // 0x21c
        "WinEraseRectangleFrame",               // 0x21d
        "WinInvertRectangleFrame",              // 0x21e
        "WinGetFramesRectangle",                // 0x21f
        "WinDrawChars",                         // 0x220
        "WinEraseChars",                        // 0x221
        "WinInvertChars",                       // 0x222
        "WinGetPattern",                        // 0x223
        "WinSetPattern",                        // 0x224
        "WinSetUnderlineMode",                  // 0x225
        "WinDrawBitmap",                        // 0x226
        "WinModal",                             // 0x227
        "WinGetWindowBounds",                   // 0x228
        "WinFillRectangle",                     // 0x229
        "WinDrawInvertedChars",                 // 0x22a
        "PrefOpenPreferenceDBV10",              // 0x22b
        "PrefGetPreferences",                   // 0x22c
        "PrefSetPreferences",                   // 0x22d
        "PrefGetAppPreferencesV10",             // 0x22e
        "PrefSetAppPreferencesV10",             // 0x22f
        "SndInit",                              // 0x230
        "SndSetDefaultVolume",                  // 0x231
        "SndGetDefaultVolume",                  // 0x232
        "SndDoCmd",                             // 0x233
        "SndPlaySystemSound",                   // 0x234
        "AlmInit",                              // 0x235
        "AlmCancelAll",                         // 0x236
        "AlmAlarmCallback",                     // 0x237
        "AlmSetAlarm",                          // 0x238
        "AlmGetAlarm",                          // 0x239
        "AlmDisplayAlarm",                      // 0x23a
        "AlmEnableNotification",                // 0x23b
        "HwrGetRAMMapping",                     // 0x23c
        "HwrMemWritable",                       // 0x23d
        "HwrMemReadable",                       // 0x23e
        "HwrDoze",                              // 0x23f
        "HwrSleep",                             // 0x240
        "HwrWake",                              // 0x241
        "HwrSetSystemClock",                    // 0x242
        "HwrSetCPUDutyCycle",                   // 0x243
        "HwrLCDInit",                           // 0x244
        "HwrLCDSleep",                          // 0x245
        "HwrTimerInit",                         // 0x246
        "HwrCursor",                            // 0x247
        "HwrBatteryLevel",                      // 0x248
        "HwrDelay",                             // 0x249
        "HwrEnableDataWrites",                  // 0x24a
        "HwrDisableDataWrites",                 // 0x24b
        "HwrLCDBaseAddr",                       // 0x24c
        "HwrLCDDrawBitmap",                     // 0x24d
        "HwrTimerSleep",                        // 0x24e
        "HwrTimerWake",                         // 0x24f
        "HwrLCDWake",                           // 0x250
        "HwrIRQ1Handler",                       // 0x251
        "HwrIRQ2Handler",                       // 0x252
        "HwrIRQ3Handler",                       // 0x253
        "HwrIRQ4Handler",                       // 0x254
        "HwrIRQ5Handler",                       // 0x255
        "HwrIRQ6Handler",                       // 0x256
        "HwrDockSignals",                       // 0x257
        "HwrPluggedIn",                         // 0x258
        "Crc16CalcBlock",                       // 0x259
        "SelectDayV10",                         // 0x25a
        "SelectTime",                           // 0x25b
        "DayDrawDaySelector",                   // 0x25c
        "DayHandleEvent",                       // 0x25d
        "DayDrawDays",                          // 0x25e
        "DayOfWeek",                            // 0x25f
        "DaysInMonth",                          // 0x260
        "DayOfMonth",                           // 0x261
        "DateDaysToDate",                       // 0x262
        "DateToDays",                           // 0x263
        "DateAdjust",                           // 0x264
        "DateSecondsToDate",                    // 0x265
        "DateToAscii",                          // 0x266
        "DateToDOWDMFormat",                    // 0x267
        "TimeToAscii",                          // 0x268
        "Find",                                 // 0x269
        "FindStrInStr",                         // 0x26a
        "FindSaveMatch",                        // 0x26b
        "FindGetLineBounds",                    // 0x26c
        "FindDrawHeader",                       // 0x26d
        "PenOpen",                              // 0x26e
        "PenClose",                             // 0x26f
        "PenGetRawPen",                         // 0x270
        "PenCalibrate",                         // 0x271
        "PenRawToScreen",                       // 0x272
        "PenScreenToRaw",                       // 0x273
        "PenResetCalibration",                  // 0x274
        "PenSleep",                             // 0x275
        "PenWake",                              // 0x276
        "ResLoadForm",                          // 0x277
        "ResLoadMenu",                          // 0x278
        "FtrInit",                              // 0x279
        "FtrUnregister",                        // 0x27a
        "FtrGet",                               // 0x27b
        "FtrSet",                               // 0x27c
        "FtrGetByIndex",                        // 0x27d
        "GrfInit",                              // 0x27e
        "GrfFree",                              // 0x27f
        "GrfGetState",                          // 0x280
        "GrfSetState",                          // 0x281
        "GrfFlushPoints",                       // 0x282
        "GrfAddPoint",                          // 0x283
        "GrfInitState",                         // 0x284
        "GrfCleanState",                        // 0x285
        "GrfMatch",                             // 0x286
        "GrfGetMacro",                          // 0x287
        "GrfFilterPoints",                      // 0x288
        "GrfGetNumPoints",                      // 0x289
        "GrfGetPoint",                          // 0x28a
        "GrfFindBranch",                        // 0x28b
        "GrfMatchGlyph",                        // 0x28c
        "GrfGetGlyphMapping",                   // 0x28d
        "GrfGetMacroName",                      // 0x28e
        "GrfDeleteMacro",                       // 0x28f
        "GrfAddMacro",                          // 0x290
        "GrfGetAndExpandMacro",                 // 0x291
        "GrfProcessStroke",                     // 0x292
        "GrfFieldChange",                       // 0x293
        "GetCharSortValue",                     // 0x294
        "GetCharAttr",                          // 0x295
        "GetCharCaselessValue",                 // 0x296
        "PwdExists",                            // 0x297
        "PwdVerify",                            // 0x298
        "PwdSet",                               // 0x299
        "PwdRemove",                            // 0x29a
        "GsiInitialize",                        // 0x29b
        "GsiSetLocation",                       // 0x29c
        "GsiEnable",                            // 0x29d
        "GsiEnabled",                           // 0x29e
        "GsiSetShiftState",                     // 0x29f
        "KeyInit",                              // 0x2a0
        "KeyHandleInterrupt",                   // 0x2a1
        "KeyCurrentState",                      // 0x2a2
        "KeyResetDoubleTap",                    // 0x2a3
        "KeyRates",                             // 0x2a4
        "KeySleep",                             // 0x2a5
        "KeyWake",                              // 0x2a6
        "DlkControl",                           // 0x2a7
        "DlkStartServer",                       // 0x2a8
        "DlkGetSyncInfo",                       // 0x2a9
        "DlkSetLogEntry",                       // 0x2aa
        null,                                   // 0x2ab
        "SysLibLoad",                           // 0x2ac
        null,                                   // 0x2ad
        null,                                   // 0x2ae
        "AbtShowAbout",                         // 0x2af
        "MdmDial",                              // 0x2b0
        "MdmHangUp",                            // 0x2b1
        "DmSearchRecord",                       // 0x2b2
        "SysInsertionSort",                     // 0x2b3
        "DmInsertionSort",                      // 0x2b4
        "LstSetTopItem",                        // 0x2b5
        //
        //  PalmOS 2.0 and higher:
        //
        "SclSetScrollBar",                      // 0x2b6
        "SclDrawScrollBar",                     // 0x2b7
        "SclHandleEvent",                       // 0x2b8
        "SysMailboxCreate",                     // 0x2b9
        "SysMailboxDelete",                     // 0x2ba
        "SysMailboxFlush",                      // 0x2bb
        "SysMailboxSend",                       // 0x2bc
        "SysMailboxWait",                       // 0x2bd
        "SysTaskWait",                          // 0x2be
        "SysTaskWake",                          // 0x2bf
        "SysTaskWaitClr",                       // 0x2c0
        "SysTaskSuspend",                       // 0x2c1
        "SysTaskResume",                        // 0x2c2
        "CategoryCreateList",                   // 0x2c3
        "CategoryFreeList",                     // 0x2c4
        "CategoryEdit",                         // 0x2c5
        "CategorySelect",                       // 0x2c6
        "DmDeleteCategory",                     // 0x2c7
        "SysEvGroupCreate",                     // 0x2c8
        "SysEvGroupSignal",                     // 0x2c9
        "SysEvGroupRead",                       // 0x2ca
        "SysEvGroupWait",                       // 0x2cb
        "EvtEventAvail",                        // 0x2cc
        "EvtSysEventAvail",                     // 0x2cd
        "StrNCopy",                             // 0x2ce
        "KeySetMask",                           // 0x2cf
        "SelectDay",                            // 0x2d0
        "PrefGetPreference",                    // 0x2d1
        "PrefSetPreference",                    // 0x2d2
        "PrefGetAppPreferences",                // 0x2d3
        "PrefSetAppPreferences",                // 0x2d4
        "FrmPointInTitle",                      // 0x2d5
        "StrNCat",                              // 0x2d6
        "MemCmp",                               // 0x2d7
        "TblSetColumnEditIndicator",            // 0x2d8
        "FntWordWrap",                          // 0x2d9
        "FldGetScrollValues",                   // 0x2da
        "SysCreateDataBaseList",                // 0x2db
        "SysCreatePanelList",                   // 0x2dc
        "DlkDispatchRequest",                   // 0x2dd
        "StrPrintF",                            // 0x2de
        "StrVPrintF",                           // 0x2df
        "PrefOpenPreferenceDB",                 // 0x2e0
        "SysGraffitiReferenceDialog",           // 0x2e1
        "SysKeyboardDialog",                    // 0x2e2
        "FntWordWrapReverseNLines",             // 0x2e3
        "FntGetScrollValues",                   // 0x2e4
        "TblSetRowStaticHeight",                // 0x2e5
        "TblHasScrollBar",                      // 0x2e6
        "SclGetScrollBar",                      // 0x2e7
        "FldGetNumberOfBlankLines",             // 0x2e8
        "SysTicksPerSecond",                    // 0x2e9
        "HwrBacklight",                         // 0x2ea
        "DmDatabaseProtect",                    // 0x2eb
        "TblSetBounds",                         // 0x2ec
        "StrNCompare",                          // 0x2ed
        "StrNCaselessCompare",                  // 0x2ee
        "PhoneNumberLookup",                    // 0x2ef
        "FrmSetMenu",                           // 0x2f0
        "EncDigestMD5",                         // 0x2f1
        "DmFindSortPosition",                   // 0x2f2
        "SysBinarySearch",                      // 0x2f3
        "SysErrString",                         // 0x2f4
        "SysStringByIndex",                     // 0x2f5
        "EvtAddUniqueEventToQueue",             // 0x2f6
        "StrLocalizeNumber",                    // 0x2f7
        "StrDelocalizeNumber",                  // 0x2f8
        "LocGetNumberSeparators",               // 0x2f9
        "MenuSetActiveMenuRscID",               // 0x2fa
        "LstScrollList",                        // 0x2fb
        "CategoryInitialize",                   // 0x2fc
        "EncDigestMD4",                         // 0x2fd
        "EncDES",                               // 0x2fe
        "LstGetVisibleItems",                   // 0x2ff
        "WinSetWindowBounds",                   // 0x300
        "CategorySetName",                      // 0x301
        "FldSetInsertionPoint",                 // 0x302
        "FrmSetObjectBounds",                   // 0x303
        "WinSetColors",                         // 0x304
        "FlpDispatch",                          // 0x305
        "FlpEmDispatch",                        // 0x306
        //
        //  PalmOS 3.0 and higher:
        //
        "ExgInit",                              // 0x307
        "ExgConnect",                           // 0x308
        "ExgPut",                               // 0x309
        "ExgGet",                               // 0x30A
        "ExgAccept",                            // 0x30B
        "ExgDisconnect",                        // 0x30C
        "ExgSend",                              // 0x30D
        "ExgReceive",                           // 0x30E
        "ExgRegisterData",                      // 0x30F
        "ExgNotifyReceive",                     // 0x310
        "ExgControl",                           // 0x311
        "PrgStartDialogV31",                    // 0x312  /* Updated in v3.2 */
        "PrgStopDialog",                        // 0x313
        "PrgUpdateDialog",                      // 0x314
        "PrgHandleEvent",                       // 0x315
        "ImcReadFieldNoSemicolon",              // 0x316
        "ImcReadFieldQuotablePrintable",        // 0x317
        "ImcReadPropertyParameter",             // 0x318
        "ImcSkipAllPropertyParameters",         // 0x319
        "ImcReadWhiteSpace",                    // 0x31A
        "ImcWriteQuotedPrintable",              // 0x31B
        "ImcWriteNoSemicolon",                  // 0x31C
        "ImcStringIsAscii",                     // 0x31D
        "TblGetItemFont",                       // 0x31E
        "TblSetItemFont",                       // 0x31F
        "FontSelect",                           // 0x320
        "FntDefineFont",                        // 0x321
        "CategoryEdit",                         // 0x322
        "SysGetOSVersionString",                // 0x323
        "SysBatteryInfo",                       // 0x324
        "SysUIBusy",                            // 0x325
        "WinValidateHandle",                    // 0x326
        "FrmValidatePtr",                       // 0x327
        "CtlValidatePointer",                   // 0x328
        "WinMoveWindowAddr",                    // 0x329
        "FrmAddSpaceForObject",                 // 0x32A
        "FrmNewForm",                           // 0x32B
        "CtlNewControl",                        // 0x32C
        "FldNewField",                          // 0x32D
        "LstNewList",                           // 0x32E
        "FrmNewLabel",                          // 0x32F
        "FrmNewBitmap",                         // 0x330
        "FrmNewGadget",                         // 0x331
        "FileOpen",                             // 0x332
        "FileClose",                            // 0x333
        "FileDelete",                           // 0x334
        "FileReadLow",                          // 0x335
        "FileWrite",                            // 0x336
        "FileSeek",                             // 0x337
        "FileTell",                             // 0x338
        "FileTruncate",                         // 0x339
        "FileControl",                          // 0x33A
        "FrmActiveState",                       // 0x33B
        "SysGetAppInfo",                        // 0x33C
        "SysGetStackInfo",                      // 0x33D
        "WinScreenMode",                        // 0x33E  /* was sysTrapScrDisplayMode */
        "HwrLCDGetDepthV33",                    // 0x33F  /* This trap obsoleted for OS 3.5 and later */
        "HwrGetROMToken",                       // 0x340
        "DbgControl",                           // 0x341
        "ExgDBRead",                            // 0x342
        "ExgDBWrite",                           // 0x343
        "HostControl",                          // 0x344  /* Renamed from sysTrapSysGremlins, functionality generalized */
        "FrmRemoveObject",                      // 0x345
        "SysReserved1",                         // 0x346  /* "Reserved" trap in Palm OS 3.0 and later trap table */
        "SysReserved2",                         // 0x347  /* "Reserved" trap in Palm OS 3.0 and later trap table */
        "SysReserved3",                         // 0x348  /* "Reserved" trap in Palm OS 3.0 and later trap table */
        "OEMDispatch",                          // 0x349  /* OEM trap in Palm OS 3.0 and later trap table (formerly sysTrapSysReserved4) */
        //
        //  PalmOS 3.1 and higher:
        //
        "HwrLCDContrastV33",                    // 0x34A  /* This trap obsoleted for OS 3.5 and later */
        "SysLCDContrast",                       // 0x34B
        "UIContrastAdjust",                     // 0x34C  /* Renamed from sysTrapContrastAdjust */
        "HwrDockStatus",                        // 0x34D
        "FntWidthToOffset",                     // 0x34E
        "SelectOneTime",                        // 0x34F
        "WinDrawChar",                          // 0x350
        "WinDrawTruncChars",                    // 0x351
        "SysNotifyInit",                        // 0x352  /* Notification Manager traps */
        "SysNotifyRegister",                    // 0x353
        "SysNotifyUnregister",                  // 0x354
        "SysNotifyBroadcast",                   // 0x355
        "SysNotifyBroadcastDeferred",           // 0x356
        "SysNotifyDatabaseAdded",               // 0x357
        "SysNotifyDatabaseRemoved",             // 0x358
        "SysWantEvent",                         // 0x359
        "FtrPtrNew",                            // 0x35A
        "FtrPtrFree",                           // 0x35B
        "FtrPtrResize",                         // 0x35C
        "SysReserved5",                         // 0x35D  /* "Reserved" trap in Palm OS 3.1 and later trap table */
        //
        //  PalmOS 3.2 and 3.3 and higher:
        //
        "HwrNVPrefSet",                         // 0x35E  /* mapped to FlashParmsWrite */
        "HwrNVPrefGet",                         // 0x35F  /* mapped to FlashParmsRead */
        "FlashInit",                            // 0x360
        "FlashCompress",                        // 0x361
        "FlashErase",                           // 0x362
        "FlashProgram",                         // 0x363
        "AlmTimeChange",                        // 0x364
        "ErrAlertCustom",                       // 0x365
        "PrgStartDialog",                       // 0x366  /* New version of sysTrapPrgStartDialogV31 */
        "SerialDispatch",                       // 0x367
        "HwrBattery",                           // 0x368
        "DmGetDatabaseLockState",               // 0x369
        "CncGetProfileList",                    // 0x36A
        "CncGetProfileInfo",                    // 0x36B
        "CncAddProfile",                        // 0x36C
        "CncDeleteProfile",                     // 0x36D
        "SndPlaySmfResource",                   // 0x36E
        "MemPtrDataStorage",                    // 0x36F  /* Never actually installed until now. */
        "ClipboardAppendItem",                  // 0x370
        "WiCmdV32",                             // 0x371  /* Code moved to INetLib; trap obsolete */
        //
        //  PalmOS 3.5 and higher:
        //
        "HwrDisplayAttributes",                 // 0x372
        "HwrDisplayDoze",                       // 0x373
        "HwrDisplayPalette",                    // 0x374
        "BltFindIndexes",                       // 0x375
        "BmpGetBits",                           // 0x376  /* was BltGetBitsAddr */
        "BltCopyRectangle",                     // 0x377
        "BltDrawChars",                         // 0x378
        "BltLineRoutine",                       // 0x379
        "BltRectangleRoutine",                  // 0x37A
        "ScrCompress",                          // 0x37B
        "ScrDecompress",                        // 0x37C
        "SysLCDBrightness",                     // 0x37D
        "WinPaintChar",                         // 0x37E
        "WinPaintChars",                        // 0x37F
        "WinPaintBitmap",                       // 0x380
        "WinGetPixel",                          // 0x381
        "WinPaintPixel",                        // 0x382
        "WinDrawPixel",                         // 0x383
        "WinErasePixel",                        // 0x384
        "WinInvertPixel",                       // 0x385
        "WinPaintPixels",                       // 0x386
        "WinPaintLines",                        // 0x387
        "WinPaintLine",                         // 0x388
        "WinPaintRectangle",                    // 0x389
        "WinPaintRectangleFrame",               // 0x38A
        "WinPaintPolygon",                      // 0x38B
        "WinDrawPolygon",                       // 0x38C
        "WinErasePolygon",                      // 0x38D
        "WinInvertPolygon",                     // 0x38E
        "WinFillPolygon",                       // 0x38F
        "WinPaintArc",                          // 0x390
        "WinDrawArc",                           // 0x391
        "WinEraseArc",                          // 0x392
        "WinInvertArc",                         // 0x393
        "WinFillArc",                           // 0x394
        "WinPushDrawState",                     // 0x395
        "WinPopDrawState",                      // 0x396
        "WinSetDrawMode",                       // 0x397
        "WinSetForeColor",                      // 0x398
        "WinSetBackColor",                      // 0x399
        "WinSetTextColor",                      // 0x39A
        "WinGetPatternType",                    // 0x39B
        "WinSetPatternType",                    // 0x39C
        "WinPalette",                           // 0x39D
        "WinRGBToIndex",                        // 0x39E
        "WinIndexToRGB",                        // 0x39F
        "WinScreenLock",                        // 0x3A0
        "WinScreenUnlock",                      // 0x3A1
        "WinGetBitmap",                         // 0x3A2
        "UIColorInit",                          // 0x3A3
        "UIColorGetTableEntryIndex",            // 0x3A4
        "UIColorGetTableEntryRGB",              // 0x3A5
        "UIColorSetTableEntry",                 // 0x3A6
        "UIColorPushTable",                     // 0x3A7
        "UIColorPopTable",                      // 0x3A8
        "CtlNewGraphicControl",                 // 0x3A9
        "TblGetItemPtr",                        // 0x3AA
        "UIBrightnessAdjust",                   // 0x3AB
        "UIPickColor",                          // 0x3AC
        "EvtSetAutoOffTimer",                   // 0x3AD
        "TsmDispatch",                          // 0x3AE
        "OmDispatch",                           // 0x3AF
        "DmOpenDBNoOverlay",                    // 0x3B0
        "DmOpenDBWithLocale",                   // 0x3B1
        "ResLoadConstant",                      // 0x3B2
        "HwrPreDebugInit",                      // 0x3B3
        "HwrResetNMI",                          // 0x3B4
        "HwrResetPWM",                          // 0x3B5
        "KeyBootKeys",                          // 0x3B6
        "DbgSerDrvOpen",                        // 0x3B7
        "DbgSerDrvClose",                       // 0x3B8
        "DbgSerDrvControl",                     // 0x3B9
        "DbgSerDrvStatus",                      // 0x3BA
        "DbgSerDrvWriteChar",                   // 0x3BB
        "DbgSerDrvReadChar",                    // 0x3BC
        "HwrPostDebugInit",                     // 0x3BD
        "HwrIdentifyFeatures",                  // 0x3BE
        "HwrModelSpecificInit",                 // 0x3BF
        "HwrModelInitStage2",                   // 0x3C0
        "HwrInterruptsInit",                    // 0x3C1
        "HwrSoundOn",                           // 0x3C2
        "HwrSoundOff",                          // 0x3C3
        "SysKernelClockTick",                   // 0x3C4
        "MenuEraseMenu",                        // 0x3C5
        "SelectTime",                           // 0x3C6
        "MenuCmdBarAddButton",                  // 0x3C7
        "MenuCmdBarGetButtonData",              // 0x3C8
        "MenuCmdBarDisplay",                    // 0x3C9
        "HwrGetSilkscreenID",                   // 0x3CA
        "EvtGetSilkscreenAreaList",             // 0x3CB
        "SysFatalAlertInit",                    // 0x3CC
        "DateTemplateToAscii",                  // 0x3CD
        "SecVerifyPW",                          // 0x3CE
        "SecSelectViewStatus",                  // 0x3CF
        "TblSetColumnMasked",                   // 0x3D0
        "TblSetRowMasked",                      // 0x3D1
        "TblRowMasked",                         // 0x3D2
        "FrmCustomResponseAlert",               // 0x3D3
        "FrmNewGsi",                            // 0x3D4
        "MenuShowItem",                         // 0x3D5
        "MenuHideItem",                         // 0x3D6
        "MenuAddItem",                          // 0x3D7
        "FrmSetGadgetHandler",                  // 0x3D8
        "CtlSetGraphics",                       // 0x3D9
        "CtlGetSliderValues",                   // 0x3DA
        "CtlSetSliderValues",                   // 0x3DB
        "CtlNewSliderControl",                  // 0x3DC
        "BmpCreate",                            // 0x3DD
        "BmpDelete",                            // 0x3DE
        "BmpCompress",                          // 0x3DF
        "BmpGetColortable",                     // 0x3E0
        "BmpSize",                              // 0x3E1
        "BmpBitsSize",                          // 0x3E2
        "BmpColortableSize",                    // 0x3E3
        "WinCreateBitmapWindow",                // 0x3E4
        "EvtSetNullEventTick",                  // 0x3E5
        "ExgDoDialog",                          // 0x3E6
        "SysUICleanup",                         // 0x3E7
    };

    private static final String[] aAPIAliases = {
        "MemPtrFree",                           // 0x012
    };
    
    private static final int[] aAPIAliasTraps = {
        0x012,                                  // MemPtrFree == MemChunkFree
    };
    
    
    /*  GetAPIName(iTrap)
     *
     *  ENTRY
     *      iTrap == TRAP #
     *
     *  EXIT
     *      API name, or null if none
     */
    static public String GetAPIName(int iTrap)
    {
        String s = null;
        int iAPI = (iTrap & 0xffff) - CPUDefs.TRAP_0xF_PALMOS_API;
        
        if (iAPI >= 0 && iAPI < aAPIDescs.length) {
            s = aAPIDescs[iAPI];
            if (s != null) {
                int i = s.indexOf('(');
                if (i >= 0)
                    s = s.substring(0, i);
            }
        }
        
        return s != null? s : "0x" + Integer.toHexString(iTrap);
    }


    /*  GetAPIDesc(iTrap)
     *
     *  ENTRY
     *      iTrap == TRAP #
     *
     *  EXIT
     *      API description string, or null if none
     */
    static public String GetAPIDesc(int iTrap)
    {
        int iAPI = (iTrap & 0xffff) - CPUDefs.TRAP_0xF_PALMOS_API;
        
        if (iAPI >= 0 && iAPI < aAPIDescs.length)
            return aAPIDescs[iAPI];
        
        return null;
    }


    /*  FindAPIName(sAPI)
     *
     *  ENTRY
     *      sAPI == name of API
     *
     *  EXIT
     *      iTrap, or -1 if none
     */
    static public int FindAPIName(String sAPI)
    {
        int i;
        sAPI = sAPI.toLowerCase();
        for (i=0; i<aAPIDescs.length; i++) {
            String s = GetAPIName(i + CPUDefs.TRAP_0xF_PALMOS_API);
            if (s.toLowerCase().equals(sAPI))
                return i + CPUDefs.TRAP_0xF_PALMOS_API;
        }
        for (i=0; i<aAPIAliases.length; i++) {
            if (aAPIAliases[i].toLowerCase().equals(sAPI))
                return aAPIAliasTraps[i] + CPUDefs.TRAP_0xF_PALMOS_API;
        }
        return -1;
    }

}
