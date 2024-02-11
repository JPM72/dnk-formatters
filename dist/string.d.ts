export declare const contractWhitespace: (s: any) => string;
export declare function bytes(bytes: any, { scale, placeholder }?: {
    scale?: number;
    placeholder?: string;
}): string;
export declare const phone: (value: any) => string;
export declare const fullName: (s: any) => string;
export declare const rsaId: (value: any) => string;
export declare const leadingZeros: (str: any, length: number) => string;
export declare const trailingZeros: (str: any, length: number) => string;
export declare const stringFormatters: {
    contractWhitespace: (s: any) => string;
    bytes: typeof bytes;
    phone: (value: any) => string;
    fullName: (s: any) => string;
    rsaId: (value: any) => string;
    leadingZeros: (str: any, length: number) => string;
    trailingZeros: (str: any, length: number) => string;
};
export default stringFormatters;
