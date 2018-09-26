
var profile = (
	<div>
		<img src="img.png" className="profile" />
		<h3>{ [user.firstName, user.lastName].join(' ') }</h3>
	</div>
)

var profile = React.createElement("div", null,
	React.createElement("img", { src: 'img.png', className: 'profile'}),
	React.createElement("h3", null, [user.firstName, user.lastName].join(' '))
)


class Vnode (tag, attrs, children) {
	// 
}

React.createElement = function(tag, attrs, children) {
	return new Vnode(tag, attrs, children)
}