---
layout: page
title: "PC-SIG Diskette Library (Disk #3168)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3168/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3168"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## FUTUR.TXT

{% raw %}
```
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"                                                                            "
"     En nuevas versiones se incorporara al Editor de Pantallas E-SCREEN     "
"                                                                            "
"                                                                            "
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

	- Inclusión de menú para la creación de campos de entrada de
	  datos por pantalla.

		       Añadir campo     ALT-F?
		       Borrar campo     ALT-F?
		       Modificar campo  ALT-F?
		       Consultar campos ALT-F?
		       Ver campos       ALT-F?
		       Provar campos
		       Datos generales

	  i posiblemente alguna más.

	- Grabación de los campos en fichero reutilizable por E-SCREEN
	  con el nombre de la pantalla y extensión .DAT en el directorio
	  en el que se grabe la pantalla .SCR

	- Generación del correspondiente código fuente para Clipper 5.0x,
	  Clipper Summer 87, dBASE, Cobol, Power Basic 2.x, Turbo Basic,
	  Quick Basic 4.x, MS Basic 7.x, C y Pascal.

	- Soporte de nuevas macros en los ficheros .GEN

	      @inid@	inicio declaración campos
	      @endd@	fin declaración campos
	      @inii@    inicio entrada datos (input)
	      @endi@    fin entrada datos (input)

	      @iname@ 	nombre de la variable
	      @idecl@ 	tipo de campo

	      @ifgc@ 	color del primer plano (back ground color) del campo
	      @ibgc@    color del fondo (fore ground color) del campo
	      @iattr@   atributo del campo
	      @iy@ 	posición y en pantalla del campo. linea
	      @ix@	posición x en pantalla del campo. columna
	      @imax@    valor máximo aceptado para el campo
	      @imin@    valor mínimo aceptado para el campo
	      @ifilt@   filtro (ya entrado en código fuente o en el formato
			usado por las librerías especificas para cada lenguaje)
			para aceptar el campo
	      @itop@    numero total de campos

	  i posiblemente algunas más.

	- Posible inclusión de grabación de los campos de entrada de datos
	  y sus valores en formatos de ficheros compatibles con otros
	  lenguajes, a parte de la grabación del código fuente.

	- Posible soporte para utilizar el modo EGA/VGA de 43/50 líneas.

```
{% endraw %}

## GRACIAS.TXT

{% raw %}
```

			============================
 			¡ ¡ ¡   G R A C I A S  ! ! !
			============================

Evidentemente este programa no lo podría haber realizado de no haber contado
con la colaboración de los usuarios de este magnifico sistema de intercambio
de información que son los BBS.

Agradezco profundamente la ayuda prestada por estos usuarios y, especialmente
a unos cuantos que voy a nombrar ahora:

	José A. Rodríguez  	( Super Programador en C y C++      )
	Francisco Rodríguez	(   "        "           "          )
	Jordi Saldana           ( Sysop de PIPO BBS (93) 757.65.88  )
	Tirs Abril              ( Sysop de PRO-LINE                 )
	Juan Vilariño           ( Super Programador en PASCAL       )
	Alex Christov           (   "        "           "          )
	Carlos Barahona         ( Sysop de AVALON   (93) 430.59.42  )
	Xavier Caballé          ( Super Programador en COBOL        )
	Josep Altarriba         (   "        "          "           )
        David Llamas            ( Sysop de ABAFORUM (93) 589.38.88  )
	Manolo Estévez          ( Super Programador en Clipper      )

Y a los BBS, sin los cuales habría sido imposible el intercambio de información

   BBS       TELEFONO       SOFTWARE    CONEXIONES CON REDES DE CORREO
   --------- -------------- ----------  --------------------------------
   PIPO	     (93) 757.65.88 PCBoard     RIME                      NetRUN
   AVALON    (93) 430.59.42 PCBoard     RIME                      NetRUN
   GREMLIN   (93) 210.87.58 RemoteAcces       FIDO (2:343/113)    RedBBS
   ABAFORUM  (93) 589.38.88 PCBoard     RIME  INTER(@abaforum.es) NetRUN

Quizás este texto resulte algo pedante, pero es la forma más correcta de
ofrecer mi agradecimiento a todas aquellas personas que han colaborado en la
elaboración de este programa.

Esteve Valentí.
Usuario habitual de ABAFORUM, PIPO, AVALON y GREMLIN.

```
{% endraw %}

## MODIF.TXT

{% raw %}
```
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
                Modificaciones realizadas en E-SCREEN 2.11
                        respecto a la versión 2.10
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

  1 )-  Se ha modificado el sistema de Selección de Barra de las Ventanas.
        Se pueden utilizar las teclas PAGUP y PAGDW.
        Podemos posiciónar la barra pulsando la PRIMERA LETRA de un
        fichero del directorio en la posición donde este se encuentre.

  2 )-  Cuando se graban las pantallas aparece una ventana para poder
        modificar la unidad y el direcctorio donde se grabará el fichero.

  3 )-  Las ventanas de los mensajes de Error no necesitan que se pulse
        INTRO, se cierran automaticamente.

  4 )-  Se han incluido algunas ventanas automaticas informativas.

  5 )-  Se ha modificado el Código ANSI generado ya que era erroneo y
  	se ha optimizado el Código Fuente generado para Basic's y dBase.

  6 )-  El Código Fuente generado para C se ha modificado.

  7 )-  Se ha solucionado un error que se producia tras realizar un SHELL
  	y retornar al programa desde otra unidad.

  8 )-  Solucionado el problema que se producia al leer los ficheros .C
  	.PAS y .ASM, si @Nom_Pant@ y @Chars@ estavan en la misma linea
   	se producía un error.


""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
		Modificaciones realizadas en E-SCREEN 2.13
                        respecto a la versión 2.11
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

  1 )-  Realizada una modificación general en el programa para su uso en
        Monitores Monocromo.

  2 )-  Se ha acelerado la rutina de acceso al directorio del disco.

  3 )-  En el apartado (Modificar Opciones), el programa no aceptava
        la unidad F:, con lo que no podia funcionar en las Redes Novell.

  4 )-  Se ha acelerado el proceso de grabación del código fuente generado.

  5 )-  Configurado todo el entorno para que el los monitores en color se
        vean las ventanas en diferentes colores. Se ha incluido en la
        opción Configurar Entorno, del Menú General, la posibilidad de
	modificar los colores del programa individualmente.

  6 )-  Incluída la posibilidad de utilizar algunas teclas de función
        para las opciones mas usuales.
                Generales para todo el programa:
                                F1 - Manual de Ayuda
                                F4 - Salir al DOS
                Específicas del editor:
                                F5 - seleccionar color.
                                F6 - Entrar código ASCII.
                                F7 - Pincel en Cursor (ON/OFF)

   7 )- Se han añadido un nuevo tipo de código fuente generado para C y
        para PASCAL.

   8 )- El fichero E-SCREEN.C y E-SCREEN.PAS se sustituyen por los
        ficheros C2.GEN y PASCAL2.GEN. Se incluyen C1.GEN y PASCAL1.GEN
        para ser utilizados por el nuevo código fuente generado.

   9 )- Modificadas las opciones 2 y 3 del menú editor. Ahora aparece una
        ventana informativa en la pantalla editada para la posición del
        cursor y el color de la posición del cursor.

   10)- Se ha añadido en el Menú Editor la opción "U Pincel Cursor(F7)"
	que también se puede activar mediante F7 y que hace que al desplazar
	el cursor se vaya dibujando por la pantalla.

   11)- Se ha acelerado la velocidad del teclado, de este modo todo el
	conjunto del programa va más rápido.



""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
		Modificaciones realizadas en E-SCREEN 2.14
			respecto a la versión 2.13
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

  1 )- Se ha acelerado la grabación del código fuente.

  2 )- En la Selección de colores (F5), al seleccionar el color 0,0 no
       se usará este, sinó que el color será el mismo ya existente en
       la pantalla.

  3 )- Solucionado un pequeño bug en la grabación el código fuente para
       dBASE.

  4 )- Incluido el capturador de pantallas E-SCRCAP v1.0.

  5 )- Incluido el programa View ANSI ( E-VANSI v1.0 ) util para la
       visualización de uno o varios ficheros ANSI.

  6 )- Incluida la generación de código fuente para Microsoft Cobol y
       RMCobol.

  7 )- Posibilidad de editar pantallas ANSI ( .ANS ), Binary ( .BIN ) y
       ASCII ( .ASC ) para su modificación.

  8 )- Sustituida la rutina de entrada de datos por pantalla.

  9 )- Memória para el nombre del bloque.

  10)- Simplificada la grabación del código fuente. Se ha añadido un
       submenú al menú editor desde el que se podrán grabar las pantallas.
       La opción de grabación automatica se ha sido sustituida por esta.


""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
		Modificaciones realizadas en E-SCREEN 3.00
			respecto a la versión 2.14
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

  1 )- Se ha cambiado el sistema de ventanas incluyendo un menú de línea
       para facilitar y acelerar la comunicación entre el usuario y el
       programa.

  2 )- Modificada la ventana Entrar ASCII. Se captura el caracter ASCII
       deseado y se copia en la pantalla como si de un bloque se tratara.

  3 )- Nueva opción Seleccionar Alfabeto. En una ventana se mostrarán
       todos los tipos de letra existentes en el directorio \ABC\ para
       su selección. Este tipo de letra se usará automaticamente cuando
       desde el editor, y con la tecla bloqueo desplador (Sroll Lock)
       pulsada, se pulse una tecla de la 'A' a la 'Z' y  de '0' a '9'.

  4 )- Se ha creado una versión en Inglés del programa.

  5 )- Realizadas modificaciones generales importantes destinadas a
       facilitar la comunicación usuario programa. Se ha reducido el
       tamaño del programa notablemente y se han optimizado y acelerado
       muchos procesos.


  6 )- Modificadas algunas teclas de función y inclusión de nuevas.

		F1  - Leer pantalla
		F2  - Grabar pantalla
		F3  - Ver color posición del cursor
		F4  - Ver posición del cursor
		F5  - Seleccionar color
		F6  - Entrar ASCII
		F7  - Pincel en cursor ON/OFF
		F8  - Copiar bloque de pantalla a pantalla
		F9  - Copiar bloque de pantalla a disco
		F10 - Copiar bloque de disco a pantalla
		F11 - Ayuda
		F12 - Salir al DOS

		BLOQUEO DESPLAZADOR - Utilizar Alfabeto ON/OFF

  7 )- Aumentado el número de grabaciones de pantallas en la versión
       Shareware de 20 a 100 pantallas e inclusión de una ventana
       informativa para visualizar el numero de pantallas grabadas.
       La ultima pantalla editada siempre se podrá grabar al salir del
       programa.


""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
		Modificaciones realizadas en E-SCREEN 3.01
			respecto a la versión 3.00
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

  1 )- Solucionado un pequeño bug que hacia que las pantallas no se grabaran
       en el nuevo directorio especificado, sino que se gravaban en el
       directorio por defecto.

  2 )- Modificada la rutina de lectura de ficheros ANSI y grabación de
       ficheros ANSI, así como el programa auxiliar E-VANSI.EXE.
       Producian error con determinadas intrucciones ANSI utilizadas por
       otros editores de pantallas.

  3 )- Error al leer pantalla, no utilizaba el color seleccionado en borrar
       pantalla para borrar la pantalla antes de leer la nueva.

  4 )- Utilización del color de fondo de la pantalla (color seleccionado al
       borrar la pantalla) en la generación del código fuente, en los ficheros
       BSAVE del Basic (.SCR) y en los ficheros ANSI ((.ANS) cuando se selec-
       cione borrar pantalla como opción). En muchos casos el código generado
       será más reducido, sobre todo cuando el fondo de la pantalla no sea el
       típico blanco sobre negro. (idea Manolo Estevez)

  5 )- Añadidas nuevas macros para la generación del código fuente con los
       ficheros .GEN (idea Manolo Estevez)


		@date@   - Fecha en que es grabado el fichero
		@cfgc@   - Clear fore ground color (para borrar pantalla)
		@cbgc@	 - Clear back ground color (para borrar pantalla)
		@cattr@  - Clear attribute (para borrar pantalla)

		@macro0@ - Macros cuyo valor se puede definir desde la
		@macro1@ - opción 'Modificar macros' del menú config.
		@macro2@ -
		@macro3@ - Estas macros pueden servir para personalizar
		@macro4@ - el código fuente con el nombre del autor, proyecto,
		@macro5@ - empresa, libreria, etc...
		@macro6@ -
		@macro7@ - Unicamente pueden utilizarse fuera de los bucles
		@macro8@ - @inio@ / @endo@.
		@macro9@ -

  6 )- Posibilidad de leer pantallas de otros directorios accediendo a estos
       directamente desde la ventana de leer pantallas. Unicamente nos mostrará
       los ficheros (pantallas) con extensión .SCR, .ANS, .ASC y .BIN del
       directorio activo. (idea Jesús Mª Salas)

  7 )- Al salir del programa este retorna al directorio desde el que fué
       llamado. (idea Xavier Caballé)

  8 )- Reducido el tamaño del programa y acelerados numerosos procesos.

  9 )- Añadida generación de código fuente para Clipper Summer 87 y
       Clipper 5.0x. (.GEN de Monolo Estévez)

  10)- Duplicado el tamaño de la ventana de selección de caracteres ASCII
       para facilitar la búsqueda de estos. Modificado el color de selección
       del caracter ASCII.

  11)- Añadida la posibilidad de solo modificar el color del fondo de la
       pantalla sin borrarla (OJO!!! Esto puede ser util o peligroso, ya que
       afecta al código fuente generado pero no a la pantalla que se visualiza
       en el editor).

  12)- Mayor inteligencia del mensaje "Pantalla ... no grabada. ¿ Grabar ?".
       (idea Ramon Oto)

  13)- Modificada la función que muestra los menús en las ventanas:
       Añadidas teclas Inicio (Home) Fin (End). Memoria de la última opción
       resaltada. Solucionado pequeño bug, reducido y optimizado el código.
       (idea Manolo Estevez)

  14)- Añadidas nuevas opciones a 'Pincel en cursor'.
       'Solo cambiar color' de la pantalla por donde se desplace el pincel
	     sin que este dibuje ninguna línea, conservando los caracteres
	     ya existentes en la pantalla.
       'Pintar con caracter' seleccionado por donde se desplace el pincel.

  15)- Incluida nueva opción en la ventana 'config'. Esta opción permite
       modificar el valor de 10 macros internas para ser utilizadas en los
       ficheros .GEN. (idea Manolo Estévez)

  16)- Solucionado bug con el código fuente para cobol. La línea a imprimir
       no se partía si era superior de 52 caracteres.

  17)- Añadida la posibilidad de borrar una bloque de la pantalla con un color
       y caracter determinado. (idea Ramón Encinas)

  18)- Añadida la posibilidad de cambiar uno o todos los colores de un bloque
       de la pantalla. (idea Ramón Encinas)

  19)- Incluido soporte para la LINEA DE COMANDOS. Se puede llamar al programa
       pasandole como parametro el nombre de un fichero (.SCR,.ANS,.BIN o .ASC)

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3168

     Volume in drive A has no label
     Directory of A:\

    INSTALLS BAT      4438   3-23-92  11:01a
    ABC      ZIP     15566   3-23-92  11:01a
    BLQ      ZIP      8228   3-23-92  11:01a
    E-S301_S ZIP    167373   3-24-92   6:05a
    SCR      ZIP     28223   3-23-92  11:00a
    PKUNZIP  EXE     19080   1-01-80   2:32a
    GO       BAT        81   1-19-93   1:29a
            7 file(s)     242989 bytes
                           74752 bytes free
