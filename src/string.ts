import _ from 'lodash'
import { flowPipe, FIGURE_SPACE } from './util'
import { numberFormatter } from './number'

export const contractWhitespace = (s: any) => _.trim(
	_.replace(s, /\s+/g, ' ')
)

export function bytes(bytes, { scale = 2, placeholder = '-' } = {})
{
	if (!bytes)
	{
		return bytes === 0 ? '0 B' : placeholder
	}

	const i = Math.floor(Math.log(bytes) / Math.log(1024))
	const size = ['B', 'KB', 'MB', 'GB', 'TB'][i]
	return `${numberFormatter(bytes / Math.pow(1024, i), { scale })} ${size}`
}

export const phone = flowPipe({
	mask: `000 000 0000`,
	placeholderChar: FIGURE_SPACE,
})
export const fullName = s => _(s).split(/(\w+)/gi).map(_.capitalize).join('')
export const rsaId = flowPipe({
	mask: '000000 0000 000',
	placeholderChar: ' ',
	lazy: false,
	eager: true,
	overwrite: false,
})

export const leadingZeros = (str, length: number) => _.padStart(str, length, '0')
export const trailingZeros = (str, length: number) => _.padEnd(str, length, '0')

export const stringFormatters = {
	contractWhitespace,
	bytes, phone, fullName,
	rsaId,
	leadingZeros, trailingZeros,
}
export default stringFormatters