/*  FileStream.java
 *
 *  v1.0 created March 1999 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 */


import java.awt.*;
import java.awt.image.*;
import java.applet.*;
import java.io.*;
import java.net.*;
import java.util.zip.*;

#if DEBUG
import com.ms.security.*;
#endif


class FileStream
{
    /*  The following FileStream state variables are cleared by Close().  Note that Open()
     *  always calls Close() first, to insure the FileStream is properly reinitialized if it
     *  ever used to reopen a file -- which can happen if non-sequential reads are requested.
     */
    private int iType;
    private int iStatus;
    private int offCur;
    
    private String sFullName;
    private String sShortName;
    private int iShortName;
    private boolean fArchive;
    private boolean fLocal;
    private int cbInput;
    private InputStream fInput;
    private OutputStream fOutput;
    
    static int cFileTotal = 0;
    
    public static final int FILETYPE_BINARY             =-1;    // ie, a BIN or ROM file
    public static final int FILETYPE_NONE               = 0;
    public static final int FILETYPE_ZIP                = 1;
    public static final int FILETYPE_BIN                = 2;
    public static final int FILETYPE_ROM                = 3;
    public static final int FILETYPE_RAM                = 4;
    public static final int FILETYPE_PRC                = 5;
    public static final int FILETYPE_PDB                = 6;
    
    public static final String asExtensions[] = {"", ".zip", ".bin", ".rom", ".ram", ".prc", ".pdb"};

    public static final int FILESTAT_OK                 = 0;
    public static final int FILESTAT_INVALID_NAME       =-1;
    public static final int FILESTAT_MISSING_FILE       =-2;
    public static final int FILESTAT_UNKNOWN_LENGTH     =-3;
    public static final int FILESTAT_SECURITY_ERROR     =-4;
    
    public static final int FILEOPEN_READ               = 0x00000000;
    public static final int FILEOPEN_WRITE              = 0x00000001;
    public static final int FILEOPEN_LOCAL              = 0x00000002;
    public static final int FILEOPEN_FORCEZIP           = 0x00000004;
    public static final int FILEOPEN_SEARCHZIP          = 0x00000008;
    

    FileStream()
    {
    }
    
    
    FileStream(String sFileName, int iTypeExpected, int flOpen)
    {
        Open(sFileName, iTypeExpected, flOpen);
    }
    
    
    /*  Open(sFileName, iTypeExpected, flOpen)
     *
     *  Opens the specified file and inits the FileStream.
     */
    synchronized public boolean Open(String sFileName, int iTypeExpected, int flOpen)
    {
        Close();                                // make sure the FileStream object's state is clean
#if DEBUG
        try {
            if (Class.forName("com.ms.security.PolicyEngine") != null) {
                // NOTE: I used to check for "file:" but after adding support for FileOutputStream, I've changed
                // this check to "http:".  There may be old test cases that that change breaks though. -JP
                PolicyEngine.assertPermission(sFileName.startsWith("http:")? PermissionID.NETIO : PermissionID.FILEIO);
            }
        }
        catch (Throwable e) {}                  // eg, ClassNotFoundException, FileNotFoundException
#endif
        try {
            String sExtension = "";
            int i = sFileName.lastIndexOf('.');
            if (i > 0) {
                sExtension = sFileName.substring(i);
                iType = ConvertExtension(sExtension);
                //
                //  This logic added to try to support PDB as well as PRC...
                //
                if (iType == FILETYPE_PDB && iTypeExpected == FILETYPE_PRC)
                    iTypeExpected = FILETYPE_PDB;
            }
            
            int iTypeForce = iTypeExpected;
            if ((flOpen & FILEOPEN_FORCEZIP) != 0) {
                iTypeForce = FILETYPE_ZIP;
                flOpen |= FILEOPEN_SEARCHZIP;
            }

            if (iTypeExpected > FILETYPE_NONE && iType != iTypeExpected) {
                if (iType != FILETYPE_ZIP || (flOpen & FILEOPEN_SEARCHZIP) == 0) {
                    sFileName = sFileName.substring(0, i) + asExtensions[iTypeForce];
                    iType = iTypeForce;
                }
            }
            sFullName = sFileName;              // record the full initial filename now, in case there's an exception below
                
            if ((flOpen & FILEOPEN_LOCAL) != 0) {
                if ((flOpen & FILEOPEN_WRITE) != 0) {
                    OutputStream fOutput = new FileOutputStream(sFileName);
                    Emulator.Assert_Debug(fOutput != null, "FileStream.Open: new FileOutputStream(" + sFileName + ") failed");
                
                    DataOutputStream fDataOutput = new DataOutputStream(fOutput);
                    Emulator.Assert_Debug(fDataOutput != null, "FileStream.Open: new DataOutputStream() failed");
                
                    Init(sFileName, null, false, true, 0, null, fDataOutput);
                }
                else {
                    InputStream fInput = new FileInputStream(sFileName);
                    Emulator.Assert_Debug(fInput != null, "FileStream.Open: new FileInputStream(" + sFileName + ") failed");
                
                    DataInputStream fDataInput = new DataInputStream(fInput);
                    Emulator.Assert_Debug(fDataInput != null, "FileStream.Open: new DataInputStream() failed");
                
                    Init(sFileName, null, false, true, fInput.available(), fDataInput, null);
                }
                UpdateFileTotal(1);
                return true;
            }
             
            URL urlFile = new URL(sFileName);
            Emulator.Assert_Debug(urlFile != null, "FileStream.Open: new URL() failed");
            
            URLConnection urlconFile = urlFile.openConnection();
            Emulator.Assert_Debug(urlconFile != null, "FileStream.Open: openConnection() failed");
            
            urlconFile.setDefaultUseCaches(true);
            urlconFile.setUseCaches(true);
          //urlconFile.setIfModifiedSince(0x7fffffffffffffffL);
            urlconFile.connect();
            
            InputStream fInput = urlconFile.getInputStream();
            Emulator.Assert_Debug(fInput != null, "FileStream.Open: getInputStream() failed");
            
            int cb = urlconFile.getContentLength();
            if (cb <= 0) {
                SetStatus(FILESTAT_UNKNOWN_LENGTH);
                fInput.close();
                return false;
            }

            if (iType != FILETYPE_ZIP) {
                Init(sFileName, null, false, false, cb, fInput, null);
                UpdateFileTotal(1);
                return true;
            }
                
            ZipInputStream zfInput = null;
            
            try {
                zfInput = new ZipInputStream(fInput);
                Emulator.Assert_Debug(zfInput != null, "FileStream.Open: new ZipInputStream() failed");
            
                ZipEntry ze;
                String sEntry;
                
                do {
                    ze = zfInput.getNextEntry();
                    if (ze == null)
                        break;
                    sEntry = ze.getName();
                    i = sEntry.lastIndexOf('.');
                    if (i > 0)
                        sExtension = sEntry.substring(i);
                    iType = ConvertExtension(sExtension);
                    
                    if (iTypeExpected == FILETYPE_BINARY)
                        if (iType == FILETYPE_BIN || iType == FILETYPE_ROM)
                            break;
                    
                    if (iTypeExpected == FILETYPE_NONE)
                        break;
                    
                    if (iTypeExpected > FILETYPE_NONE && iType == iTypeExpected)
                        break;
                    
                  //zfInput.closeEntry();       // BUGBUG: redundant given getNextEntry()? -JP
                } while (true);
                
                if (ze != null) {
                    Init(sFileName, ze.getName(), true, false, (int)ze.getSize(), zfInput, null);
                    UpdateFileTotal(1);
                    return true;
                }
            }
            catch(Throwable e) {}               // IOException or ZipException from getNExtEntry()
            
            SetStatus(FILESTAT_MISSING_FILE);
            if (zfInput != null)
                zfInput.close();
            
        }
        catch (MalformedURLException e) {       // thrown by URL()
            SetStatus(FILESTAT_INVALID_NAME);
        }
        catch (IOException e) {                 // thrown by urlFile.openConnection()
            SetStatus(FILESTAT_MISSING_FILE);
        }
        catch (Throwable e) {                   // this is to catch any security exceptions
            SetStatus(FILESTAT_SECURITY_ERROR);
        }
        return false;
    }


    /*  Close()
     *
     *  Closes the file associated with the FileStream, if any.
     */
    synchronized public void Close()
    {
        if (fInput != null) {
            try {
                fInput.close();
            }
            catch(IOException e) {}
            fInput = null;
            UpdateFileTotal(-1);
        }
        if (fOutput != null) {
            try {
                fOutput.close();
            }
            catch(IOException e) {}
            fOutput = null;
            UpdateFileTotal(-1);
        }
        iType = FILETYPE_NONE;
        SetStatus(FILESTAT_OK);
        offCur = cbInput = 0;
        sFullName = sShortName = null;
        iShortName = 0;
    }
    
    
    /*  IsArchive()
     *
     *  Returns true if file is actually a stream inside an archive.
     *  If true, GetFullName() will return the full name of the archive.
     */
    public boolean IsArchive()
    {
        return fArchive;
    }
    
    
    /*  SetStatus(iStatus)
     *
     *  Called by Open() to associate one of the above status codes with the FileStream
     */
    public void SetStatus(int iStatus)
    {
        this.iStatus = iStatus;
    }
    
    
    /*  GetStatus()
     *
     *  Returns the FILESTAT status code set by SetStatus()
     */
    public int GetStatus()
    {
        return iStatus;
    }
    
    
    /*  GetStatusString()
     *
     *  Return a status string, based on the file's status code.
     */
    public String GetStatusString()
    {
        String sStatus;
        String sFileName = GetFullName();
        
        switch(iStatus) {
            
        case FILESTAT_OK:
            sStatus = GetShortName() + ": " + GetLength() + " bytes";
            break;
        
        case FILESTAT_INVALID_NAME:
            sStatus = "Bad name: " + sFileName;
            break;
        
        case FILESTAT_MISSING_FILE:
            sStatus = "Missing file: " + sFileName;
            break;
        
        case FILESTAT_UNKNOWN_LENGTH:
            sStatus = "Unknown length: " + sFileName;
            break;
        
        case FILESTAT_SECURITY_ERROR:
            sStatus = "Security error: " + sFileName;
            break;

        default:
            sStatus = "Unknown error: " + iStatus;
            break;
        }
        
        return sStatus;
    }
    
    
    /*  GetShortName()
     *
     *  Returns the name of the file recorded by Init()
     */
    public String GetShortName()
    {
        return sShortName;
    }

    
    /*  GetFullName()
     *
     *  Returns the full name of the file recorded by Init()
     */
    public String GetFullName()
    {
        return sFullName;
    }

    
    /*  GetFullPath()
     *
     *  Returns the full path (minus the filename) of the file recorded by Init()
     */
    public String GetFullPath()
    {
        return sFullName.substring(0, iShortName);
    }

    
    /*  GetType()
     *
     *  Returns the FILETYPE_* constant appropriate for this file
     */
    public int GetType()
    {
        return iType;
    }

    
    /*  GetOffset()
     *
     *  Returns the current offset within the file
     */
    public int GetOffset()
    {
        return offCur;
    }

    
    /*  SetOffset(off)
     *
     *  Sets the current offset within the file
     */
    synchronized public void SetOffset(int off)
    {
        Emulator.Assert_Debug(off >= 0, "FileStream.SetOffset(): off < 0");
        
        // If a non-sequential read is requested, our only recourse
        // (especially where ZIP files are concerned) is to reopen the file
        // and then skip the undesired portion.
        
        if (offCur != off) {
            
            int delta = off;
            
            // Of course, we should be able to optimize that a *bit* by handling
            // forward seeks more intelligently, and just skipping the difference.
            //
            // Also note that we only provide this limited form of "random access"
            // for reading, not writing.

            if (off > offCur)
                delta -= offCur;
            else
                Open(sFullName, iType, FILEOPEN_READ | (fLocal? FILEOPEN_LOCAL : 0));
            
            try {
				while (delta > 0)
                    delta -= fInput.skip(delta);
            }
            catch (Throwable e) {}      // IOException or ZipException from skip()
            
            offCur = off;
        }
    }

    
    /*  GetLength()
     *
     *  Returns the length of the file
     */
    public int GetLength()
    {
        return cbInput;
    }

    
    /*  ReadInt()
     *
     *  Read a 32-bit integer from the file.
     */
    public int ReadInt()
    {
        Emulator.Assert_Debug(fInput != null, "FileStream.ReadInt: bad input stream");
        
        byte[] ab = new byte[4];
        
        ReadBytes(GetOffset(), ab.length, ab, 0);
        
        return (ab[0] << 24) | ((ab[1] & 0xff) << 16) | ((ab[2] & 0xff) << 8) | (ab[3] & 0xff);
    }    

    
    /*  ReadBytes(length, ab, offDst)
     *
     *  Copy "length" bytes from fInput to "ab" at offset "offDst"
     *
     *  Returns the actual number of bytes transferred
     */
    public int ReadBytes(int length, byte[] ab, int offDst)
    {
        return ReadBytes(GetOffset(), length, ab, offDst);
    }    
    
    
    /*  ReadBytes(offSrc, length, ab, offDst)
     *
     *  Copy "length" bytes at offset "offSrc" from fInput to "ab" at offset "offDst"
     *
     *  Returns the actual number of bytes transferred
     */
    synchronized public int ReadBytes(int offSrc, int length, byte[] ab, int offDst)
    {
        Emulator.Assert_Debug(fInput != null, "FileStream.ReadBytes: bad input stream");
        
        int off = offDst;
        SetOffset(offSrc);
        try {
            int cbLeft = length;
            do {
                int cb = fInput.read(ab, off, cbLeft);
              //Emulator.DisplayVerboseMessage_Debug("Read " + cb + " bytes");
                if (cb < 0)
                    break;
                off += cb;
                offCur += cb;
                cbLeft -= cb;
            } while (cbLeft > 0);
        }
        catch (Throwable e) {}          // IOException or ZipException from read()
        return off - offDst;
    }    
    
    
    /*  ReadString()
     */
    public String ReadString()
    {
        Emulator.Assert_Debug(fInput != null, "FileStream.ReadString: bad input stream");
        
        byte[] ab = new byte[128];
        
        try {
            DataInputStream fDataInput = (DataInputStream)fInput;
            int i;
            byte b;
            for (i=0; i<ab.length; i++) {
                b = fDataInput.readByte();
                offCur++;
                if (b == '\r') {
                    b = fDataInput.readByte();
                    offCur++;
                }
                if (b == '\n')
                    break;
                ab[i] = b;
            }
            return new String(ab, 0, i);
        }
        catch (Throwable e) {}          // IOException from readByte()
        
        return null;
    }    
    
    
    /*  WriteInt(int i)
     *
     *  Write a 32-bit integer to the file.
     */
    public void WriteInt(int i)
    {
        Emulator.Assert_Debug(fOutput != null, "FileStream.WriteInt: bad output stream");
        
        byte[] ab = new byte[4];
        
        ab[0] = (byte)(i >> 24);
        ab[1] = (byte)(i >> 16);
        ab[2] = (byte)(i >> 8);
        ab[3] = (byte)(i);
        
        try {
            DataOutputStream fDataOutput = (DataOutputStream)fOutput;
            fDataOutput.write(ab, 0, ab.length);
            offCur += ab.length;
        }
        catch (Throwable e) {}          // IOException from writeBytes()
    }    
    
    
    /*  WriteBytes(length, ab, int offSrc)
     *
     *  Copy "length" bytes from offset "offSrc" in "ab" to fOutput
     */
    public void WriteBytes(int length, byte[] ab, int offSrc)
    {
        Emulator.Assert_Debug(fOutput != null, "FileStream.WriteBytes: bad output stream");
        
        try {
            DataOutputStream fDataOutput = (DataOutputStream)fOutput;
            fDataOutput.write(ab, offSrc, length);
            offCur += length;
        }
        catch (Throwable e) {}          // IOException from writeBytes()
    }    
    
    
    /*  WriteString()
     */
    public void WriteString(String s)
    {
        Emulator.Assert_Debug(fOutput != null, "FileStream.WriteString: bad output stream");
        
        try {
            DataOutputStream fDataOutput = (DataOutputStream)fOutput;
            fDataOutput.writeBytes(s);
            offCur += s.length();
        }
        catch (Throwable e) {}          // IOException from writeBytes()
    }    

    
    /*  Init(sFullName, sShortName, fArchive, fLocal, cbInput, fInput, fOutput)
     *
     *  Initializes the FileStream after successfully opening a file
     */
    private void Init(String sFullName, String sShortName, boolean fArchive, boolean fLocal, int cbInput, InputStream fInput, OutputStream fOutput)
    {
        this.sFullName = sFullName;
        this.sShortName = sShortName;
        this.fArchive = fArchive;
        this.fLocal = fLocal;
        this.cbInput = cbInput;
        this.fInput = fInput;
        this.fOutput = fOutput;
        
        this.iShortName = sFullName.lastIndexOf('/');
        int iBackSlash = sFullName.lastIndexOf('\\');
        if (this.iShortName < iBackSlash)
            this.iShortName = iBackSlash;
        this.iShortName++;
        
        if (sShortName == null)
            this.sShortName = sFullName.substring(this.iShortName);
    }
    
    
    /*  ConvertExtension()
     *
     *  Converts the specified extension to a known type (see FILETYPE_*)
     */
    private int ConvertExtension(String sExtension)
    {
        for (int i=0; i<asExtensions.length; i++) {
            if (sExtension.equalsIgnoreCase(asExtensions[i]))
                return i;
        }
        return FILETYPE_NONE;
    }


    /** @conditional (DEBUG) */
    synchronized static void UpdateFileTotal(int cDelta)
    {
        cFileTotal += cDelta;
    }

}
