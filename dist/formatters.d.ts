import { OrdinalSuffix } from './util';
import { dateFormatter } from './date';
export declare const formatters: {
    FIGURE_SPACE: string;
    ordinal: typeof OrdinalSuffix;
    number: {
        (value: any, options?: Partial<Pick<import("imask/esm/index").MaskedNumber, "max" | "min" | "mask" | "scale" | "eager" | "parent" | "prepare" | "prepareChar" | "validate" | "commit" | "format" | "parse" | "overwrite" | "skipInvalid" | "autofix" | "radix" | "thousandsSeparator" | "mapToRadix" | "normalizeZeros" | "padFractionalZeros">> & {
            signed?: boolean;
            placeholder?: string;
        }): string;
        parseNumber: (value: any) => number;
        pipes: {
            default: (value: number) => string;
            signed: ((value: number) => string)[];
            unsigned: ((value: number) => string)[];
        };
        Amount: typeof import("./number").Amount;
        Percentage: typeof import("./number").Percentage;
        Integer: typeof import("./number").Integer;
        Rands: typeof import("./number").Rands;
    };
    string: {
        contractWhitespace: (s: any) => string;
        bytes: typeof import("./string").bytes;
        phone: (value: any) => string;
        fullName: (s: any) => string;
        rsaId: (value: any) => string;
        leadingZeros: (str: any, length: number) => string;
        trailingZeros: (str: any, length: number) => string;
    };
    date: typeof dateFormatter;
    config: {
        number: {
            round: (n: number, precision?: number) => number;
            defaults: {
                pipeOptions: {};
                options: {};
            };
        };
    };
    configure: (c: object) => {
        number: {
            round: (n: number, precision?: number) => number;
            defaults: {
                pipeOptions: {};
                options: {};
            };
        };
    } & object;
};
export default formatters;
