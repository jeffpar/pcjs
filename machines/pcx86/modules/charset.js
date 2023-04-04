/**
 * @fileoverview Character set support
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/**
 * @class CharSet
 */
export default class CharSet {

    static CP437 = [
        " ",    "☺",    "☻",    "♥",    "♦",    "♣",    "♠",    "•",    "◘",    "○",    "◙",    "♂",    "♀",    "♪",    "♫",    "☼",
        "►",    "◄",    "↕",    "‼",    "¶",    "§",    "▬",    "↨",    "↑",    "↓",    "→",    "←",    "∟",    "↔",    "▲",    "▼",
        " ",    "!",    "\"",   "#",    "$",    "%",    "&",    "'",    "(",    ")",    "*",    "+",    ",",    "-",    ".",    "/",
        "0",    "1",    "2",    "3",    "4",    "5",    "6",    "7",    "8",    "9",    ":",    ";",    "<",    "=",    ">",    "?",
        "@",    "A",    "B",    "C",    "D",    "E",    "F",    "G",    "H",    "I",    "J",    "K",    "L",    "M",    "N",    "O",
        "P",    "Q",    "R",    "S",    "T",    "U",    "V",    "W",    "X",    "Y",    "Z",    "[",    "\\",   "]",    "^",    "_",
        "`",    "a",    "b",    "c",    "d",    "e",    "f",    "g",    "h",    "i",    "j",    "k",    "l",    "m",    "n",    "o",
        "p",    "q",    "r",    "s",    "t",    "u",    "v",    "w",    "x",    "y",    "z",    "{",    "|",    "}",    "~",    "⌂",
        "Ç",    "ü",    "é",    "â",    "ä",    "à",    "å",    "ç",    "ê",    "ë",    "è",    "ï",    "î",    "ì",    "Ä",    "Å",
        "É",    "æ",    "Æ",    "ô",    "ö",    "ò",    "û",    "ù",    "ÿ",    "Ö",    "Ü",    "¢",    "£",    "¥",    "₧",    "ƒ",
        "á",    "í",    "ó",    "ú",    "ñ",    "Ñ",    "ª",    "º",    "¿",    "⌐",    "¬",    "½",    "¼",    "¡",    "«",    "»",
        "░",    "▒",    "▓",    "│",    "┤",    "╡",    "╢",    "╖",    "╕",    "╣",    "║",    "╗",    "╝",    "╜",    "╛",    "┐",
        "└",    "┴",    "┬",    "├",    "─",    "┼",    "╞",    "╟",    "╚",    "╔",    "╩",    "╦",    "╠",    "═",    "╬",    "╧",
        "╨",    "╤",    "╥",    "╙",    "╘",    "╒",    "╓",    "╫",    "╪",    "┘",    "┌",    "█",    "▄",    "▌",    "▐",    "▀",
        "α",    "ß",    "Γ",    "π",    "Σ",    "σ",    "µ",    "τ",    "Φ",    "Θ",    "Ω",    "δ",    "∞",    "φ",    "ε",    "∩",
        "≡",    "±",    "≥",    "≤",    "⌠",    "⌡",    "÷",    "≈",    "°",    "•",    "·",    "√",    "ⁿ",    "²",    "■",    " "
    ];

    /**
     * fromCP437(data, controlChars)
     *
     * @param {string|Buffer} data
     * @param {boolean} [controlChars] (true to include control characters)
     * @return {string}
     */
    static fromCP437(data, controlChars = false)
    {
        let u = "";
        for (let i = 0; i < data.length; i++) {
            let c = typeof data == "string"? data.charCodeAt(i) : data.readUint8(i);
            if (c < CharSet.CP437.length && (c >= 32 || controlChars)) {
                u += CharSet.CP437[c];
            } else {
                u += String.fromCharCode(c);
            }
        }
        return u;
    }

    /**
     * toCP437(u)
     *
     * @param {string} u
     * @return {string}
     */
    static toCP437(u)
    {
        let s = "";
        for (let i = 0; i < u.length; i++) {
            let c = CharSet.CP437.indexOf(u[i]);
            if (c > 0) {
                s += String.fromCharCode(c);
            } else {
                s += u[i];
            }
        }
        return s;
    }

    /**
     * isCP437(c)
     *
     * @param {string} c
     * @return {boolean} (true if UTF-8 character exists in CP437 character set)
     */
    static isCP437(c)
    {
        return CharSet.CP437.indexOf(c) >= 0;
    }
}
