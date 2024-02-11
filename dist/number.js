import _ from 'lodash';
import { default as IMask, createPipe } from 'imask';
import { config, configure } from './configure';
const DEFAULT_PIPE_OPTIONS = {
    mask: Number,
    thousandsSeparator: ' ',
    signed: true,
    padFractionalZeros: false,
    normalizeZeros: false,
};
const DEFAULT_OPTIONS = {
    scale: 2,
    placeholder: '-',
    signed: false,
};
configure({
    number: {
        defaults: {
            pipeOptions: DEFAULT_PIPE_OPTIONS,
            options: DEFAULT_OPTIONS
        }
    }
});
const round = (...args) => _.invoke(config, ['number', 'round'], ...args);
const parseNumber = (value) => {
    if (typeof value === 'number')
        return value;
    return _(_.toString(value)).chain().replace(',', '.').words(/(\d+)((\.)?\d+)/).first().toNumber().value();
};
const getPipe = ({ scale, ...options }) => createPipe({
    scale,
    ..._.defaults(options, DEFAULT_PIPE_OPTIONS),
}, IMask.PIPE_TYPE.TYPED, IMask.PIPE_TYPE.MASKED);
const PIPE_DEFAULT = getPipe({});
const PIPES_SIGNED = _(3).range().map(scale => getPipe({
    scale,
    padFractionalZeros: true,
})).value();
const PIPES_UNSIGNED = _(3).range().map(scale => getPipe({
    scale, signed: false,
    padFractionalZeros: true,
})).value();
const pipes = {
    default: PIPE_DEFAULT,
    signed: PIPES_SIGNED,
    unsigned: PIPES_UNSIGNED,
};
const getScaled = function ({ scale, signed, ...options } = {}) {
    if (!_.isInteger(scale)) {
        return PIPE_DEFAULT;
    }
    const array = signed ? PIPES_SIGNED : PIPES_UNSIGNED;
    let pipe = array[scale];
    if (!pipe) {
        pipe = array[scale] = getPipe({
            ...options, scale, signed,
            padFractionalZeros: true,
        });
    }
    return pipe;
};
export function numberFormatterFn(value, options = {}) {
    value = parseNumber(value);
    options = _.defaults({}, options, DEFAULT_OPTIONS);
    let scale = options.scale;
    if (_.isInteger(scale)) {
        value = round(value, scale) || 0;
    }
    const pipe = getScaled(options);
    return pipe(value);
}
const amountPipe = getPipe({ scale: 2, padFractionalZeros: true });
export function Amount(value, placeholder = '-') {
    value = _.toNumber(value);
    if (!value || !_.isFinite(value))
        return placeholder;
    value = parseNumber(value);
    return amountPipe(value);
}
export function Percentage(value, placeholder = '-') {
    return value ? `${Amount(value)}%` : placeholder;
}
export function Integer(value, placeholder) {
    return numberFormatterFn(value, { scale: 0, placeholder });
}
export function Rands(value, prefix = 'R') {
    let str = value ? Amount(value) : '-';
    if (prefix)
        str = `${prefix} ${str}`;
    return str;
}
export const numberFormatter = Object.assign(numberFormatterFn, {
    parseNumber,
    pipes,
    amount: Amount,
    percentage: Percentage,
    integer: Integer,
    rands: Rands,
});
