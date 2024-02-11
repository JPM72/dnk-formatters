import _ from 'lodash';
import { OrdinalSuffix } from './util';
const Names = {
    Day: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ],
    Month: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
};
const getWeekNumber = (date) => {
    const startDate = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(Math.floor((date.getTime() - startDate.getTime()) / 86400000) / 7);
};
const pad = (s, n = 2) => _.padStart(s, n, '0');
const formats = {
    /** ISO Date format */
    Z: function (date) { return date.toISOString(); },
    /** A textual representation of a day */
    D: function (date, chars = 3) { return Names.Day[date.getDay()].slice(0, chars === 0 ? undefined : chars); },
    /** A full textual representation of a month */
    F: function (date, chars) { return Names.Month[date.getMonth()].slice(0, chars); },
    /** Hours, 2 digits with leading zeros */
    G: function (date) { return pad((date.getHours() % 12) + 1); },
    /** Hours (24 hours) */
    H: function (date) { return pad(date.getHours()); },
    /** AM/PM */
    K: function (date) { return ['AM', 'PM'][+(date.getHours() > 11)]; },
    /** A short textual representation of a month, Jan through Dec */
    M: function (date) { return formats.F(date, 3); },
    /** Seconds, 2 digits */
    S: function (date) { return pad(date.getSeconds()); },
    /** The number of seconds since the Unix Epoch */
    U: function (date) { return date.getTime() / 1000; },
    /** Week number */
    W: function (date) { return getWeekNumber(date); },
    /** A full numeric representation of a year, 4 digits */
    Y: function (date) { return pad(date.getFullYear(), 4); },
    /** Day of the month, 2 digits with leading zeros */
    d: function (date) { return pad(date.getDate()); },
    /** Hours, 1 to 12 */
    h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
    /** Minutes */
    i: function (date) { return pad(date.getMinutes()); },
    /** Day of the month without leading zeros	 */
    j: function (date) { return date.getDate(); },
    /** A full textual representation of the day of the week */
    l: function (date) { return formats.D(date, 0); },
    /** Numeric representation of a month, with leading zero */
    m: function (date) { return pad(date.getMonth() + 1); },
    /** Numeric representation of a month, without leading zeros */
    n: function (date) { return date.getMonth() + 1; },
    /** Seconds */
    s: function (date) { return date.getSeconds(); },
    /** Unix epoch */
    u: function (date) { return date.getTime(); },
    /** Numeric representation of the day of the week, 0 (for Sunday) through 6 (for Saturday) */
    w: function (date) { return date.getDay(); },
    /** A two digit representation of a year */
    y: function (date) { return String(date.getFullYear()).substring(2); },
    /** Day of the month without leading zeros and ordinal suffix */
    J: function (date) { const d = date.getDate(); return `${d}${OrdinalSuffix(d)}`; },
    get yyyy() { return this.Y; },
    get mm() { return this.m; },
    get dd() { return this.d; },
};
const formatTokens = _(formats).keys().sortBy(s => s.length).reverse().value();
const formatRegExp = _(formatTokens).chain().map(s => `(${s})`).join('|').thru(s => new RegExp(s, 'g')).value();
const splitRegex = /(\-|\:|\/|\s)/;
const splitDateString = str => _(str).split(splitRegex).map(s => _.split(s, formatRegExp)).flatten().filter().value();
/**
 * | Token | Description                                                                            |
 * |-------|----------------------------------------------------------------------------------------|
 * | Z     | ISO Date format                                                                        |
 * | D     | A textual representation of a day                                                      |
 * | F     | A full textual representation of a month                                               |
 * | G     | Hours, 2 digits with leading zeros                                                     |
 * | H     | Hours (24 hours)                                                                       |
 * | K     | AM/PM                                                                                  |
 * | M     | A short textual representation of a month, Jan through Dec                             |
 * | S     | Seconds, 2 digits                                                                      |
 * | U     | The number of seconds since the Unix Epoch                                             |
 * | W     | Week number                                                                            |
 * | Y     | A full numeric representation of a year, 4 digits                                      |
 * | d     | Day of the month, 2 digits with leading zeros                                          |
 * | h     | Hours, 1 to 12                                                                         |
 * | i     | Minutes                                                                                |
 * | j     | Day of the month without leading zeros                                                 |
 * | l     | A full textual representation of the day of the week                                   |
 * | m     | Numeric representation of a month, with leading zero                                   |
 * | n     | Numeric representation of a month, without leading zeros                               |
 * | s     | Seconds                                                                                |
 * | u     | Unix epoch                                                                             |
 * | w     | Numeric representation of the day of the week, 0 (for Sunday) through 6 (for Saturday) |
 * | y     | A two digit representation of a year                                                   |
 * | J     | Day of the month without leading zeros and ordinal suffix                              |
 */
export function dateFormatter(date, formatString) {
    if (!formatString)
        return _.toString(date);
    const tokens = splitDateString(formatString);
    return _.map(tokens, t => _.has(formats, t) ?
        _.invoke(formats, t, date) :
        t).filter(Boolean).join('');
}
export default dateFormatter;
