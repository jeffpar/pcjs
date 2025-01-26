<?xml version="1.0" encoding="UTF-8"?>
<!-- author="Jeff Parsons (@jeffpar)" copyright="© 2012-2025 Jeff Parsons" license="https://www.pcjs.org/LICENSE.txt" -->
<!DOCTYPE xsl:stylesheet [
	<!ENTITY nbsp "&#160;"> <!ENTITY ne "&#8800;"> <!ENTITY le "&#8804;"> <!ENTITY ge "&#8805;">
	<!ENTITY times "&#215;"> <!ENTITY sdot "&#8901;"> <!ENTITY divide "&#247;">
	<!ENTITY copy "&#169;"> <!ENTITY Sigma "&#931;"> <!ENTITY sigma "&#963;"> <!ENTITY sum "&#8721;"> <!ENTITY lbrace "&#123;">
]>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html"/>

	<xsl:template name="commonStyles">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<meta charset="utf-8"/>
		<meta name="viewport" content="initial-scale=1"/>
		<meta name="description" content="Welcome to PCjs, home of the original IBM PC in a web browser. The PCjs Project offers a variety of computer emulators written in JavaScript, including PCx86 for x86-based machines (8088 through 80386), C1Pjs for the 6502-based Ohio Scientific Challenger 1P, PCx80 for 8080-based machines like Space Invaders and the DEC VT100 Terminal, PDPjs with support for PDP-10 and PDP-11 machines, and emulators of classic programmable calculators, like the TI-57.  PCjs also provides an archive of selected historical PC software, publications, and reference materials."/>
		<meta name="apple-mobile-web-app-title" content="PCjs"/>
		<meta property="og:image" content="/assets/img/logo-home.png"/>
		<meta property="og:title" content="The Original IBM PC in a Web Browser"/>
		<link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png"/>
		<link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png"/>
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png"/>
		<link rel="shortcut icon" href="/assets/icons/favicon.ico"/>
		<link rel="mask-icon" href="/assets/icons/safari-pinned-tab.svg" color="#5bbad5"/>
		<link rel="stylesheet" type="text/css" href="/machines/pcx86/xsl/common.css"/>
		<link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet"/>
	</xsl:template>

	<xsl:template name="commonTop">
		<div class="common-top">
			<div class="common-top-left">
				<h2><a href="/">PCjs Machines</a></h2>
			</div>
			<div class="common-top-right">
				<ul>
					<li><a href="/blog/">Blog</a></li>
					<li><a href="/machines/">Machines</a></li>
					<li><a href="#">About</a></li>
				</ul>
			</div>
		</div>
	</xsl:template>

	<xsl:template name="commonBottom">
		<div class="common-bottom">
			<p class="common-reference"></p>
			<p class="common-copyright">
				<span class="common-copyright"><a href="https://www.pcjs.org/">pcjs.org</a> © 2012-2025 by <a href="https://github.com/jeffpar">Jeff Parsons</a></span><br/>
				<span class="common-copyright"><a href="https://github.com/jeffpar/pcjs">PCjs</a> is released under <a href="https://www.pcjs.org/LICENSE.txt">MIT License</a></span><br/>
				<span>Powered by <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>, <a href="http://vanilla-js.com" target="_blank">Vanilla JS</a>, and <a href="https://github.com" target="_blank">GitHub</a></span>
			</p>
		</div>
	</xsl:template>

</xsl:stylesheet>
