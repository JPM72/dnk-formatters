import _ from 'lodash'

export const config = {
	number: {
		round: _.round,
		defaults: {
			pipeOptions: {},
			options: {},
		}
	},
}
export const configure = (c: object) => _.merge(config, c)