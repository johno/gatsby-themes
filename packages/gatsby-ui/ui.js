'use strict'

const React = require('react')
const { Component } = require('react')
const { Text, Box, Color } = require('ink')
const SelectInput = require('ink-select-input').default
const presets = require('@theme-ui/presets')

const HARDCODED_TYPES = ['mdxBlogPost', 'mdxNotes']
const HARDCODED_HEADERS = [
	'basic', 'centered', 'left', 'space-between', 'stretch',
	'bold', 'sticky', 'hero-scroll', 'social'
]
const HARDCODED_FOOTERS = ['none', 'basic', 'centered', 'social']

const scaffold = data => {}

const FileWriteSummary = ({
	title = 'The following files will be created'
}) => (
	<>
		<Text bold>{title}</Text>
		<Text>  src/gatsby-theme-plugin-ui/index.js</Text>
		<Text>  src/gatsby-theme-plugin-ui/components.js</Text>
		<Text>  src/gatsby-theme-blog-core/components/posts.js</Text>
		<Text>  src/gatsby-theme-blog-core/components/post.js</Text>
		<Text>  src/components/layout.js</Text>
		<Text>  src/components/header.js</Text>
		<Text>  src/components/footer.js</Text>
		<Text>  src/components/bio.js</Text>
		<Box marginBottom={1} />
	</>
)

const Summary = ({
	preset,
	dataType,
	header,
	footer
}) => (
	<>
		<Text>Summary</Text>
		{preset ? <Box><Text bold>Preset:</Text> <Text>{preset}</Text></Box> : null}
		{dataType ? <Box><Text bold>Data Type:</Text> <Text>{dataType}</Text></Box> : null}
		{header ? <Box><Text bold>Header:</Text> <Text>{header}</Text></Box> : null}
		{footer ? <Box><Text bold>Footer:</Text> <Text>{footer}</Text></Box> : null}
		<Box marginBottom={1} />
	</>
)

class BlogPost extends Component  {
  constructor() {
		super()
		this.state = {
			step: 'preset',
			query: ''
		}
	}

	render() {
		const { step } = this.state

		if (step === 'preset') {
			const items = Object.keys(presets).map(preset => {
				const value = `@theme-ui/${preset}`

				return { value, label: preset }
			})
			return (
				<>
					<Text>Select a preset:</Text>
					<SelectInput
						items={items}
						onSelect={item => {
							this.setState({
								preset: item.value,
								step: 'dataType'
							})
						}}
					/>
				</>
			)
		} else if (step === 'dataType') {
			const items = HARDCODED_TYPES.map(type => {
				return { value: type, label: type }
			})

			return (
				<>
					<Summary {...this.state} />
					<Text>Select a data type:</Text>
					<SelectInput
						items={items}
						onSelect={item => {
							this.setState({
								dataType: item.value,
								step: 'header'
							})
						}}
					/>
				</>
			)
		} else if (step === 'header') {
			const items = HARDCODED_HEADERS.map(type => {
				return { value: type, label: type }
			})

			return (
				<>
					<Summary {...this.state} />
					<Text>Select a header:</Text>
					<SelectInput
						items={items}
						onSelect={item => {
							this.setState({
								header: item.value,
								step: 'footer'
							})
						}}
					/>
				</>
			)
		} else if (step === 'footer') {
			const items = HARDCODED_FOOTERS.map(type => {
				return { value: type, label: type }
			})

			return (
				<>
					<Summary {...this.state} />
					<Text>Select a footer:</Text>
					<SelectInput
						items={items}
						onSelect={item => {
							this.setState({
								footer: item.value,
								step: 'confirm'
							})
						}}
					/>
				</>
			)
		} else if (step === 'confirm') {
			return (
				<>
					<Summary {...this.state} />
					<FileWriteSummary />
					<Text>Create files?</Text>
					<SelectInput
						items={[
							{ label: 'Yes', value: true },
							{ label: 'No', value: false }
						]}
						onSelect={item => {
							this.setState({
								confirmed: item.value,
								step: 'done'
							})
						}}
					/>
				</>
			)
		} else if (step === 'done') {
			this.props.onComplete(this.state)

			return (
				<>
					<Summary {...this.state} />
					<FileWriteSummary title='Files created' />
					<Text>Done! You can now run <Color green>gatsby develop</Color>!</Text>
				</>
			)
		}
	}
}

const App = () => {
	return <BlogPost onComplete={scaffold} />
}

module.exports = App
