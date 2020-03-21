---
layout: post
title: "Node + Express != Safari"
date: 2014-04-14 11:00:00
category: Browsers
permalink: /blog/2014/04/14/
---

There's something very odd going on with between Node+Express and Safari, resulting in blank web pages.
Don't believe me?  Just ask [Google](https://www.google.com/#q=node+express+safari+blank+page).

[{{ site.domain }}]({{ site.url }}/) contains a lot of XML files that are rendered as web pages using XML
stylesheets.  And occasionally Safari -- and ONLY Safari -- will render those XML files as blank pages.

For example, here's the
[machine.xml](/configs/pcx86/xml/machine/5150/mda/64kb/machine.xml) file that's also embedded on the
[{{ site.domain }}]({{ site.url }}/) home page.

When Safari fetched that XML file from an Apache web server (what I used before switching to Node),
the request would look like:

	Accept:         text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
	Cache-Control:  max-age=0
	User-Agent:     Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/537.75.14
	
and the response would look like:

	Date:           Mon, 14 Apr 2014 22:11:20 GMT
	Last-Modified:  Sun, 13 Apr 2014 01:59:06 GMT
	Server:         Apache/2.2.26 (Unix) DAV/2 PHP/5.4.24 mod_ssl/2.2.26 OpenSSL/0.9.8y
	Etag:           "37a10b3-492-4f6e2e96b2e80"
	Content-Type:   text/xml
	Connection:     Keep-Alive
	Accept-Ranges:  bytes
	Keep-Alive:     timeout=5, max=100
	Content-Length: 1170
	
with a status code of 200 ("OK").  And no matter how many times I hit Safari's Reload button, the response was the same.

Now with Node+Express, the same exact request would look like:

	Accept:         text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
	User-Agent:     Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/537.75.14
	
with a response of:

	Date:           Mon, 14 Apr 2014 22:16:42 GMT
	Etag:           "1170-1397354346000"
	Last-Modified:  Sun, 13 Apr 2014 01:59:06 GMT
	X-Powered-By:   Express
	Content-Type:   application/xml
	Cache-Control:  public, max-age=0
	Connection:     keep-alive
	Accept-Ranges:  bytes
	Content-Length: 1170
	
HOWEVER, as soon as I used Safari's Back button to return to the home page, and then pressed the Forward button to return to
the XML file, the XML request changed to:

	Accept:         text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
	Cache-Control:  max-age=0
	If-None-Match:  "1170-1397354346000"
	If-Modified-Since: Sun, 13 Apr 2014 01:59:06 GMT
	User-Agent:     Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/537.75.14
	
with a response of 304 ("Not Modified") and the following response headers:

	Date:           Mon, 14 Apr 2014 22:18:26 GMT
	Cache-Control:  public, max-age=0
	Etag:           "1170-1397354346000"
	Last-Modified:  Sun, 13 Apr 2014 01:59:06 GMT
	Connection:     keep-alive
	Accept-Ranges:  bytes
	X-Powered-By:   Express
	
And here's where the "blank page" problem occurs: pressing Safari's Reload button.  Again, the request looks the same as before,
and the response is still 304 ("Not Modified"), but the page is blank, and the response now looks like:

	Date:           Mon, 14 Apr 2014 22:21:15 GMT
	Cache-Control:  public, max-age=0
	Last-Modified:  Sun, 13 Apr 2014 01:59:06 GMT
	Connection:     keep-alive
	Accept-Ranges:  bytes
	X-Powered-By:   Express
	Etag:           "1170-1397354346000"

and no matter how many times I press Reload, the response is the same (except for an updated *Date*), and the page is still blank.

So, here's the kludge I've added to my Express server code, to prevent Safari from displaying blank pages for those XML files:
 
{% highlight javascript linenos %}
    /*
     * The Safari "blank page" problem continues to plague us.  Our first work-around was for directory
     * "index.html" documents, which we resolved by always sending the document ourselves, along with an
     * "ok" (200) response, instead of letting next() handle it, which would result in a "not modified"
     * (304) response.
     * 
     * However, the problem also extends to any XML files that we serve to an initial Safari request
     * (eg, the machine.xml and manifest.xml files that we style as web pages).  Safari includes
     * "Cache-Control max-age=0" in the request, and if the response is "Cache-Control public, max-age=0"
     * along with a 304 response code, Safari may once again display a blank page.
     * 
     * This problem appears limited to the initial resource request for a particular URL.  When these XML
     * files are requested by Safari while loading another web page, Safari's caching logic is different
     * (eg, it doesn't include the same "Cache-Control" setting).
     */
    if (sBaseName == "machine.xml" || sBaseName == "manifest.xml") {
        var sAgent = req.headers['user-agent'];
        if (sAgent && sAgent.indexOf("Safari/") >= 0 && sAgent.indexOf("Chrome/") < 0 && sAgent.indexOf("OPR/") < 0) {
            var sCacheControl = req.headers['cache-control'];
            if (sCacheControl && sCacheControl.indexOf("max-age=0") >= 0) {
                fs.readFile(sPath, {encoding: "utf8"}, function doneReadFile(err, sData) {
                    if (err) {
                        next();     // alternatively: res.status(404).send("Cannot GET " + req.path);
                    } else {
                        /*
                         * HACK: Express may still modify our response, turning our 200 status code into a 304
                         * and adding an Etag, unless we ALSO change the req.method from "GET" to something else.
                         * Supposedly, we could also use app.disable('etag'), but I'm not sure that would prevent
                         * Express from changing the status code, and I'm tired of testing work-arounds for this
                         * irritating behavior in Safari.
                         */
                        req.method = "NONE";
                        res.set("Content-Type", "application/xml");
                        res.status(200).send(sData);
                    }
                });
                return;
            }
        }
    }
{% endhighlight %}
    
I should add that this problem wasn't limited to XML files.  It's a problem for the first resource requested by
Safari for any URL on the site (eg, URLs that default to "index.html" files).

I'm also rather surprised that no one yet seems to have figured out exactly what's going on here between Node+Express
and Safari. Or maybe they have, and I haven't been keeping my Node.js config up-to-date.  I've tried to avoid changing
too many variables.

Lots of people have run into this problem.  For example, on
[StackOverflow](http://stackoverflow.com/questions/18811286/nodejs-express-cache-and-304-status-code), someone
concluded that the [node-fresh](https://github.com/visionmedia/node-fresh) module should be changed.  And for a while,
it was changed, until the change was [reverted](https://github.com/visionmedia/node-fresh/issues/8) -- along with a
lengthy discussion about why the change was wrong and that this was really a bug in Safari.

This "blank page" behavior may well be a bug in Safari, but that doesn't mean Express server components can't
or shouldn't provide a work-around for that behavior in the meantime.  It also seems that some people who decided
this was a bug in Safari did not actually reproduce the bug themselves.

I don't know the right answer, but I do know that the current situation adversely affects users of other Node-powered
websites, who will probably get blank pages when they shouldn't, and other developers, who must all discover/debug/work-around
this problem on their own.
