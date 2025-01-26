<?xml version="1.0" encoding="UTF-8"?>
<!-- author="Jeff Parsons (@jeffpar)" copyright="© 2012-2025 Jeff Parsons" license="https://www.pcjs.org/LICENSE.txt" -->
<!DOCTYPE xsl:stylesheet [
]>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html"/>

	<xsl:param name="rootDir" select="''"/>
	<xsl:param name="generator" select="'client'"/>

	<xsl:variable name="MACHINECLASS">osi</xsl:variable>
	<xsl:variable name="APPCLASS">c1p</xsl:variable>
	<xsl:variable name="APPNAME">C1Pjs</xsl:variable>
	<xsl:variable name="APPVERSION">2.21</xsl:variable>
	<xsl:variable name="CSSCLASS">pcjs</xsl:variable>
	<xsl:variable name="SITEURL">https://www.pcjs.org</xsl:variable>
	<xsl:variable name="BGNDCOLOR">#fff8e7</xsl:variable>

	<xsl:template name="componentStyles">
		<link rel="stylesheet" type="text/css" href="/machines/{$MACHINECLASS}/{$APPCLASS}/xsl/components.css"/>
	</xsl:template>

	<xsl:template name="componentScripts">
		<xsl:param name="component"/>
		<script src="/machines/{$MACHINECLASS}/{$APPCLASS}/releases/{$APPVERSION}/{$component}.js"> </script>
	</xsl:template>

	<xsl:template name="componentIncludes">
		<xsl:param name="component"/>
		<xsl:call-template name="componentScripts"><xsl:with-param name="component" select="$component"/></xsl:call-template>
	</xsl:template>

	<xsl:template match="machine[@ref]">
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/machine"><xsl:with-param name="machine" select="@id"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="machine[not(@ref)]">
		<xsl:param name="machine"><xsl:value-of select="@id"/></xsl:param>
		<div id="{$machine}" class="machine {@class}js">
			<xsl:call-template name="component">
				<xsl:with-param name="machine" select="$machine"/>
				<xsl:with-param name="component" select="'machine'"/>
				<xsl:with-param name="class"><xsl:value-of select="@class"/>js</xsl:with-param>
				<xsl:with-param name="parms"><xsl:if test="@parms">,<xsl:value-of select="@parms"/></xsl:if></xsl:with-param>
				<xsl:with-param name="url"><xsl:value-of select="@url"/></xsl:with-param>
			</xsl:call-template>
		</div>
	</xsl:template>

	<xsl:template match="component[@ref]">
		<xsl:param name="machine"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/component"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="component[not(@ref)]">
		<xsl:param name="machine"/>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class" select="@class"/>
			<xsl:with-param name="parms"><xsl:if test="@parms">,<xsl:value-of select="@parms"/></xsl:if></xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template name="component">
		<xsl:param name="machine" select="''"/>
		<xsl:param name="component" select="name(.)"/>
		<xsl:param name="class" select="''"/>
		<xsl:param name="parms" select="''"/>
		<xsl:param name="url" select="''"/>
		<xsl:variable name="id">
			<xsl:choose>
				<xsl:when test="$component = 'machine'"><xsl:value-of select="$machine"/>.machine</xsl:when>
				<xsl:when test="$machine != ''"><xsl:value-of select="$machine"/><xsl:if test="@id">.<xsl:value-of select="@id"/></xsl:if></xsl:when>
				<xsl:when test="@id"><xsl:value-of select="@id"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="name">
			<xsl:choose>
				<xsl:when test="name"><xsl:value-of select="name"/></xsl:when>
				<xsl:when test="@name"><xsl:value-of select="@name"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="border">
			<xsl:choose>
				<xsl:when test="@border = '1'">border:1px solid black;border-radius:10px;</xsl:when>
				<xsl:when test="@border">border:<xsl:value-of select="@border"/>;</xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="left">
			<xsl:choose>
				<xsl:when test="@left">left:<xsl:value-of select="@left"/>;</xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="top">
			<xsl:choose>
				<xsl:when test="@top">top:<xsl:value-of select="@top"/>;</xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="width">
			<xsl:choose>
				<xsl:when test="@width">
					<xsl:choose>
						<xsl:when test="$left != '' or $top != ''">width:<xsl:value-of select="@width"/>;</xsl:when>
						<xsl:otherwise>width:auto;max-width:<xsl:value-of select="@width"/>;</xsl:otherwise>
					</xsl:choose>
				</xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="height">
			<xsl:choose>
				<xsl:when test="@height">height:<xsl:value-of select="@height"/>;</xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="padding">
			<xsl:choose>
				<xsl:when test="@padding">padding:<xsl:value-of select="@padding"/>;</xsl:when>
				<xsl:otherwise>
					<xsl:if test="@padTop">padding-top:<xsl:value-of select="@padTop"/>;</xsl:if>
					<xsl:if test="@padRight">padding-right:<xsl:value-of select="@padRight"/>;</xsl:if>
					<xsl:if test="@padBottom">padding-bottom:<xsl:value-of select="@padBottom"/>;</xsl:if>
					<xsl:if test="@padLeft">padding-left:<xsl:value-of select="@padLeft"/>;</xsl:if>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="pos">
			<xsl:choose>
				<xsl:when test="@pos = 'left'">float:left;</xsl:when>
				<xsl:when test="@pos = 'right'">float:right;</xsl:when>
				<xsl:when test="@pos = 'center'">margin:0 auto;</xsl:when>
				<xsl:when test="@pos">position:<xsl:value-of select="@pos"/>;</xsl:when>
				<xsl:when test="$left != '' or $top != ''">position:absolute;</xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="style">
			<xsl:if test="$component = 'machine'">overflow:auto;</xsl:if>
			<xsl:if test="@background">
				<xsl:if test="@background = 'default'">background-color:<xsl:value-of select="$BGNDCOLOR"/>;</xsl:if>
				<xsl:if test="@background != 'default'">background-color:<xsl:value-of select="@background"/>;</xsl:if>
			</xsl:if>
			<xsl:if test="@style"><xsl:value-of select="@style"/></xsl:if>
		</xsl:variable>
		<xsl:variable name="componentClass">
			<xsl:value-of select="$APPCLASS"/><xsl:text>-</xsl:text><xsl:value-of select="$component"/><xsl:text> </xsl:text><xsl:value-of select="$CSSCLASS"/><xsl:text>-component</xsl:text>
		</xsl:variable>
		<div id="{$id}" class="{$componentClass}" style="{$width}{$height}{$pos}{$left}{$top}{$padding}">
			<xsl:if test="$component = 'machine'">
				<xsl:apply-templates select="name" mode="machine"/>
			</xsl:if>
			<xsl:if test="$component != 'machine'">
				<xsl:apply-templates select="name" mode="component"/>
			</xsl:if>
			<div class="{$CSSCLASS}-container" style="{$border}{$style}">
				<xsl:if test="$class != '' and $component != 'machine'">
					<div class="{$APPCLASS}-{$class}-object" data-value="{{id:'{$id}',name:'{$name}'{$parms}}}"> </div>
				</xsl:if>
				<xsl:if test="control">
					<div class="{$CSSCLASS}-controls">
						<xsl:apply-templates select="control" mode="component"/>
					</div>
				</xsl:if>
				<xsl:apply-templates><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
			</div>
			<xsl:if test="$component = 'machine'">
				<xsl:choose>
					<xsl:when test="$url != ''"><div class="{$CSSCLASS}-reference">[<a href="{$url}">XML</a>]</div></xsl:when>
					<xsl:otherwise/>
				</xsl:choose>
				<div class="{$CSSCLASS}-copyright">
					<a href="{$SITEURL}" target="_blank">C1Pjs</a> v<xsl:value-of select="$APPVERSION"/> © 2012-2025 <a href="https://github.com/jeffpar" target="_blank">Jeff Parsons</a>
				</div>
				<div style="clear:both"> </div>
			</xsl:if>
		</div>
	</xsl:template>

	<xsl:template match="name" mode="machine">
		<xsl:variable name="pos">
			<xsl:choose>
				<xsl:when test="@pos = 'center'">text-align:center;</xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<h3 style="{$pos}"><xsl:apply-templates/></h3>
	</xsl:template>

	<xsl:template match="name" mode="component">
		<div class="{$CSSCLASS}-name"><xsl:apply-templates/></div>
	</xsl:template>

	<xsl:template match="control" mode="component">
		<xsl:variable name="type">
			type:'<xsl:value-of select="@type"/>'
		</xsl:variable>
		<xsl:variable name="binding">
			binding:'<xsl:value-of select="@binding"/>'
		</xsl:variable>
		<xsl:variable name="border">
			<xsl:choose>
				<xsl:when test="@border = '1'">border:1px solid black;</xsl:when>
				<xsl:when test="@border">border:<xsl:value-of select="@border"/>;</xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="width">
			<xsl:choose>
				<xsl:when test="@width">width:<xsl:value-of select="@width"/>;</xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="height">
			<xsl:choose>
				<xsl:when test="@height">height:<xsl:value-of select="@height"/>;</xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="left">
			<xsl:choose>
				<xsl:when test="@left">left:<xsl:value-of select="@left"/>;</xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="top">
			<xsl:choose>
				<xsl:when test="@top">top:<xsl:value-of select="@top"/>;</xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="pos">
			<xsl:choose>
				<xsl:when test="$left != '' or $top != ''">position:absolute;</xsl:when>
				<xsl:when test="@pos = 'left'">float:left;</xsl:when>
				<xsl:when test="@pos = 'right'">float:right;</xsl:when>
				<xsl:when test="@pos = 'center'">margin:0 auto;</xsl:when>
				<xsl:when test="@pos"><xsl:value-of select="@pos"/>;</xsl:when>
				<xsl:otherwise><xsl:if test="$left = ''">float:left;</xsl:if></xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="style">
			<xsl:choose>
				<xsl:when test="@style"><xsl:value-of select="@style"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<div class="{$APPCLASS}-control" style="{$pos}{$left}{$top}">
			<xsl:variable name="fontsize">
				<xsl:choose>
					<xsl:when test="@size = 'large'">font-size:<xsl:value-of select="@size"/>;</xsl:when>
					<xsl:otherwise/>
				</xsl:choose>
			</xsl:variable>
			<xsl:variable name="subclass">
				<xsl:if test="@label"><xsl:text> </xsl:text><xsl:value-of select="$CSSCLASS"/><xsl:text>-label</xsl:text></xsl:if>
			</xsl:variable>
			<xsl:variable name="labelwidth">
				<xsl:if test="@labelwidth">width:<xsl:value-of select="@labelwidth"/>;</xsl:if>
			</xsl:variable>
			<xsl:variable name="labelstyle">
				<xsl:if test="@labelstyle"><xsl:value-of select="@labelstyle"/></xsl:if>
			</xsl:variable>
			<xsl:if test="@label">
				<xsl:if test="not(@labelpos) or @labelpos = 'left'">
					<div class="{$CSSCLASS}-label" style="{$labelwidth}{$labelstyle}"><xsl:value-of select="@label"/></div>
				</xsl:if>
			</xsl:if>
			<xsl:choose>
				<xsl:when test="@type = 'button'">
					<button class="{$APPCLASS}-binding" style="{$border}{$width}{$height}{$fontsize}{$style}" data-value="{{{$type},{$binding}}}"><xsl:apply-templates/></button>
				</xsl:when>
				<xsl:when test="@type = 'list'">
					<select class="{$APPCLASS}-binding" style="{$border}{$width}{$height}{$fontsize}{$style}" data-value="{{{$type},{$binding}}}">
						<xsl:apply-templates select="item" mode="component"/>
					</select>
				</xsl:when>
				<xsl:when test="@type = 'text'">
					<input class="{$APPCLASS}-binding" type="text" style="{$border}{$width}{$height}{$style}" data-value="{{{$type},{$binding}}}" value="" autocapitalize="off" autocorrect="off"/>
				</xsl:when>
				<xsl:when test="@type = 'submit'">
					<input class="{$APPCLASS}-binding" type="submit" style="{$border}{$fontsize}{$style}" data-value="{{{$type},{$binding}}}" value="{.}"/>
				</xsl:when>
				<xsl:when test="@type = 'textarea'">
					<textarea class="{$APPCLASS}-binding" style="{$border}{$width}{$height}{$style}" data-value="{{{$type},{$binding}}}" readonly="readonly" autocapitalize="off" autocorrect="off" spellcheck="false"> </textarea>
				</xsl:when>
				<xsl:when test="@type = 'heading'">
					<div><xsl:value-of select="."/></div>
				</xsl:when>
				<xsl:when test="@type = 'file'">
					<form class="{$APPCLASS}-binding" style="{$border}{$width}{$height}{$style}" data-value="{{{$type},{$binding}}}">
						<fieldset class="{$CSSCLASS}-fieldset">
							<input type="file"/>
							<input type="submit" value="Mount" disabled="true"/>
						</fieldset>
					</form>
				</xsl:when>
				<xsl:when test="@type = 'separator'">
					<hr/>
				</xsl:when>
				<xsl:when test="not(@type)">
					<div style="clear:both"> </div><br/>
				</xsl:when>
				<xsl:otherwise>
					<div class="{$APPCLASS}-binding{$subclass}" style="{$border}{$width}{$height}{$style}" data-value="{{{$type},{$binding}}}"><xsl:apply-templates/></div>
				</xsl:otherwise>
			</xsl:choose>
			<xsl:if test="@label">
				<xsl:if test="@labelpos = 'right'">
					<div class="{$CSSCLASS}-label" style="{$labelwidth}{$labelstyle}"><xsl:value-of select="@label"/></div>
				</xsl:if>
				<div style="clear:both"> </div>
			</xsl:if>
		</div>
	</xsl:template>

	<xsl:template match="item" mode="component">
		<option value="{@ref}"><xsl:value-of select="."/></option>
	</xsl:template>

	<xsl:template match="name">
	</xsl:template>

	<xsl:template match="control">
	</xsl:template>

	<xsl:template match="cpu[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/cpu"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="cpu[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="autoStart">
			<xsl:choose>
				<xsl:when test="@autostart"><xsl:value-of select="@autostart"/></xsl:when>
				<xsl:otherwise>null</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class" select="'cpu'"/>
			<xsl:with-param name="parms">,autoStart:<xsl:value-of select="$autoStart"/></xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="keyboard[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/keyboard"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="keyboard[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="model">
			<xsl:choose>
				<xsl:when test="@model"><xsl:value-of select="@model"/></xsl:when>
				<xsl:otherwise>600</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">keyboard</xsl:with-param>
			<xsl:with-param name="parms">,model:<xsl:value-of select="$model"/></xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="serial[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/serial"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="serial[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="demo">
			<xsl:choose>
				<xsl:when test="@demo"><xsl:value-of select="@demo"/></xsl:when>
				<xsl:otherwise>false</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">serial</xsl:with-param>
			<xsl:with-param name="parms">,demo:<xsl:value-of select="$demo"/></xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="disk[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/disk"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="disk[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">disk</xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="rom[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/rom"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="rom[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="size">
			<xsl:choose>
				<xsl:when test="@size"><xsl:value-of select="@size"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="image">
			<xsl:choose>
				<xsl:when test="@image"><xsl:value-of select="@image"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">rom</xsl:with-param>
			<xsl:with-param name="parms">,size:<xsl:value-of select="$size"/>,image:'<xsl:value-of select="$image"/>'</xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="ram[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/ram"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="ram[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="size">
			<xsl:choose>
				<xsl:when test="@size"><xsl:value-of select="@size"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">ram</xsl:with-param>
			<xsl:with-param name="parms">,size:<xsl:value-of select="$size"/></xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="video[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/video"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="video[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="model">
			<xsl:choose>
				<xsl:when test="@model"><xsl:value-of select="@model"/></xsl:when>
				<xsl:otherwise>600</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="screenWidth">
			<xsl:choose>
				<xsl:when test="@screenwidth"><xsl:value-of select="@screenwidth"/></xsl:when>
				<xsl:when test="@screenWidth"><xsl:value-of select="@screenWidth"/></xsl:when>
				<xsl:otherwise>256</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="screenHeight">
			<xsl:choose>
				<xsl:when test="@screenheight"><xsl:value-of select="@screenheight"/></xsl:when>
				<xsl:when test="@screenHeight"><xsl:value-of select="@screenHeight"/></xsl:when>
				<xsl:otherwise>224</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="screenColor">
			<xsl:choose>
				<xsl:when test="@screencolor"><xsl:value-of select="@screencolor"/></xsl:when>
				<xsl:when test="@screenColor"><xsl:value-of select="@screenColor"/></xsl:when>
				<xsl:otherwise>black</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="charCols">
			<xsl:choose>
				<xsl:when test="@cols"><xsl:value-of select="@cols"/></xsl:when>
				<xsl:otherwise>32</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="charRows">
			<xsl:choose>
				<xsl:when test="@rows"><xsl:value-of select="@rows"/></xsl:when>
				<xsl:otherwise>32</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="charWidth">
			<xsl:choose>
				<xsl:when test="@charwidth"><xsl:value-of select="@charwidth"/></xsl:when>
				<xsl:when test="@charWidth"><xsl:value-of select="@charWidth"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="charHeight">
			<xsl:choose>
				<xsl:when test="@charheight"><xsl:value-of select="@charheight"/></xsl:when>
				<xsl:when test="@charHeight"><xsl:value-of select="@charHeight"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="charSet">
			<xsl:choose>
				<xsl:when test="@charset"><xsl:value-of select="@charset"/></xsl:when>
				<xsl:when test="@charSet"><xsl:value-of select="@charSet"/></xsl:when>
				<xsl:when test="@fontROM"><xsl:value-of select="@fontROM"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="smoothing">
			<xsl:choose>
				<xsl:when test="@smoothing"><xsl:value-of select="@smoothing"/></xsl:when>
				<xsl:otherwise>null</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">video</xsl:with-param>
			<xsl:with-param name="parms">,model:<xsl:value-of select="$model"/>,screenWidth:<xsl:value-of select="$screenWidth"/>,screenHeight:<xsl:value-of select="$screenHeight"/>,charCols:<xsl:value-of select="$charCols"/>,charRows:<xsl:value-of select="$charRows"/>,charWidth:<xsl:value-of select="$charWidth"/>,charHeight:<xsl:value-of select="$charHeight"/>,charSet:'<xsl:value-of select="$charSet"/>',screenColor:'<xsl:value-of select="$screenColor"/>',smoothing:<xsl:value-of select="$smoothing"/></xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="debugger[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/debugger"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="debugger[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">debugger</xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="panel[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/panel"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="panel[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">panel</xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="computer[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/computer"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="computer[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="modules">
			[<xsl:for-each select="module">
				{<xsl:call-template name="module"/>}
				<xsl:if test="position() != last()">,</xsl:if>
			</xsl:for-each>]
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">computer</xsl:with-param>
			<xsl:with-param name="parms">,modules:<xsl:value-of select="$modules"/></xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template name="module">
		type:'<xsl:value-of select="@type"/>',refID:'<xsl:value-of select="@refid"/>'<xsl:if test="@start">,start:<xsl:value-of select="@start"/>,end:<xsl:value-of select="@end"/></xsl:if>
	</xsl:template>

	<xsl:template name="displayAttr">
		<xsl:for-each select="@*"><xsl:value-of select="concat(' ', name(), '=&quot;', ., '&quot;')"/></xsl:for-each>
	</xsl:template>

	<xsl:template name="displayXML"><xsl:param name="tag"/>&lt;<xsl:value-of select="$tag"/><xsl:call-template name="displayAttr"/>&gt;<xsl:apply-templates mode="display"/>&lt;/<xsl:value-of select="$tag"/>&gt;</xsl:template>

	<xsl:template name="displayMachine">
		<pre>&lt;machine<xsl:call-template name="displayAttr"/>&gt;<xsl:apply-templates mode="display"/>&lt;/machine&gt;</pre>
	</xsl:template>

	<xsl:template match="*" mode="display"><xsl:call-template name="displayXML"><xsl:with-param name="tag"><xsl:value-of select="name(.)"/></xsl:with-param></xsl:call-template></xsl:template>

</xsl:stylesheet>
