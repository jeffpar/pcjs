#include <stdio.h>

int main()
{
    printf("hello %5s\n", "world");
    printf("hello %10s\n", "world");
    printf("hello %-10s\n", "world");
    int n = 0x1234, t = 3;
    printf("%#01x %#02x %#03x %#04x\n", n, n, n, n);
    printf("%#07x 0x%07x %#7x 0x%7x\n", n, n, n, n);
    float f = 3.14159;
    printf("%8.2f %.3f\n", f, f);
    printf("%d %6d %6.3d\n", t, t, t);
    printf("'%d' '%6d' '%6.3d' '%6.9d'\n", n, n, n, n);
    return 0;
}
