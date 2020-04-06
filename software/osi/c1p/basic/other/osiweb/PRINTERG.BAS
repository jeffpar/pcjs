5     h=3:v=1
10    esc=27:ht=9:vt=11
20    us=31:rs=30
30    out 0,esc:out 0,13:out 0,80
40    out 0,esc:out 0,us:out 0,h+1:out 0,esc:out 0,rs:out 0,v+1
50    for r=0 to 10:for s=0 to 10
60    y=r:x=s
70    gosub 100:next:next
80    out 0,esc:out 0,13:out 0,80:end
100   out 0,esc:out 0,ht:out 0,x+1:out 0,esc:out 0,vt:out 0,y+1:out 0,46:return
