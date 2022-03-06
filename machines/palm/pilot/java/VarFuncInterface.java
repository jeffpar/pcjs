/*  VarFuncInterface.java
 *
 *  v1.0 created June 2001 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This defines the methods that the ScriptVarFunc class must implement.
 */


public interface VarFuncInterface
{
    public void Call(CPUThread cpu, int opStop);
    public void Return(CPUThread cpu);
}
