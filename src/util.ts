import _ from 'lodash'
import { createPipe } from 'imask'

export const FIGURE_SPACE = '\u2007'

export function flowPipe(...args: Parameters<typeof createPipe>): ((value: any) => string)
{
	return _.flow([_.toString, createPipe(...args)])
}

export function OrdinalSuffix(n)
{
	n = Number.parseFloat(n)
	if (!_.isNumber(n)) return ''

	const lastDigit = n % 10
	const secondLastDigit = Math.floor((n % 100) / 10)

	if (secondLastDigit === 1) return `${n}th`

	switch (lastDigit)
	{
		case 1:
			return `${n}st`
		case 2:
			return `${n}nd`
		case 3:
			return `${n}rd`
		default:
			return `${n}th`
	}
}