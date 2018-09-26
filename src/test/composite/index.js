
let dom = (
	<div id="demo" class="wrapper">
		<h3>123</h3>
		<p>123</p>
	</div>
)

{
	tag: 'div',
	attr: {
		id: 'demo',
		className: 'wrapper'
	},
	children: [
		{
			tag: 'h3',
			attr: {},
			children: ['123']
		},
		{
			tag: 'p',
			attr: {},
			children: ['456']
		}
	]
}
