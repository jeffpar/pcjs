#include <stdio.h>
#include <stdint.h>

int main()
{
    int64_t i64 = 0x12345678abcd;
    printf(" 0x12345678abcd = %lld\n", i64);
    printf(" 0x12345678abcd = %#010llx\n", i64);

    i64 = -i64;
    printf("-0x12345678abcd = %lld\n", i64);
    printf("-0x12345678abcd = %#010llx\n", i64);

    int n = 0x1234;
    printf(" 0x1234 = '%d' '%6d' '%-6d' '%06d' '%6.3d' '%6.9d'\n", n, n, n, n, n, n);
    printf(" 0x1234 = '%#01x' '%#02x' '%#03x' '%#04x'\n", n, n, n, n);
    printf(" 0x1234 = '%#07x' '0x%07x' '%#7x' '0x%7x'\n", n, n, n, n);

    n = -n;
    printf("-0x1234 = %d\n", n);
    printf("-0x1234 = %#010x\n", n);

    n = 3;
    printf("3       = %d %6d %6.3d\n", n, n, n);

    float f = 3.14159;
    printf("3.14159 = %8.2f %.3f\n", f, f);

    return 0;
}
