<?xml version="1.0" encoding="UTF-8"?>
<!-- author="Jeff Parsons (@jeffpar)" copyright="© 2012-2024 Jeff Parsons" license="https://www.pcjs.org/LICENSE.txt" -->
<!DOCTYPE xsl:stylesheet [
	<!ENTITY nbsp "&#160;"> <!ENTITY sect "&#167;"> <!ENTITY copy "&#169;"> <!ENTITY para "&#182;"> <!ENTITY ndash "&#8211;"> <!ENTITY mdash "&#8212;">
	<!ENTITY lsquo "&#8216;"> <!ENTITY rsquo "&#8217;"> <!ENTITY ldquo "&#8220;"> <!ENTITY rdquo "&#8221;"> <!ENTITY dagger "&#8224;"> <!ENTITY Dagger "&#8225;">
]>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output doctype-system="about:legacy-compat" method="html"/>

	<xsl:include href="/machines/pcx86/xsl/common.xsl"/>
	<xsl:include href="/machines/pcx86/xsl/components.xsl"/>

	<xsl:template match="/machine">
		<xsl:variable name="machineType">
			<xsl:choose>
				<xsl:when test="@type"><xsl:value-of select="@type"/></xsl:when>
				<xsl:otherwise><xsl:value-of select="@class"/></xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="machineClass">
			<xsl:choose>
				<xsl:when test="@class = 'pc' or @class = 'c1p'"><xsl:value-of select="@class"/>js</xsl:when>
				<xsl:otherwise><xsl:value-of select="@class"/></xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<html lang="en">
			<head>
				<title>PCjs</title>
				<xsl:call-template name="commonStyles"/>
				<xsl:call-template name="componentStyles"/>
			</head>
			<body>
				<div class="common">
					<xsl:call-template name="commonTop"/>
					<div class="common-middle">
						<xsl:call-template name="displayIntro"/>
						<div id="{@id}" class="machine {$machineType} {$machineClass}">
							<xsl:call-template name="component">
								<xsl:with-param name="machine" select="@id"/>
								<xsl:with-param name="component" select="'machine'"/>
								<xsl:with-param name="class" select="$machineClass"/>
								<xsl:with-param name="parms"><xsl:if test="@parms">,<xsl:value-of select="@parms"/></xsl:if></xsl:with-param>
							</xsl:call-template>
						</div>
						<xsl:call-template name="displayOutro"/>
					</div>
					<xsl:call-template name="displayMachine"/>
					<xsl:call-template name="commonBottom"/>
				</div>
				<xsl:call-template name="componentScripts">
					<xsl:with-param name="component">
						<xsl:choose>
							<xsl:when test="@uncompiled = 'true'"><xsl:value-of select="$machineType"/>-uncompiled</xsl:when>
							<xsl:otherwise><xsl:value-of select="$machineType"/></xsl:otherwise>
						</xsl:choose>
					</xsl:with-param>
				</xsl:call-template>
				<xsl:text disable-output-escaping="yes">
				<![CDATA[
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-LDVG8LST9P"></script>
				<script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-LDVG8LST9P');
				</script>
				]]>
				</xsl:text>
			</body>
		</html>
	</xsl:template>

</xsl:stylesheet>
