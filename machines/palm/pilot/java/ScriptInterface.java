/*  ScriptInterface.java
 *
 *  v1.0 created June 2001 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This defines the methods that the ScriptManager class must implement.
 */


public interface ScriptInterface
{
    public void Init(Device dev);
    public void Destroy();
    public String ParseCommand(String sCommand);
}
