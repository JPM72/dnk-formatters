import { FIGURE_SPACE, OrdinalSuffix, flowPipe } from './util'
import { numberFormatter } from './number'
import { stringFormatters } from './string'
import { dateFormatter } from './date'
import { config, configure } from './configure'

export const formatters = {
	FIGURE_SPACE, flowPipe,
	ordinal: OrdinalSuffix,
	number: numberFormatter,
	string: stringFormatters,
	date: dateFormatter,
	config, configure,
}
export default formatters