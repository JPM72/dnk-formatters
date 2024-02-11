export declare const config: {
    number: {
        round: (n: number, precision?: number) => number;
        defaults: {
            pipeOptions: {};
            options: {};
        };
    };
};
export declare const configure: (c: object) => {
    number: {
        round: (n: number, precision?: number) => number;
        defaults: {
            pipeOptions: {};
            options: {};
        };
    };
} & object;
