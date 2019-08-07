import system from '@theme-ui/preset-system'

const { styles, ...theme } = system

export default {
	...theme,
	styles: {
		root: {
			fontFamily: 'body',
			lineHeight: 'body'
		},
		...styles
	}
}
