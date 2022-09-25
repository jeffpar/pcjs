/*  EmulatorDialog.java
 *
 *  v1.0 created June 2001 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 */


import java.awt.*;
import java.awt.event.*;


class EmulatorDialog implements Runnable
{
    Dialog dlg;
    Emulator emul;
    Thread threadDlg;
    
    
    EmulatorDialog(Emulator applet, int iValue)
    {
        emul = applet;
        
        dlg = new Dialog(new Frame(), "PIMulator", true);
        
        Button doneButton = new Button("OK");
        
        dlg.setLayout(new FlowLayout(FlowLayout.CENTER, 10, 10)); 
        dlg.add(new Label("The PIMulator is still being downloaded (" + iValue + "%). Wait a moment and try again.", Label.CENTER));
        dlg.add(doneButton);
        dlg.pack();
        dlg.setResizable(false);
        
        Point ptScreen = emul.getLocationOnScreen();
      //Dimension dmDialog = dlg.getSize();
        
        dlg.setLocation(ptScreen.x + emul.cxEmul/2, ptScreen.y + emul.cyEmul/2);
        
        threadDlg = new Thread(this, "DialogThread");
        threadDlg.start();
        
        doneButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                dlg.dispose();
                emul.NotifyDialogDispose();
                threadDlg.stop();
            }
        });
    }
    
    
    public void run()
    {
        SetForeground();
    }
    

    public void SetForeground()
    {
        dlg.show();
    }

}
