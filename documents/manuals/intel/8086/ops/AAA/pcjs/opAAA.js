/**
 * op=0x37 (AAA)
 *
 * @this {X86CPU}
 */
X86.opAAA = function()
{
    var CF, AF;
    var AL = this.regEAX & 0xff;
    var AH = (this.regEAX >> 8) & 0xff;
    if ((AL & 0xf) > 9 || this.getAF()) {
        AL += 6;
        /*
         * Simulate the fact that the 80286 and higher add 6 to AX rather than AL.
         */
        if (this.model >= X86.MODEL_80286 && AL > 0xff) AH++;
        AH++;
        CF = AF = 1;
    } else {
        CF = AF = 0;
    }
    this.regEAX = (this.regEAX & ~0xffff) | (((AH << 8) | AL) & 0xff0f);
    if (CF) this.setCF(); else this.clearCF();
    if (AF) this.setAF(); else this.clearAF();
    this.nStepCycles -= this.cycleCounts.nOpCyclesAAA;
};
