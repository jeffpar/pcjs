<?xml version="1.0" encoding="UTF-8"?>
<!-- author="Jeff Parsons (@jeffpar)" copyright="© 2012-2020 Jeff Parsons" license="https://www.pcjs.org/LICENSE.txt" -->
<!DOCTYPE xsl:stylesheet [
	<!ENTITY nbsp "&#160;"> <!ENTITY ne "&#8800;"> <!ENTITY le "&#8804;"> <!ENTITY ge "&#8805;">
]>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html"/>

	<xsl:param name="rootDir" select="''"/>
	<xsl:param name="generator" select="'client'"/>

	<xsl:variable name="MACHINETYPE">pc</xsl:variable>
	<xsl:variable name="APPCLASS">pcx86</xsl:variable>
	<xsl:variable name="APPNAME">PCx86</xsl:variable>
	<xsl:variable name="APPVERSION">2.00</xsl:variable>
	<xsl:variable name="CSSCLASS">pcjs</xsl:variable>
	<xsl:variable name="SITEURL">https://www.pcjs.org</xsl:variable>
	<xsl:variable name="BGNDCOLOR">#fff8e7</xsl:variable>

	<xsl:template name="componentStyles">
		<link rel="stylesheet" type="text/css" href="/assets/css/pcjs.css"/>
	</xsl:template>

	<xsl:template name="componentScripts">
		<xsl:param name="component"/>
		<script src="/machines/{$APPCLASS}/releases/{$APPVERSION}/{$component}.js"> </script>
	</xsl:template>

	<xsl:template name="componentIncludes">
		<xsl:param name="component"/>
		<xsl:call-template name="componentScripts"><xsl:with-param name="component" select="$component"/></xsl:call-template>
	</xsl:template>

	<xsl:template name="machine">
		<xsl:param name="href" select="''"/>
		<xsl:param name="state" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="$href"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/machine">
			<xsl:with-param name="machineState" select="$state"/>
		</xsl:apply-templates>
	</xsl:template>

	<xsl:template match="machine[@ref]">
		<xsl:param name="machineState" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/machine">
			<xsl:with-param name="machine" select="@id"/>
			<xsl:with-param name="machineState">
				<xsl:choose>
					<xsl:when test="$machineState != ''"><xsl:value-of select="$machineState"/></xsl:when>
					<xsl:otherwise><xsl:value-of select="@state"/></xsl:otherwise>
				</xsl:choose>
			</xsl:with-param>
		</xsl:apply-templates>
	</xsl:template>

	<xsl:template match="machine[not(@ref)]">
		<xsl:param name="machine"><xsl:value-of select="@id"/></xsl:param>
		<xsl:param name="machineState" select="''"/>
		<xsl:variable name="machineStyle">
			<xsl:if test="@float">float:<xsl:value-of select="@float"/></xsl:if>
		</xsl:variable>
		<xsl:variable name="machineType">
			<xsl:if test="@type"><xsl:value-of select="@type"/></xsl:if>
		</xsl:variable>
		<xsl:variable name="machineClass">
			<xsl:choose>
				<xsl:when test="@class = 'pc' or @class = 'c1p'"><xsl:value-of select="@class"/>js</xsl:when>
				<xsl:otherwise><xsl:value-of select="@class"/></xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<div id="{$machine}" class="machine {$machineType} {$machineClass}" style="{$machineStyle}">
			<xsl:call-template name="component">
				<xsl:with-param name="machine" select="$machine"/>
				<xsl:with-param name="machineState">
					<xsl:choose>
						<xsl:when test="$machineState != ''"><xsl:value-of select="$machineState"/></xsl:when>
						<xsl:otherwise><xsl:value-of select="@state"/></xsl:otherwise>
					</xsl:choose>
				</xsl:with-param>
				<xsl:with-param name="component" select="'machine'"/>
				<xsl:with-param name="class"><xsl:value-of select="@class"/>js</xsl:with-param>
				<xsl:with-param name="parms">
					<xsl:choose>
						<xsl:when test="$machineState != ''">"<xsl:value-of select="$machineState"/>"</xsl:when>
						<xsl:otherwise><xsl:value-of select="@parms"/></xsl:otherwise>
					</xsl:choose>
				</xsl:with-param>
			</xsl:call-template>
		</div>
	</xsl:template>

	<xsl:template match="component[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/component">
			<xsl:with-param name="machine" select="$machine"/>
		</xsl:apply-templates>
	</xsl:template>

	<xsl:template match="component[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class" select="@class"/>
			<xsl:with-param name="parms"><xsl:if test="@parms">,<xsl:value-of select="@parms"/></xsl:if></xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template name="component">
		<xsl:param name="machine" select="''"/>
		<xsl:param name="machineState" select="''"/>
		<xsl:param name="component" select="name(.)"/>
		<xsl:param name="class" select="''"/>
		<xsl:param name="parms" select="''"/>
		<xsl:param name="screenWidth" select="''"/>
		<xsl:param name="screenHeight" select="''"/>
		<xsl:variable name="id">
			<xsl:choose>
				<xsl:when test="$component = 'machine'"><xsl:value-of select="$machine"/>.machine</xsl:when>
				<xsl:when test="$machine != '' and @id"><xsl:value-of select="$machine"/>.<xsl:value-of select="@id"/></xsl:when>
				<xsl:when test="$machine != ''"><xsl:value-of select="$machine"/>.<xsl:value-of select="$component"/></xsl:when>
				<xsl:when test="@id"><xsl:value-of select="@id"/></xsl:when>
				<xsl:otherwise><xsl:value-of select="$component"/></xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="machineParms">
			<xsl:choose>
				<xsl:when test="$component = 'machine'"><xsl:value-of select="$parms"/></xsl:when>
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
		<xsl:variable name="comment">
			<xsl:choose>
				<xsl:when test="@comment">,comment:'<xsl:value-of select="@comment"/>'</xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="border">
			<xsl:choose>
				<xsl:when test="@border = '1'">border:1px solid black;border-radius:15px;</xsl:when>
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
						<xsl:when test="$left != '' or $top != ''">width:<xsl:value-of select="@width"/></xsl:when>
						<xsl:when test="@pos = 'left' or @pos = 'right'">width:<xsl:value-of select="@width"/>;max-width:<xsl:value-of select="@width"/>;</xsl:when>
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
				<xsl:when test="@pos = 'center'">margin:0 auto;clear:both;</xsl:when>
				<xsl:when test="@pos">position:<xsl:value-of select="@pos"/>;</xsl:when>
				<xsl:when test="$left != '' or $top != ''">position:relative;</xsl:when>
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
			<xsl:value-of select="$APPCLASS"/><xsl:text>-</xsl:text><xsl:value-of select="$component"/><xsl:text> </xsl:text><xsl:value-of select="$APPCLASS"/><xsl:text>-component</xsl:text>
		</xsl:variable>
		<div id="{$id}" class="{$componentClass}" style="{$width}{$height}{$pos}{$left}{$top}{$padding}" data-value="{$machineParms}">
			<xsl:if test="$component = 'machine'">
				<xsl:apply-templates select="name" mode="machine"/>
			</xsl:if>
			<xsl:if test="$component != 'machine'">
				<xsl:apply-templates select="name" mode="component"/>
			</xsl:if>
			<div class="{$CSSCLASS}-container" style="{$border}{$style}">
				<xsl:if test="$component = 'machine'">
					<xsl:apply-templates select="menu" mode="machine"/>
				</xsl:if>
				<xsl:if test="$component != 'machine'">
					<xsl:apply-templates select="menu" mode="component"/>
				</xsl:if>
				<xsl:variable name="objectClass">
					<xsl:value-of select="$APPCLASS"/><xsl:text>-</xsl:text><xsl:value-of select="$class"/><xsl:text>-object</xsl:text><xsl:if test="$class = 'video'"><xsl:text> </xsl:text><xsl:value-of select="$CSSCLASS"/><xsl:text>-screen</xsl:text></xsl:if>
				</xsl:variable>
				<xsl:if test="$class != '' and $component != 'machine'">
					<div class="{$objectClass}" data-value="{{id:'{$id}',name:'{$name}'{$comment}{$parms}}}">
						<xsl:if test="$class = 'video'">
							<canvas class="pcjs-canvas" width="{$screenWidth}" height="{$screenHeight}" style="height: auto; background-color: black;"></canvas>
						</xsl:if>
					</div>
				</xsl:if>
				<xsl:if test="control">
					<div class="{$CSSCLASS}-controls">
						<xsl:apply-templates select="control" mode="component"/>
					</div>
				</xsl:if>
				<xsl:apply-templates>
					<xsl:with-param name="machine" select="$machine"/>
					<xsl:with-param name="machineState" select="$machineState"/>
				</xsl:apply-templates>
			</div>
			<xsl:if test="$component = 'machine'">
				<xsl:if test="@url != ''"><div class="{$CSSCLASS}-reference">[<a href="{@url}">XML</a>]</div></xsl:if>
				<xsl:if test="$APPCLASS = 'pcx86'"><div class="{$CSSCLASS}-reference" style="padding-left:8px">[<a href="#" onclick="savePC('{$machine}'); return false;">Save Machine</a>]</div></xsl:if>
				<xsl:if test="@debugger = 'available'"></xsl:if>
				<xsl:choose>
					<xsl:when test="@debugger = 'optional'"><div class="{$CSSCLASS}-reference">[<a href="?debugger=true">Debugger</a>]</div></xsl:when>
					<xsl:when test="@debugger = 'available'"><div class="{$CSSCLASS}-reference">[<a href="debugger/machine.xml">Debugger</a>]</div></xsl:when>
					<xsl:otherwise/>
				</xsl:choose>
				<div class="{$CSSCLASS}-copyright">
					<a href="{$SITEURL}" target="_blank"><xsl:value-of select="$APPNAME"/></a> v<xsl:value-of select="$APPVERSION"/> © 2012-2020 <a href="https://github.com/jeffpar" target="_blank">Jeff Parsons</a>
				</div>
				<div style="clear:both"> </div>
			</xsl:if>
		</div>
	</xsl:template>

	<xsl:template match="name" mode="doc">
		<h3><xsl:apply-templates mode="doc"/></h3>
	</xsl:template>

	<xsl:template match="em" mode="doc">
		<em><xsl:apply-templates mode="doc"/></em>
	</xsl:template>

	<xsl:template match="strong" mode="doc">
		<strong><xsl:apply-templates mode="doc"/></strong>
	</xsl:template>

	<xsl:template match="name" mode="machine">
		<xsl:variable name="pos">
			<xsl:choose>
				<xsl:when test="@pos = 'middle'">text-align:center;</xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<h3 style="{$pos}"><xsl:apply-templates/></h3>
	</xsl:template>

	<xsl:template match="name" mode="component">
		<div class="{$CSSCLASS}-name"><xsl:apply-templates/></div>
	</xsl:template>

	<xsl:template match="menu" mode="component">
		<xsl:apply-templates mode="component"/>
	</xsl:template>

	<xsl:template match="title" mode="component">
		<div class="{$CSSCLASS}-title"><xsl:apply-templates/></div>
	</xsl:template>

	<xsl:template match="control" mode="component">
		<xsl:variable name="type">
			<xsl:text>type:'</xsl:text><xsl:value-of select="@type"/><xsl:text>'</xsl:text>
		</xsl:variable>
		<xsl:variable name="binding">
			<xsl:text>binding:'</xsl:text><xsl:value-of select="@binding"/><xsl:text>'</xsl:text>
		</xsl:variable>
		<xsl:variable name="value">
			<xsl:text>value:'</xsl:text><xsl:value-of select="@value"/><xsl:text>'</xsl:text>
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
				<xsl:when test="@pos = 'center'">clear:both;margin:0 auto;</xsl:when>
				<xsl:when test="@pos = 'default'">clear:both;</xsl:when>
				<xsl:when test="@pos">position:<xsl:value-of select="@pos"/>;</xsl:when>
				<xsl:when test="$left != '' or $top != ''">position:relative;</xsl:when>
				<xsl:when test="@container">text-align:<xsl:value-of select="@container"/>;</xsl:when>
				<xsl:otherwise><xsl:if test="$left = ''">float:left;</xsl:if></xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="style">
			<xsl:choose>
				<xsl:when test="@style"><xsl:value-of select="@style"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="containerClass">
			<xsl:if test="@type = 'container' and @class"><xsl:text> </xsl:text><xsl:value-of select="@class"/></xsl:if>
		</xsl:variable>
		<xsl:variable name="containerStyle">
			<xsl:value-of select="$pos"/><xsl:value-of select="$left"/><xsl:value-of select="$top"/><xsl:value-of select="$padding"/>
			<xsl:choose>
				<xsl:when test="@type = 'container'"><xsl:value-of select="$border"/><xsl:value-of select="$width"/><xsl:value-of select="$height"/><xsl:value-of select="$style"/></xsl:when>
				<xsl:when test="@type = 'key'"><xsl:value-of select="$border"/><xsl:value-of select="$width"/><xsl:value-of select="$style"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<div class="{$APPCLASS}-control{$containerClass}" style="{$containerStyle}">
			<xsl:variable name="fontsize">
				<xsl:choose>
					<xsl:when test="@size = 'large' or @size = 'small'">font-size:<xsl:value-of select="@size"/>;</xsl:when>
					<xsl:otherwise/>
				</xsl:choose>
			</xsl:variable>
			<xsl:variable name="subClass">
				<xsl:if test="@label"><xsl:text> </xsl:text><xsl:value-of select="$CSSCLASS"/><xsl:text>-label</xsl:text></xsl:if>
			</xsl:variable>
			<xsl:variable name="labelWidth">
				<xsl:choose>
					<xsl:when test="@labelwidth">width:<xsl:value-of select="@labelwidth"/>;</xsl:when>
					<xsl:when test="@labelWidth">width:<xsl:value-of select="@labelWidth"/>;</xsl:when>
					<xsl:otherwise/>
				</xsl:choose>
			</xsl:variable>
			<xsl:variable name="labelStyle">
				<xsl:choose>
					<xsl:when test="@labelstyle"><xsl:value-of select="@labelstyle"/></xsl:when>
					<xsl:when test="@labelStyle"><xsl:value-of select="@labelStyle"/></xsl:when>
					<xsl:otherwise>text-align:right;</xsl:otherwise>
				</xsl:choose>
			</xsl:variable>
			<xsl:if test="@label">
				<xsl:if test="not(@labelpos) or @labelpos = 'left'">
					<div class="{$CSSCLASS}-label" style="{$labelWidth}{$labelStyle}"><xsl:value-of select="@label"/></div>
				</xsl:if>
			</xsl:if>
			<xsl:choose>
				<xsl:when test="@type = 'canvas'">
					<canvas class="{$APPCLASS}-binding {$CSSCLASS}-canvas" width="{@width}" height="{@height}" style="-webkit-user-select:none;{$border}{$fontsize}{$style}" data-value="{{{$type},{$binding}}}"><xsl:apply-templates/></canvas>
				</xsl:when>
				<xsl:when test="@type = 'button'">
					<button class="{$APPCLASS}-binding" style="-webkit-user-select:none;{$border}{$width}{$height}{$fontsize}{$style}" data-value="{{{$type},{$binding},{$value}}}"><xsl:apply-templates/></button>
				</xsl:when>
				<xsl:when test="@type = 'list'">
					<select class="{$APPCLASS}-binding" style="{$border}{$width}{$height}{$fontsize}{$style}" data-value="{{{$type},{$binding}}}">
						<xsl:apply-templates select="disk|tape|app|manifest" mode="component"/>
					</select>
				</xsl:when>
				<xsl:when test="@type = 'text'">
					<input class="{$APPCLASS}-binding" type="text" style="{$border}{$width}{$height}{$style}" data-value="{{{$type},{$binding}}}" value="{.}" autocapitalize="off" autocorrect="off"/>
				</xsl:when>
				<xsl:when test="@type = 'submit'">
					<input class="{$APPCLASS}-binding" type="submit" style="{$border}{$fontsize}{$style}" data-value="{{{$type},{$binding}}}" value="{.}"/>
				</xsl:when>
				<xsl:when test="@type = 'textarea'">
					<textarea class="{$APPCLASS}-binding" style="{$border}{$width}{$height}{$style}" data-value="{{{$type},{$binding}}}" readonly="readonly" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"> </textarea>
				</xsl:when>
				<xsl:when test="@type = 'heading'">
					<div><xsl:value-of select="."/></div>
				</xsl:when>
				<xsl:when test="@type = 'file'">
					<form class="{$APPCLASS}-binding" data-value="{{{$type},{$binding}}}">
						<fieldset class="{$CSSCLASS}-fieldset">
							<input type="file"/>
							<input type="submit" value="Mount" disabled="true"/>
						</fieldset>
					</form>
				</xsl:when>
				<xsl:when test="@type = 'key'">
					<div class="{$APPCLASS}-binding {$CSSCLASS}-{@type}" style="-webkit-user-select:none;width:100%;{$height}" data-value="{{{$type},{$binding}}}"><xsl:apply-templates/></div>
				</xsl:when>
				<xsl:when test="@type = 'led' or @type = 'rled'">
					<div class="{$APPCLASS}-binding {$CSSCLASS}-{@type}" data-value="{{{$type},{$binding},{$value}}}" style="display:inline-block;"><xsl:value-of select="."/></div>
				</xsl:when>
				<xsl:when test="@type = 'switch'">
					<div class="{$APPCLASS}-binding {$CSSCLASS}-{@type}" data-value="{{{$type},{$binding},{$value}}}" style="display:inline-block;"><xsl:value-of select="."/></div>
				</xsl:when>
				<xsl:when test="@type = 'progress'">
					<div class="{$APPCLASS}-binding {$CSSCLASS}-{@type}" style="-webkit-user-select:none;{$border}{$width}{$height}{$fontsize}{$style}" data-value="{{{$type},{$binding},{$value}}}">
						<div class="{$CSSCLASS}-{@type}-text" style="{$width}"><xsl:apply-templates/></div>
						<div class="{$CSSCLASS}-{@type}-bar"></div>
					</div>
				</xsl:when>
				<xsl:when test="@type = 'separator'">
					<hr/>
				</xsl:when>
				<xsl:when test="@type = 'container'">
					<xsl:apply-templates mode="component"/>
				</xsl:when>
				<xsl:when test="not(@type)">
					<div style="clear:both"> </div>
				</xsl:when>
				<xsl:otherwise>
					<div class="{$APPCLASS}-binding{$subClass} {$CSSCLASS}-{@type}" style="-webkit-user-select:none;{$border}{$width}{$height}{$fontsize}{$style}" data-value="{{{$type},{$binding}}}"><xsl:apply-templates/></div>
				</xsl:otherwise>
			</xsl:choose>
			<xsl:if test="@label">
				<xsl:if test="@labelpos = 'right'">
					<div class="{$CSSCLASS}-label" style="{$labelWidth}{$labelStyle}"><xsl:value-of select="@label"/></div>
				</xsl:if>
				<div style="clear:both"> </div>
			</xsl:if>
		</div>
	</xsl:template>

	<xsl:template match="disk[@ref]" mode="component">
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/disk" mode="component"/>
	</xsl:template>

	<xsl:template match="disk[not(@ref)]" mode="component">
		<xsl:variable name="desc">
			<xsl:if test="@desc">
				<xsl:text>desc:'</xsl:text><xsl:value-of select="@desc"/><xsl:text>'</xsl:text>
				<xsl:if test="@href">
					<xsl:text>,href:'</xsl:text><xsl:value-of select="@href"/><xsl:text>'</xsl:text>
				</xsl:if>
			</xsl:if>
		</xsl:variable>
		<xsl:variable name="name">
			<xsl:choose>
				<xsl:when test="@name"><xsl:value-of select="@name"/></xsl:when>
				<xsl:when test="name"><xsl:value-of select="name"/></xsl:when>
				<xsl:otherwise><xsl:value-of select="."/></xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<option value="{@path}" data-value="{{{$desc}}}"><xsl:value-of select="$name"/></option>
	</xsl:template>

	<xsl:template match="tape[@ref]" mode="component">
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/tape" mode="component"/>
	</xsl:template>

	<xsl:template match="tape[not(@ref)]" mode="component">
		<xsl:variable name="desc">
			<xsl:if test="@desc">
				<xsl:text>desc:'</xsl:text><xsl:value-of select="@desc"/><xsl:text>'</xsl:text>
				<xsl:if test="@href">
					<xsl:text>,href:'</xsl:text><xsl:value-of select="@href"/><xsl:text>'</xsl:text>
				</xsl:if>
			</xsl:if>
		</xsl:variable>
		<xsl:variable name="name">
			<xsl:choose>
				<xsl:when test="@name"><xsl:value-of select="@name"/></xsl:when>
				<xsl:when test="name"><xsl:value-of select="name"/></xsl:when>
				<xsl:otherwise><xsl:value-of select="."/></xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<option value="{@path}" data-value="{{{$desc}}}"><xsl:value-of select="$name"/></option>
	</xsl:template>

	<xsl:template match="app[@ref]" mode="component">
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/app" mode="component"/>
	</xsl:template>

	<xsl:template match="app[not(@ref)]" mode="component">
		<xsl:variable name="desc">
			<xsl:if test="@desc">
				<xsl:text>desc:'</xsl:text><xsl:value-of select="@desc"/><xsl:text>'</xsl:text>
				<xsl:if test="@href">
					<xsl:text>,href:'</xsl:text><xsl:value-of select="@href"/><xsl:text>'</xsl:text>
				</xsl:if>
			</xsl:if>
		</xsl:variable>
		<xsl:variable name="path">
			<xsl:if test="@path"><xsl:value-of select="@path"/></xsl:if>
		</xsl:variable>
		<xsl:variable name="files">
			<xsl:for-each select="file"><xsl:if test="position() = 1"><xsl:value-of select="$path"/></xsl:if><xsl:value-of select="@name"/><xsl:if test="position() != last()">;</xsl:if></xsl:for-each>
		</xsl:variable>
		<option value="{$files}" data-value="{{{$desc}}}"><xsl:value-of select="@name"/></option>
	</xsl:template>

	<xsl:template match="manifest[@ref]" mode="component">
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/manifest" mode="component">
			<xsl:with-param name="disk"><xsl:value-of select="@disk"/></xsl:with-param>
		</xsl:apply-templates>
	</xsl:template>

	<xsl:template match="manifest[not(@ref)]" mode="component">
		<xsl:param name="disk" select="''"/>
		<xsl:variable name="prefix">
			<xsl:if test="title/@prefix"><xsl:value-of select="title/@prefix"/><xsl:text>: </xsl:text></xsl:if>
		</xsl:variable>
		<xsl:for-each select="disk">
			<xsl:if test="$disk = @id or $disk = '*' or $disk = ''">
				<xsl:variable name="name">
					<xsl:choose>
						<xsl:when test="name"><xsl:value-of select="$prefix"/><xsl:value-of select="name"/></xsl:when>
						<xsl:when test="normalize-space(./text()) != ''">
							<xsl:value-of select="$prefix"/><xsl:value-of select="normalize-space(./text())"/>
						</xsl:when>
						<xsl:otherwise>
							<xsl:value-of select="../title"/><xsl:if test="../version != ''"><xsl:text> </xsl:text><xsl:value-of select="../version"/></xsl:if>
						</xsl:otherwise>
					</xsl:choose>
				</xsl:variable>
				<xsl:variable name="link">
					<xsl:if test="link">
						<xsl:text>desc:'</xsl:text><xsl:value-of select="link"/><xsl:text>'</xsl:text>
						<xsl:if test="link/@href">
							<xsl:text>,href:'</xsl:text><xsl:value-of select="link/@href"/><xsl:text>'</xsl:text>
						</xsl:if>
					</xsl:if>
				</xsl:variable>
				<xsl:if test="@href">
					<option value="{@href}" data-value="{{{$link}}}"><xsl:value-of select="$name"/></option>
				</xsl:if>
				<xsl:if test="not(@href)">
					<xsl:variable name="dir">
						<xsl:if test="@dir"><xsl:value-of select="@dir"/></xsl:if>
					</xsl:variable>
					<xsl:variable name="files">
						<xsl:for-each select="file"><xsl:if test="position() = 1"><xsl:value-of select="$dir"/></xsl:if><xsl:value-of select="@dir"/><xsl:value-of select="."/><xsl:if test="position() != last()">;</xsl:if></xsl:for-each>
					</xsl:variable>
					<option value="{$files}" data-value="{{{$link}}}"><xsl:value-of select="$name"/></option>
				</xsl:if>
			</xsl:if>
		</xsl:for-each>
	</xsl:template>

	<xsl:template match="name">
	</xsl:template>

	<xsl:template match="title">
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
		<xsl:variable name="model">
			<xsl:choose>
				<xsl:when test="@model"><xsl:value-of select="@model"/></xsl:when>
				<xsl:otherwise>8088</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="stepping">
			<xsl:choose>
				<xsl:when test="@stepping"><xsl:value-of select="@stepping"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="fpu">
			<xsl:choose>
				<xsl:when test="@fpu"><xsl:value-of select="@fpu"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="cycles">
			<xsl:choose>
				<xsl:when test="@cycles"><xsl:value-of select="@cycles"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="multiplier">
			<xsl:choose>
				<xsl:when test="@multiplier"><xsl:value-of select="@multiplier"/></xsl:when>
				<xsl:otherwise>1</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="autoStart">
			<xsl:choose>
				<xsl:when test="@autostart"><xsl:value-of select="@autostart"/></xsl:when>
				<xsl:when test="@autoStart"><xsl:value-of select="@autoStart"/></xsl:when>
				<xsl:otherwise>null</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="addrReset">
			<xsl:choose>
				<xsl:when test="@addrReset"><xsl:value-of select="@addrReset"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="csStart">
			<xsl:choose>
				<xsl:when test="@csstart"><xsl:value-of select="@csstart"/></xsl:when>
				<xsl:when test="@csStart"><xsl:value-of select="@csStart"/></xsl:when>
				<xsl:otherwise>-1</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="csInterval">
			<xsl:choose>
				<xsl:when test="@csinterval"><xsl:value-of select="@csinterval"/></xsl:when>
				<xsl:when test="@csInterval"><xsl:value-of select="@csInterval"/></xsl:when>
				<xsl:otherwise>-1</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="csStop">
			<xsl:choose>
				<xsl:when test="@csstop"><xsl:value-of select="@csstop"/></xsl:when>
				<xsl:when test="@csStop"><xsl:value-of select="@csStop"/></xsl:when>
				<xsl:otherwise>-1</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class" select="'cpu'"/>
			<xsl:with-param name="parms">,model:'<xsl:value-of select="$model"/>',stepping:'<xsl:value-of select="$stepping"/>',fpu:<xsl:value-of select="$fpu"/>,cycles:<xsl:value-of select="$cycles"/>,multiplier:<xsl:value-of select="$multiplier"/>,autoStart:<xsl:value-of select="$autoStart"/>,addrReset:<xsl:value-of select="$addrReset"/>,csStart:<xsl:value-of select="$csStart"/>,csInterval:<xsl:value-of select="$csInterval"/>,csStop:<xsl:value-of select="$csStop"/></xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="fpu[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/fpu"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="fpu[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="model">
			<xsl:choose>
				<xsl:when test="@model"><xsl:value-of select="@model"/></xsl:when>
				<xsl:otherwise>8087</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="stepping">
			<xsl:choose>
				<xsl:when test="@stepping"><xsl:value-of select="@stepping"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class" select="'fpu'"/>
			<xsl:with-param name="parms">,model:'<xsl:value-of select="$model"/>',stepping:'<xsl:value-of select="$stepping"/>'</xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="chipset[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/chipset"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="chipset[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="model">
			<xsl:choose>
				<xsl:when test="@model"><xsl:value-of select="@model"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="sw1">
			<xsl:choose>
				<xsl:when test="@sw1"><xsl:value-of select="@sw1"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="sw2">
			<xsl:choose>
				<xsl:when test="@sw2"><xsl:value-of select="@sw2"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="sound">
			<xsl:choose>
				<xsl:when test="@sound"><xsl:value-of select="@sound"/></xsl:when>
				<xsl:otherwise>true</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="scaleTimers">
			<xsl:choose>
				<xsl:when test="@scaleTimers"><xsl:value-of select="@scaleTimers"/></xsl:when>
				<xsl:when test="@scaletimers"><xsl:value-of select="@scaletimers"/></xsl:when>
				<xsl:otherwise>false</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="floppies">
			<xsl:choose>
				<xsl:when test="@floppies"><xsl:value-of select="@floppies"/></xsl:when>
				<xsl:otherwise>{}</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="monitor">
			<xsl:choose>
				<xsl:when test="@monitor"><xsl:value-of select="@monitor"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="dateRTC">
			<xsl:choose>
				<xsl:when test="@dateRTC"><xsl:value-of select="@dateRTC"/></xsl:when>
				<xsl:when test="@rtcdate"><xsl:value-of select="@rtcdate"/></xsl:when>
				<xsl:when test="@rtcDate"><xsl:value-of select="@rtcDate"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">chipset</xsl:with-param>
			<xsl:with-param name="parms">,model:'<xsl:value-of select="$model"/>',scaleTimers:<xsl:value-of select="$scaleTimers"/>,sw1:'<xsl:value-of select="$sw1"/>',sw2:'<xsl:value-of select="$sw2"/>',sound:<xsl:value-of select="$sound"/>,floppies:<xsl:value-of select="$floppies"/>,monitor:'<xsl:value-of select="$monitor"/>',dateRTC:'<xsl:value-of select="$dateRTC"/>'</xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="device[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/device">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="mount"><xsl:if test="@autoMount"><xsl:value-of select="@autoMount"/></xsl:if><xsl:if test="@automount"><xsl:value-of select="@automount"/></xsl:if></xsl:with-param>
		</xsl:apply-templates>
	</xsl:template>

	<xsl:template match="device[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:param name="mount" select="''"/>
		<xsl:variable name="type">
			<xsl:choose>
				<xsl:when test="@type"><xsl:value-of select="@type"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="baudReceive">
			<xsl:choose>
				<xsl:when test="@baudReceive"><xsl:value-of select="@baudReceive"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="baudTransmit">
			<xsl:choose>
				<xsl:when test="@baudTransmit"><xsl:value-of select="@baudTransmit"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="autoMount">
			<xsl:choose>
				<xsl:when test="$mount != ''"><xsl:value-of select="$mount"/></xsl:when>
				<xsl:when test="@automount"><xsl:value-of select="@automount"/></xsl:when>
				<xsl:otherwise><xsl:value-of select="@autoMount"/></xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">device</xsl:with-param>
			<xsl:with-param name="parms">,type:'<xsl:value-of select="$type"/>',baudReceive:<xsl:value-of select="$baudReceive"/>,baudTransmit:<xsl:value-of select="$baudTransmit"/>,autoMount:'<xsl:value-of select="$autoMount"/>'</xsl:with-param>
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
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">keyboard</xsl:with-param>
			<xsl:with-param name="parms">,model:'<xsl:value-of select="$model"/>'</xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="parallel[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/parallel"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="parallel[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="adapter">
			<xsl:choose>
				<xsl:when test="@adapter"><xsl:value-of select="@adapter"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="binding">
			<xsl:choose>
				<xsl:when test="@binding"><xsl:value-of select="@binding"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">parallel</xsl:with-param>
			<xsl:with-param name="parms">,adapter:<xsl:value-of select="$adapter"/>,binding:'<xsl:value-of select="$binding"/>'</xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="serial[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/serial"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="serial[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="adapter">
			<xsl:choose>
				<xsl:when test="@adapter"><xsl:value-of select="@adapter"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="baudReceive">
			<xsl:choose>
				<xsl:when test="@baudReceive"><xsl:value-of select="@baudReceive"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="baudTransmit">
			<xsl:choose>
				<xsl:when test="@baudTransmit"><xsl:value-of select="@baudTransmit"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="binding">
			<xsl:choose>
				<xsl:when test="@binding"><xsl:value-of select="@binding"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="charBOL">
			<xsl:choose>
				<xsl:when test="@charbol"><xsl:value-of select="@charbol"/></xsl:when>
				<xsl:when test="@charBOL"><xsl:value-of select="@charBOL"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="tabSize">
			<xsl:choose>
				<xsl:when test="@tabsize"><xsl:value-of select="@tabsize"/></xsl:when>
				<xsl:when test="@tabSize"><xsl:value-of select="@tabSize"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="upperCase">
			<xsl:choose>
				<xsl:when test="@uppercase"><xsl:value-of select="@uppercase"/></xsl:when>
				<xsl:when test="@upperCase"><xsl:value-of select="@upperCase"/></xsl:when>
				<xsl:otherwise>false</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">serial</xsl:with-param>
			<xsl:with-param name="parms">,adapter:<xsl:value-of select="$adapter"/>,baudReceive:<xsl:value-of select="$baudReceive"/>,baudTransmit:<xsl:value-of select="$baudTransmit"/>,binding:'<xsl:value-of select="$binding"/>',tabSize:<xsl:value-of select="$tabSize"/>,charBOL:<xsl:value-of select="$charBOL"/>,upperCase:<xsl:value-of select="$upperCase"/></xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="testctl[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/testctl"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="testctl[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="binding">
			<xsl:choose>
				<xsl:when test="@binding"><xsl:value-of select="@binding"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="tests">
			<xsl:choose>
				<xsl:when test="@tests"><xsl:value-of select="@tests"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">testctl</xsl:with-param>
			<xsl:with-param name="parms">,binding:'<xsl:value-of select="$binding"/>',tests:'<xsl:value-of select="$tests"/>'</xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="mouse[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/mouse"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="mouse[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="adapter">
			<xsl:choose>
				<xsl:when test="@adapter"><xsl:value-of select="@adapter"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="binding">
			<xsl:choose>
				<xsl:when test="@binding"><xsl:value-of select="@binding"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="type">
			<xsl:choose>
				<xsl:when test="@type"><xsl:value-of select="@type"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="scaleMouse">
			<xsl:choose>
				<xsl:when test="@scaleMouse"><xsl:value-of select="@scaleMouse"/></xsl:when>
				<xsl:otherwise>0.5</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="serial">
			<xsl:choose>
				<xsl:when test="@serial"><xsl:value-of select="@serial"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">mouse</xsl:with-param>
			<xsl:with-param name="parms">,adapter:<xsl:value-of select="$adapter"/>,binding:'<xsl:value-of select="$binding"/>',type:'<xsl:value-of select="$type"/>',scaleMouse:<xsl:value-of select="$scaleMouse"/>,serial:'<xsl:value-of select="$serial"/>'</xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="fdc[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/fdc">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="mount"><xsl:if test="@autoMount"><xsl:value-of select="@autoMount"/></xsl:if><xsl:if test="@automount"><xsl:value-of select="@automount"/></xsl:if></xsl:with-param>
		</xsl:apply-templates>
	</xsl:template>

	<xsl:template match="fdc[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:param name="mount" select="''"/>
		<xsl:variable name="autoMount">
			<xsl:choose>
				<xsl:when test="$mount != ''"><xsl:value-of select="$mount"/></xsl:when>
				<xsl:when test="@automount"><xsl:value-of select="@automount"/></xsl:when>
				<xsl:otherwise><xsl:value-of select="@autoMount"/></xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="diskettes">
			<xsl:choose>
				<xsl:when test="@diskettes"><xsl:value-of select="@diskettes"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="drives">
			<xsl:choose>
				<xsl:when test="@drives"><xsl:value-of select="@drives"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="server">
			<xsl:choose>
				<xsl:when test="@server"><xsl:value-of select="@server"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="sortBy">
			<xsl:choose>
				<xsl:when test="@sortBy"><xsl:value-of select="@sortBy"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">fdc</xsl:with-param>
			<xsl:with-param name="parms">,autoMount:'<xsl:value-of select="$autoMount"/>',diskettes:'<xsl:value-of select="$diskettes"/>',drives:'<xsl:value-of select="$drives"/>',server:'<xsl:value-of select="$server"/>',sortBy:'<xsl:value-of select="$sortBy"/>'</xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="hdc[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/hdc"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="hdc[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="drives">
			<xsl:choose>
				<xsl:when test="@drives"><xsl:value-of select="@drives"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="type">
			<xsl:choose>
				<xsl:when test="@type"><xsl:value-of select="@type"/></xsl:when>
				<xsl:otherwise>XT</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">hdc</xsl:with-param>
			<xsl:with-param name="parms">,drives:'<xsl:value-of select="$drives"/>',type:'<xsl:value-of select="$type"/>'</xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="rom[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/rom"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="rom[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="addr">
			<xsl:choose>
				<xsl:when test="@addr"><xsl:value-of select="@addr"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="size">
			<xsl:choose>
				<xsl:when test="@size"><xsl:value-of select="@size"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="alias">
			<xsl:choose>
				<xsl:when test="@alias"><xsl:value-of select="@alias"/></xsl:when>
				<xsl:otherwise>null</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="file">
			<xsl:choose>
				<xsl:when test="@file"><xsl:value-of select="@file"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="notify">
			<xsl:choose>
				<xsl:when test="@notify"><xsl:value-of select="@notify"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">rom</xsl:with-param>
			<xsl:with-param name="parms">,addr:<xsl:value-of select="$addr"/>,size:<xsl:value-of select="$size"/>,alias:<xsl:value-of select="$alias"/>,file:'<xsl:value-of select="$file"/>',notify:'<xsl:value-of select="$notify"/>'</xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="ram[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/ram"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="ram[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="addr">
			<xsl:choose>
				<xsl:when test="@addr"><xsl:value-of select="@addr"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="size">
			<xsl:choose>
				<xsl:when test="@size"><xsl:value-of select="@size"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="file">
			<xsl:choose>
				<xsl:when test="@file"><xsl:value-of select="@file"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="load">
			<xsl:choose>
				<xsl:when test="@load"><xsl:value-of select="@load"/></xsl:when>
				<xsl:otherwise>null</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="exec">
			<xsl:choose>
				<xsl:when test="@exec"><xsl:value-of select="@exec"/></xsl:when>
				<xsl:otherwise>null</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="test">
			<xsl:choose>
				<xsl:when test="@test"><xsl:value-of select="@test"/></xsl:when>
				<xsl:otherwise>true</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">ram</xsl:with-param>
			<xsl:with-param name="parms">,addr:<xsl:value-of select="$addr"/>,size:<xsl:value-of select="$size"/>,file:'<xsl:value-of select="$file"/>',load:<xsl:value-of select="$load"/>,exec:<xsl:value-of select="$exec"/>,test:<xsl:value-of select="$test"/></xsl:with-param>
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
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="mode">
			<xsl:choose>
				<xsl:when test="@mode"><xsl:value-of select="@mode"/></xsl:when>
				<xsl:otherwise>null</xsl:otherwise>
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
		<xsl:variable name="screenRotate">
			<xsl:choose>
				<xsl:when test="@screenRotate"><xsl:value-of select="@screenRotate"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="bufferAddr">
			<xsl:choose>
				<xsl:when test="@bufferAddr"><xsl:value-of select="@bufferAddr"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="bufferRAM">
			<xsl:choose>
				<xsl:when test="@bufferRAM"><xsl:value-of select="@bufferRAM"/></xsl:when>
				<xsl:otherwise>false</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="bufferFormat">
			<xsl:choose>
				<xsl:when test="@bufferFormat"><xsl:value-of select="@bufferFormat"/></xsl:when>
				<xsl:otherwise>1bpp</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="bufferCols">
			<xsl:choose>
				<xsl:when test="@bufferCols"><xsl:value-of select="@bufferCols"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="bufferRows">
			<xsl:choose>
				<xsl:when test="@bufferRows"><xsl:value-of select="@bufferRows"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="bufferBits">
			<xsl:choose>
				<xsl:when test="@bufferBits"><xsl:value-of select="@bufferBits"/></xsl:when>
				<xsl:otherwise>1</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="bufferLeft">
			<xsl:choose>
				<xsl:when test="@bufferLeft"><xsl:value-of select="@bufferLeft"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="bufferRotate">
			<xsl:choose>
				<xsl:when test="@bufferRotate"><xsl:value-of select="@bufferRotate"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="memory">
			<xsl:choose>
				<xsl:when test="@memory"><xsl:value-of select="@memory"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="switches">
			<xsl:choose>
				<xsl:when test="@switches"><xsl:value-of select="@switches"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="scale">
			<xsl:choose>
				<xsl:when test="@scale"><xsl:value-of select="@scale"/></xsl:when>
				<xsl:otherwise>false</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="cellWidth">
			<xsl:choose>
				<xsl:when test="@cellWidth"><xsl:value-of select="@cellWidth"/></xsl:when>
				<xsl:otherwise>1</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="cellHeight">
			<xsl:choose>
				<xsl:when test="@cellHeight"><xsl:value-of select="@cellHeight"/></xsl:when>
				<xsl:otherwise>1</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="charCols">
			<xsl:choose>
				<xsl:when test="@cols"><xsl:value-of select="@cols"/></xsl:when>
				<xsl:when test="@charCols"><xsl:value-of select="@charCols"/></xsl:when>
				<xsl:otherwise>80</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="charRows">
			<xsl:choose>
				<xsl:when test="@rows"><xsl:value-of select="@rows"/></xsl:when>
				<xsl:when test="@charRows"><xsl:value-of select="@charRows"/></xsl:when>
				<xsl:otherwise>25</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="fontROM">
			<xsl:choose>
				<xsl:when test="@charset"><xsl:value-of select="@charset"/></xsl:when>
				<xsl:when test="@fontrom"><xsl:value-of select="@fontrom"/></xsl:when>
				<xsl:when test="@fontROM"><xsl:value-of select="@fontROM"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="fontColor">
			<xsl:choose>
				<xsl:when test="@fontColor"><xsl:value-of select="@fontColor"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="touchScreen">
			<xsl:choose>
				<xsl:when test="@touchscreen"><xsl:value-of select="@touchscreen"/></xsl:when>
				<xsl:when test="@touchScreen"><xsl:value-of select="@touchScreen"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="autoLock">
			<xsl:choose>
				<xsl:when test="@autolock"><xsl:value-of select="@autolock"/></xsl:when>
				<xsl:when test="@autoLock"><xsl:value-of select="@autoLock"/></xsl:when>
				<xsl:otherwise>false</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="aspectRatio">
			<xsl:choose>
				<xsl:when test="@aspect"><xsl:value-of select="@aspect"/></xsl:when>
				<xsl:when test="@aspectRatio"><xsl:value-of select="@aspectRatio"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="smoothing">
			<xsl:choose>
				<xsl:when test="@smoothing"><xsl:value-of select="@smoothing"/></xsl:when>
				<xsl:otherwise>null</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="interruptRate">
			<xsl:choose>
				<xsl:when test="@interruptRate"><xsl:value-of select="@interruptRate"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="refreshRate">
			<xsl:choose>
				<xsl:when test="@refreshRate"><xsl:value-of select="@refreshRate"/></xsl:when>
				<xsl:otherwise>60</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="flicker">
			<xsl:choose>
				<xsl:when test="@flicker"><xsl:value-of select="@flicker"/></xsl:when>
				<xsl:otherwise>0.5</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">video</xsl:with-param>
			<xsl:with-param name="screenWidth" select="$screenWidth"/>
			<xsl:with-param name="screenHeight" select="$screenHeight"/>
			<xsl:with-param name="parms">,model:'<xsl:value-of select="$model"/>',mode:<xsl:value-of select="$mode"/>,screenWidth:<xsl:value-of select="$screenWidth"/>,screenHeight:<xsl:value-of select="$screenHeight"/>,screenColor:'<xsl:value-of select="$screenColor"/>',screenRotate:<xsl:value-of select="$screenRotate"/>,bufferAddr:<xsl:value-of select="$bufferAddr"/>,bufferRAM:<xsl:value-of select="$bufferRAM"/>,bufferFormat:'<xsl:value-of select="$bufferFormat"/>',bufferCols:<xsl:value-of select="$bufferCols"/>,bufferRows:<xsl:value-of select="$bufferRows"/>,bufferBits:<xsl:value-of select="$bufferBits"/>,bufferLeft:<xsl:value-of select="$bufferLeft"/>,bufferRotate:<xsl:value-of select="$bufferRotate"/>,memory:<xsl:value-of select="$memory"/>,switches:'<xsl:value-of select="$switches"/>',scale:<xsl:value-of select="$scale"/>,cellWidth:<xsl:value-of select="$cellWidth"/>,cellHeight:<xsl:value-of select="$cellHeight"/>,charCols:<xsl:value-of select="$charCols"/>,charRows:<xsl:value-of select="$charRows"/>,fontROM:'<xsl:value-of select="$fontROM"/>',fontColor:'<xsl:value-of select="$fontColor"/>',touchScreen:'<xsl:value-of select="$touchScreen"/>',autoLock:<xsl:value-of select="$autoLock"/>,aspectRatio:<xsl:value-of select="$aspectRatio"/>,smoothing:<xsl:value-of select="$smoothing"/>,interruptRate:<xsl:value-of select="$interruptRate"/>,refreshRate:<xsl:value-of select="$refreshRate"/>,flicker:<xsl:value-of select="$flicker"/></xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="debugger[@ref]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/debugger"><xsl:with-param name="machine" select="$machine"/></xsl:apply-templates>
	</xsl:template>

	<xsl:template match="debugger[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:variable name="base">
			<xsl:choose>
				<xsl:when test="@base"><xsl:value-of select="@base"/></xsl:when>
				<xsl:otherwise>16</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="commands">
			<xsl:choose>
				<xsl:when test="@commands"><xsl:value-of select="@commands"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="messages">
			<xsl:choose>
				<xsl:when test="@messages"><xsl:value-of select="@messages"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">debugger</xsl:with-param>
			<xsl:with-param name="parms">,base:<xsl:value-of select="$base"/>,commands:'<xsl:value-of select="$commands"/>',messages:'<xsl:value-of select="$messages"/>'</xsl:with-param>
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
		<xsl:param name="machineState" select="''"/>
		<xsl:variable name="componentFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
		<xsl:apply-templates select="document($componentFile)/computer">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="machineState" select="$machineState"/>
		</xsl:apply-templates>
	</xsl:template>

	<xsl:template match="computer[not(@ref)]">
		<xsl:param name="machine" select="''"/>
		<xsl:param name="machineState" select="''"/>
		<xsl:variable name="autoPower">
			<xsl:choose>
				<xsl:when test="@autopower"><xsl:value-of select="@autopower"/></xsl:when>
				<xsl:when test="@autoPower"><xsl:value-of select="@autoPower"/></xsl:when>
				<xsl:otherwise>true</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="busWidth">
			<xsl:choose>
				<xsl:when test="@buswidth"><xsl:value-of select="@buswidth"/></xsl:when>
				<xsl:when test="@busWidth"><xsl:value-of select="@busWidth"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="resume">
			<xsl:choose>
				<xsl:when test="@resume and $machineState = ''"><xsl:value-of select="@resume"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<xsl:variable name="state">
			<xsl:choose>
				<xsl:when test="$machineState != ''"><xsl:value-of select="$machineState"/></xsl:when>
				<xsl:when test="@state"><xsl:value-of select="@state"/></xsl:when>
				<xsl:otherwise/>
			</xsl:choose>
		</xsl:variable>
		<xsl:call-template name="component">
			<xsl:with-param name="machine" select="$machine"/>
			<xsl:with-param name="class">computer</xsl:with-param>
			<xsl:with-param name="parms">,autoPower:<xsl:value-of select="$autoPower"/>,busWidth:<xsl:value-of select="$busWidth"/>,resume:'<xsl:value-of select="$resume"/>',state:'<xsl:value-of select="$state"/>'</xsl:with-param>
		</xsl:call-template>
	</xsl:template>

	<xsl:template match="br">
		<br/>
	</xsl:template>

	<xsl:template match="comment">
		<xsl:comment><xsl:apply-templates/></xsl:comment>
	</xsl:template>

	<xsl:template match="heading"></xsl:template>
	<xsl:template match="intro"></xsl:template>
	<xsl:template match="outro"></xsl:template>

	<xsl:template match="heading" mode="doc">
		<h2><xsl:apply-templates mode="doc"/></h2>
	</xsl:template>

	<xsl:template match="intro|outro" mode="doc">
		<p><xsl:apply-templates mode="doc"/></p>
	</xsl:template>

	<xsl:template name="displayIntro">
		<xsl:apply-templates select="heading" mode="doc"/>
		<xsl:apply-templates select="intro" mode="doc"/>
	</xsl:template>

	<xsl:template name="displayOutro">
		<xsl:apply-templates select="outro" mode="doc"/>
	</xsl:template>

	<xsl:template name="displayAttr">
		<xsl:for-each select="@*"><xsl:value-of select="concat(' ', name(), '=&quot;', ., '&quot;')"/></xsl:for-each>
	</xsl:template>

	<xsl:template name="displayXML">
		<xsl:param name="tag"/>
		<xsl:param name="indent" select="''"/>
		<xsl:choose>
			<xsl:when test="@ref and $tag != 'panel'">
				<xsl:variable name="refFile"><xsl:value-of select="$rootDir"/><xsl:value-of select="@ref"/></xsl:variable>
				<xsl:apply-templates mode="display" select="document($refFile)"><xsl:with-param name="indent" select="'&#x9;'"/></xsl:apply-templates>
			</xsl:when>
			<xsl:when test="$tag = 'control' and contains(@class,'soft-keyboard')"><xsl:value-of select="$indent"/>&lt;!-- <xsl:value-of select="@class"/> --&gt;</xsl:when>
			<xsl:otherwise>&lt;<xsl:value-of select="$tag"/><xsl:call-template name="displayAttr"/>&gt;<xsl:apply-templates mode="display"/><xsl:value-of select="$indent"/>&lt;/<xsl:value-of select="$tag"/>&gt;</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="displayMachine">
		<pre>&lt;machine<xsl:call-template name="displayAttr"/>&gt;<xsl:apply-templates mode="display"/>&lt;/machine&gt;</pre>
	</xsl:template>

	<xsl:template match="*" mode="display"><xsl:param name="indent" select="''"/><xsl:call-template name="displayXML"><xsl:with-param name="tag" select="name(.)"/><xsl:with-param name="indent" select="$indent"/></xsl:call-template></xsl:template>

</xsl:stylesheet>
