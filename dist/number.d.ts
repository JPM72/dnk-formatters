import { type MaskedNumberOptions } from 'imask';
type NumberFormatterOptions = MaskedNumberOptions & {
    signed?: boolean;
    placeholder?: string;
};
declare const parseNumber: (value: any) => number;
declare const pipes: {
    default: (value: number) => string;
    signed: ((value: number) => string)[];
    unsigned: ((value: number) => string)[];
};
export declare function numberFormatterFn(value: any, options?: NumberFormatterOptions): string;
export declare function Amount(value: any, placeholder?: string): string;
export declare function Percentage(value: any, placeholder?: string): string;
export declare function Integer(value: any, placeholder?: string): string;
export declare function Rands(value: any, prefix?: string): string;
type NumberFormatter = {
    (value: any, options?: NumberFormatterOptions): string;
    parseNumber: typeof parseNumber;
    pipes: typeof pipes;
    amount: typeof Amount;
    percentage: typeof Percentage;
    integer: typeof Integer;
    rands: typeof Rands;
};
export declare const numberFormatter: NumberFormatter;
export {};
