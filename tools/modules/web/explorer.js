/**
 * @fileoverview PCjs Explorer UI
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * TODO: Convert this code to a class and load it as a "module" instead of as a "script".
 */

/**
 * pcjsGetURLVars()
 *
 * Added this nifty comment block (davidw would be proud)
 */
function pcjsGetURLVars()
{
    var vars = {}, parts = window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

/**
 * pcjsOnClick(element, event)
 *
 * Added this nifty comment block (davidw would be proud)
 */
function pcjsOnClick(element, event)
{
    element.href += window.location.search;
}

/**
 * pcjsExplorerClick(element, event)
 *
 * Added this nifty comment block (davidw would be proud)
 */
function pcjsExplorerClick(element, event)
{
    if (event) event.stopPropagation();
    if (element.classList.contains("pcjs-explorer-open")) {
        element.classList.add("pcjs-explorer-closed");
        element.classList.remove("pcjs-explorer-open");
    } else if (element.classList.contains("pcjs-explorer-closed")) {
        element.classList.add("pcjs-explorer-open");
        element.classList.remove("pcjs-explorer-closed");
    }
}

/**
 * pcjsExplorerExpand(path, altPath, prefix)
 *
 * Added this nifty comment block (davidw would be proud)
 */
function pcjsExplorerExpand(path, altPath, prefix)
{
    var expansions = 0;
    if (!path && altPath) {
        path = altPath.replace(/^\/[^/]*\/([^/]*)\/.*$/, "/$1/");
    }
    if (path) {
        var element;
        if (prefix) path = prefix + path;
        var id = path.substr(1).replace(/\//g, '-').replace(/-$/, '');
        if (id == "documents") id = "library";
        do {
            element = document.getElementById(id);
            if (element) break;
            var idNew = id.replace(/-[^-]+$/, '');
            if (idNew == id) break;
            id = idNew;
        } while (true);
        if (element) {
            do {
                if (element.classList.contains("pcjs-explorer-item")) {
                    element.classList.add("pcjs-explorer-selected");
                } else if (element.classList.contains("pcjs-explorer-closed")) {
                    element.classList.add("pcjs-explorer-open");
                    element.classList.remove("pcjs-explorer-closed");
                }
                element = element.parentElement;
                expansions++;
            } while (element);
        }
    }
    return expansions;
}

/**
 * pcjsExplorerExpandAll(element, event, fExpand)
 *
 * Added this nifty comment block (davidw would be proud)
 */
function pcjsExplorerExpandAll(element, event, fExpand)
{
    if (event) event.preventDefault();
    var elements = document.querySelectorAll(fExpand ? ".pcjs-explorer-closed" : ".pcjs-explorer-open");
    elements.forEach((element) => { pcjsExplorerClick(element); });
}

/**
 * pcjsExplorerSurprise()
 *
 * Added this nifty comment block (davidw would be proud)
 */
function pcjsExplorerSurprise()
{
    var elements = document.querySelectorAll(".pcjs-explorer-item");
    var element = elements && elements[Math.random() * elements.length | 0];
    if (element && element.children) window.location.href = element.children[0].href;
}

/**
 * pcjsExplorerView(element, event)
 *
 * Added this nifty comment block (davidw would be proud)
 */
function pcjsExplorerView(element, event)
{
    event.preventDefault();
    var target = document.getElementById("pcjs-explorer-menu");
    if (target) {
        var yOffset = -48;
        var y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

/**
 * pcjsExplorerInit()
 *
 * Added this nifty comment block (davidw would be proud)
 */
function pcjsExplorerInit()
{
    let path = window.location.pathname;
    pcjsExplorerExpand(path + window.location.hash.substr(1));
    pcjsExplorerExpand(pcjsGetURLVars()['software'], path, "/software");
    if (path.indexOf("/machines") < 0) {
        if (path == '/' || path.indexOf("/pcx86") >= 0) pcjsExplorerExpand("/machines/pcx86/ibm");
    }
    if (path.indexOf("/software") < 0) {
        if (path == '/' || path.indexOf("/pcx86") >= 0) pcjsExplorerExpand("/software/pcx86");
    }
}

pcjsExplorerInit();
