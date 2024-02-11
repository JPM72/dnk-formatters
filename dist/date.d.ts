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
export declare function dateFormatter(date: Date, formatString?: string): string;
export default dateFormatter;
