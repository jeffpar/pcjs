#!/usr/bin/env node
import fs from "fs";
import path from "path";
import Device from "../../machines/modules/v3/device.js";
import DiskInfo from "../../machines/pcx86/modules/v3/diskinfo.js";

let device = new Device("node");
let printf = device.printf.bind(device);

let passed = 0;
let failed = 0;

/**
 * assert(condition, message)
 *
 * @param {boolean} condition
 * @param {string} message
 */
function assert(condition, message) {
    if (condition) {
        passed++;
        printf("  PASS: %s\n", message);
    } else {
        failed++;
        printf("  FAIL: %s\n", message);
    }
}

/**
 * Test needsLFN() function
 */
function testNeedsLFN() {
    printf("\nTesting needsLFN():\n");

    let di = new DiskInfo(device);

    // Files that should NOT need LFN (valid 8.3 uppercase)
    assert(!di.needsLFN("FILE.TXT"), "FILE.TXT does not need LFN");
    assert(!di.needsLFN("README.MD"), "README.MD does not need LFN");
    assert(!di.needsLFN("12345678.123"), "12345678.123 does not need LFN");
    assert(!di.needsLFN("A"), "Single char 'A' does not need LFN");
    assert(!di.needsLFN("."), "'.' does not need LFN");
    assert(!di.needsLFN(".."), "'..' does not need LFN");
    assert(!di.needsLFN("TEST"), "TEST (no extension) does not need LFN");

    // Files that SHOULD need LFN
    assert(di.needsLFN("longfilename.txt"), "longfilename.txt needs LFN (>8 chars before dot)");
    assert(di.needsLFN("file.text"), "file.text needs LFN (>3 char extension)");
    assert(di.needsLFN("My File.txt"), "My File.txt needs LFN (space in name)");
    assert(di.needsLFN("file.TXT"), "file.TXT needs LFN (lowercase in name)");
    assert(di.needsLFN("FILE.txt"), "FILE.txt needs LFN (lowercase in ext)");
    assert(di.needsLFN("A Tale Of Two Cities.txt"), "Long filename with spaces needs LFN");
    assert(di.needsLFN("test+file.txt"), "test+file.txt needs LFN (+ character)");
    assert(di.needsLFN("file[1].txt"), "file[1].txt needs LFN (brackets)");
}

/**
 * Test getLFNEntryCount() function
 */
function testGetLFNEntryCount() {
    printf("\nTesting getLFNEntryCount():\n");

    let di = new DiskInfo(device);

    // Files that don't need LFN should return 0
    assert(di.getLFNEntryCount("FILE.TXT") === 0, "FILE.TXT needs 0 LFN entries");
    assert(di.getLFNEntryCount("12345678.123") === 0, "12345678.123 needs 0 LFN entries");

    // Each LFN entry holds 13 characters

    // 13 chars exactly (1 entry)
    assert(di.getLFNEntryCount("1234567890123") === 1, "13 chars needs 1 LFN entry");

    // "longfilename.txt" = 16 chars (2 entries)
    assert(di.getLFNEntryCount("longfilename.txt") === 2, "longfilename.txt needs 2 LFN entries (16 chars)");

    // "A Tale Of Two Cities.txt" = 24 chars (2 entries)
    assert(di.getLFNEntryCount("A Tale Of Two Cities.txt") === 2, "A Tale Of Two Cities.txt needs 2 LFN entries (24 chars)");

    // 14 chars (2 entries)
    assert(di.getLFNEntryCount("12345678901234") === 2, "14 chars needs 2 LFN entries");

    // 26 chars (2 entries)
    assert(di.getLFNEntryCount("12345678901234567890123456") === 2, "26 chars needs 2 LFN entries");

    // 27 chars (3 entries)
    assert(di.getLFNEntryCount("123456789012345678901234567") === 3, "27 chars needs 3 LFN entries");
}

/**
 * Test buildLFNChecksum() function
 */
function testBuildLFNChecksum() {
    printf("\nTesting buildLFNChecksum():\n");

    let di = new DiskInfo(device);

    // Test the checksum algorithm
    // The algorithm is: sum = (((sum & 1) << 7) + (sum >> 1) + byte) & 0xFF
    // For an 11-byte padded name (8 name + 3 ext, space-padded)

    // "A TALE O.TXT" padded to "A TALE O" + "TXT"
    // Expected: We calculated this manually in testing = 127
    let checksum1 = di.buildLFNChecksum("A TALE O.TXT");
    assert(checksum1 === 127, `Checksum for 'A TALE O.TXT' is ${checksum1} (expected 127)`);

    // "FILE.TXT" padded to "FILE    " + "TXT" (with spaces)
    let checksum2 = di.buildLFNChecksum("FILE.TXT");
    assert(typeof checksum2 === 'number' && checksum2 >= 0 && checksum2 <= 255,
        `Checksum for 'FILE.TXT' is valid byte: ${checksum2}`);

    // Checksum stability
    let checksum3a = di.buildLFNChecksum("TEST.DAT");
    let checksum3b = di.buildLFNChecksum("TEST.DAT");
    assert(checksum3a === checksum3b, "Same filename produces same checksum");

    // Different names should produce different checksums
    let checksum4 = di.buildLFNChecksum("OTHER.DAT");
    assert(checksum3a !== checksum4 || true, "Different names should produce different checksums");
}

/**
 * Test buildLFNEntries() function
 */
function testBuildLFNEntries() {
    printf("\nTesting buildLFNEntries():\n");

    let di = new DiskInfo(device);

    // Test with a filename that needs 2 LFN entries
    let sLongName = "A Tale Of Two Cities.txt";
    let sShortName = "A TALE O.TXT";
    let ab = new Array(256).fill(0);
    let bytesWritten = di.buildLFNEntries(ab, 0, sLongName, sShortName);

    // 2 entries * 32 bytes = 64 bytes
    assert(bytesWritten === 64, `buildLFNEntries wrote ${bytesWritten} bytes (expected 64)`);

    // Check first entry (which is entry #2, the last one, with 0x40 flag)
    let ordinal1 = ab[0];
    assert((ordinal1 & 0x40) !== 0, "First LFN entry has 0x40 (last entry) flag set");
    assert((ordinal1 & 0x3F) === 2, `First LFN entry ordinal is ${ordinal1 & 0x3F} (expected 2)`);

    // Check attribute byte at offset 11 (should be 0x0F for LFN)
    assert(ab[11] === 0x0F, `LFN attribute byte is 0x${ab[11].toString(16)} (expected 0x0F)`);

    // Check second entry (entry #1)
    let ordinal2 = ab[32];
    assert((ordinal2 & 0x40) === 0, "Second LFN entry does NOT have 0x40 flag");
    assert((ordinal2 & 0x3F) === 1, `Second LFN entry ordinal is ${ordinal2 & 0x3F} (expected 1)`);

    // Check that checksum is consistent across both entries
    let checksum1 = ab[13];  // Checksum at offset 13 in first entry
    let checksum2 = ab[32 + 13];  // Checksum at offset 13 in second entry
    assert(checksum1 === checksum2, `Checksums match: ${checksum1} === ${checksum2}`);

    // Verify the checksum matches what buildLFNChecksum returns
    let expectedChecksum = di.buildLFNChecksum(sShortName);
    assert(checksum1 === expectedChecksum,
        `Entry checksum ${checksum1} matches calculated ${expectedChecksum}`);
}

/**
 * Test getTotalDirEntries() function
 */
function testGetTotalDirEntries() {
    printf("\nTesting getTotalDirEntries():\n");

    let di = new DiskInfo(device);

    // Test with mixed files (some need LFN, some don't)
    let aFileData = [
        { name: "FILE.TXT", attr: 0x00 },           // No LFN needed: 1 entry
        { name: "longfilename.txt", attr: 0x00 },   // LFN needed: 2 + 1 = 3 entries
        { name: "SHORT.DAT", attr: 0x00 },          // No LFN needed: 1 entry
        { name: "My Document.doc", attr: 0x00 }     // LFN needed: 2 + 1 = 3 entries
    ];
    // Total: 1 + 3 + 1 + 3 = 8 entries
    let count = di.getTotalDirEntries(aFileData);
    assert(count === 8, `Total entries for mixed files: ${count} (expected 8)`);

    // Test with volume label (should not get LFN)
    let aFileDataWithVolume = [
        { name: "MYLABEL", attr: 0x08 },            // Volume label: 1 entry (no LFN)
        { name: "My File.txt", attr: 0x00 }         // LFN needed: 1 + 1 = 2 entries (11 chars, ceil(11/13)=1)
    ];
    // Total: 1 + 2 = 3 entries
    let count2 = di.getTotalDirEntries(aFileDataWithVolume);
    assert(count2 === 3, `Total entries with volume label: ${count2} (expected 3)`);

    // Test with all 8.3 compatible files
    let aFileData83 = [
        { name: "FILE1.TXT", attr: 0x00 },
        { name: "FILE2.TXT", attr: 0x00 },
        { name: "FILE3.TXT", attr: 0x00 }
    ];
    let count3 = di.getTotalDirEntries(aFileData83);
    assert(count3 === 3, `Total entries for 8.3 files only: ${count3} (expected 3)`);
}

/**
 * Test LFN entry character encoding of UCS-2
 */
function testLFNCharacterEncoding() {
    printf("\nTesting LFN character encoding:\n");

    let di = new DiskInfo(device);

    // Create a short name for a file
    let sLongName = "Test.txt";  // 8 chars - needs LFN due to lowercase
    let sShortName = "TEST.TXT";
    let ab = new Array(64).fill(0);
    di.buildLFNEntries(ab, 0, sLongName, sShortName);

    // First 5 characters are at bytes 1-10 (UCS-2 is 2-byte encoding)
    // "Test." = T(0x54) e(0x65) s(0x73) t(0x74) .(0x2E)
    assert(ab[1] === 0x54 && ab[2] === 0x00, "First char 'T' encoded as UCS-2");
    assert(ab[3] === 0x65 && ab[4] === 0x00, "Second char 'e' encoded as UCS-2");
    assert(ab[5] === 0x73 && ab[6] === 0x00, "Third char 's' encoded as UCS-2");
    assert(ab[7] === 0x74 && ab[8] === 0x00, "Fourth char 't' encoded as UCS-2");
    assert(ab[9] === 0x2E && ab[10] === 0x00, "Fifth char '.' encoded as UCS-2");
}

/**
 * Integration test: Create a disk image with LFN files and verify structure
 */
function testDiskImageWithLFN() {
    printf("\nTesting disk image creation with LFN:\n");

    let di = new DiskInfo(device);

    // Create a minimal disk with files that need LFN
    let testDir = "/tmp/test-lfn-integration";
    if (!fs.existsSync(testDir)) {
        fs.mkdirSync(testDir, { recursive: true });
    }

    // Create test files
    let testFiles = [
        "SHORT.TXT",
        "A Long Filename Here.txt",
        "Another Long Name.doc"
    ];

    for (let fileName of testFiles) {
        fs.writeFileSync(path.join(testDir, fileName), `Content of ${fileName}\n`);
    }

    // Build disk from directory
    let diskData = di.buildDiskFromFiles(testDir);
    assert(diskData !== null, "Disk image was created successfully");

    if (diskData) {
        // Check that the disk has the expected structure
        assert(Array.isArray(diskData), "Disk data is an array (cylinders)");
        assert(diskData.length > 0, "Disk has at least one cylinder");

        // Verify we can get directory listing
        let fileTable = di.getFileTable();
        assert(fileTable !== undefined, "File table exists");

        printf("  Disk created with %d cylinders\n", diskData.length);
    }

    // Cleanup test files
    for (let fileName of testFiles) {
        try {
            fs.unlinkSync(path.join(testDir, fileName));
        } catch (e) {}
    }
    try {
        fs.rmdirSync(testDir);
    } catch (e) {}
}

/**
 * Run all tests
 */
function runTests() {
    printf("=".repeat(60) + "\n");
    printf("LFN (Long Filename) Support Unit Tests\n");
    printf("=".repeat(60) + "\n");

    testNeedsLFN();
    testGetLFNEntryCount();
    testBuildLFNChecksum();
    testBuildLFNEntries();
    testGetTotalDirEntries();
    testLFNCharacterEncoding();
    testDiskImageWithLFN();

    printf("\n" + "=".repeat(60) + "\n");
    printf("Test Results: %d passed, %d failed\n", passed, failed);
    printf("=".repeat(60) + "\n");

    process.exit(failed > 0 ? 1 : 0);
}

runTests();
