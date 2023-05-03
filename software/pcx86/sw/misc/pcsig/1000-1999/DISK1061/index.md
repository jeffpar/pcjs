---
layout: page
title: "PC-SIG Diskette Library (Disk #1061)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1061/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1061"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE1061.TXT

{% raw %}
```
Disk No  1061
Program Title: SPANISH FOR TRAVELERS version 1.0
PC-SIG version 1

    This software and audio cassette combination package may be just what
you're looking for if you want to travel to a Spanish-speaking country and
you don't know how to speak their language.

    Eight formal lessons are built into this program and livened up when
you least expect it by short blasts of Mexican music. Be prepared for an
unexpected quiz or test every now and then, thrown in to help you evaluate
your progress! An audio cassette tape and manual can be ordered from an
800 phone number for $23.95 to assure your pronounciation is as sharp as
your written knowledge.

Usage: Language/Education

System Requirements: 128K memory and one floppy disk drive.

How to Start: Type SPANISH (press enter).

Suggested Registration: $23.95

File Descriptions:

SPANISH  EXE  Main program file
READ     ME   Introductory information
LESSON   1A   Lesson file.
LESSON   ???  Lessons (7 files).
PH1      BAS  Musical selections
PH2      BAS  Musical selections
PH3      BAS  Musical selections
PH4      BAS  Musical selections
PH5      BAS  Musical selections
PH6      BAS  Musical selections
VERBAR   BAS  Data storage file
ERRORS        Data storage file
LESSONIN      Data storage file
LESSONUM      Data storage file
USERWRDS      Data storage file

PC-SIG
1030D E. Duane Avenue
Sunnyvale, CA   94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║             <<<<  Disk No 1061 SPANISH FOR TRAVELLERS  >>>>             ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To view instructions, type: README (press enter)                        ║
║                                                                         ║
║ To start the program, type: SPANISH (press enter)                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PH6.BAS

{% raw %}
```bas
accidente,the accident
dolor,pain
accíon,action
direccíon,address
afuera,outside
agua,water
algo,something
alimento,food
a menudo,often
amigo,friend
año,year
antes,before
arriba,up
arroz,rice
azúcar,sugar
ayer,yesterday
bahía,bay
barato,cheap
bebida,a drink
bello,beautiful
bien,well
billete,ticket
bonita,pretty
botella,bottle
bombilla,electric bulb
caballero,gentleman
cajero,cashier
cámara,camera
carne,meat
caro,expensive
casado,married
cerveza,beer
ciudad,city
con,with
delante de,in front of
detrás,after
dentro,inside
día,day
edificio,building
elevado,high
emborracharse,to get drunk
en,in or on
escuela,school
estatua,statue                    
este,this
delicioso,delicious
farmacia,pharmacy
ferrocarril,railway
foto,photograph
garage,garage
gasolina,petrol
gente,people
gerente,manager
gira,tour
grande,large
gratis,free
grupo,group
autobus,bus
guía,guide
guía del viajero,road map
frijoles,beans
habitación,room
hambre,hunger
helado,ice cream
horario,time-table
hospital,hospital
hotel,hotel
hoy,today
huevo,egg
idioma,language
iglesia,church
cantidad,amount
impuesto,tax
indigestión,indigestion                            
información,information
intercambio,exchange
jabón,soap
junto,near
lago,lake
lavandería,laundry
leche,milk
lejos,far
libro,book
lineas aéreas,airlines
lista de platos,menu
llegada,arrival
lluvia,rain
maleta,suitcase
más,more
pan,bread
menos,but
mercado,market
mi,my
moneda,currency
mesero,waiter
negocio,business 
noche,night
nombre,name
nunca,never
pago,payment
para,for
pasaje,ticket
peligro,danger
pescado,fish
policía,policeman
prohibida la entrada,keep out
recibo,receipt
reclamación,complaint
recuerdo,souvenir
refresco,refreshment
regadera,shower
rollo,photo film
ropa,clothes
ruta,route
salida,exit
sobre,on
solamente,only
talón,luggage ticket
temprano,early
tenedor,fork
tienda,shop
toalla,towel
todavía,yet
detras,behind
tren,train
vidrio,glass
vuelo,flight
y,and
ya,already
0,0
0,0
131
 









```
{% endraw %}

## VERBAR.BAS

{% raw %}
```bas
hablar,to speak,spoke
aprender,to learn,learned
vivir,to live,lived
comprar,to buy,bought
visitar,to visit,visited
leer,to read,read
cantar,to sing,sang
tomar,to take,took
comer,to eat,ate
abrir,to open,opened
trabajar,to work,worked
acabar,to finish,finished
aceptar,to accept,accepted
acompañar,to accompany,accompanied
aconsejar,to advise,advised
acusar,to accuse,accused
admirar,to admire,admired
admitir,to permit,permitted
agradar,to please,pleased
aguardar,to wait for,waited
amar,to love,loved
andar,to walk,walked
añadir,to add,added
asegurar,to insure,insured
asustar,to scare,scared
atacar,to attack,attacked
preguntar,to ask,asked
ayudar,to help,helped
bailar,to dance,danced
beber,to drink,drank
buscar,to look for,looked for
cambiar,to change,changed
celebrar,to celebrate,celebrated
cenar,to eat supper,ate supper
cerrar,to close,closed
cocer,to cook,cooked
comprar,to buy,bought
comprender,to understand,understood
conocer,to know,knew
contestar,to reply,replied
creer,to believe,believed
deber,to owe,owed
decidir,to decide,decided
descansar,to rest,rested
desear,to want,wanted
enseñar,to show,showed
entrar,to enter,entered
enviar,to send,sent
escribir,to write,wrote
escuchar,to listen,listened
estudiar,to study,studied
explicar,to explain,explained
ganar,to win,won
gustar,to like,liked
hablar,to speak,spoke
insistir,to insist,insisted
llamar,to call,called
llegar,to arrive,arrived
mirar,to look at,looked at
nadar,to swim,swam
necesitar,to need,needed
pagar,to pay,paid
pedir,to request,requested
permitir,to permit,permitted
preparar,to prepare,prepared
recibir,to receive,received
repitir,to repeat,repeated
servir,to serve,served
dudar,to doubt,doubted
telefonear,to telephone,telephoned
tomar,to take,took
usar,to use or wear,used or wore
vender,to sell,sold
viajar,to travel,travelled
visitar,to visit,visited
ser,to be,was
dar,to give,gave
ir,to go,went
ver,to see,saw
0,0,0











```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1061

     Volume in drive A is DISK1061
     Directory of A:\

    ERRORS               1   2-13-88   2:22p
    FILE1061 TXT      1487   6-13-88   9:16a
    GO       BAT        38   5-23-88   3:30p
    GO       TXT       540   5-23-88   3:32p
    LESSON   1A       2073   2-14-88  12:31p
    LESSON   2        2285   2-14-88   2:27p
    LESSON   3        2047   2-14-88   1:08p
    LESSON   4        2139   2-14-88   1:23p
    LESSON   5        1893   2-14-88   1:44p
    LESSON   6        1670   2-14-88   2:17p
    LESSON   7        2193   2-14-88   2:10p
    LESSON   8        2403   2-14-88   3:14p
    LESSONIN             4   2-13-88   2:22p
    LESSONUM             4   2-13-88   2:22p
    PH1      BAS       371   1-05-88   9:36p
    PH2      BAS       609   2-14-88   3:24p
    PH3      BAS       561   2-14-88   9:55a
    PH4      BAS       551   2-07-88   4:25p
    PH5      BAS       613   2-07-88   4:26p
    PH6      BAS      2085   1-05-88   9:56p
    READ     ME       1809   2-14-88   3:22p
    README   BAT        39   5-23-88   3:32p
    SPANISH  EXE    133856  12-10-88   5:30p
    USERWRDS             1   2-13-88   2:22p
    VERBAR   BAS      2008   1-05-88  10:03p
           25 file(s)     161280 bytes
                          145408 bytes free
