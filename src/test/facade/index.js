
// 

function bindEvent(elem, type, selector, fn) {
	if (fn == null) {
		fn = selector
		selector = null
	}
	// 
}

// 调用

bindEvent(elem, 'click', '.unit', fn)
bindEvent(elem, 'click', fn)

$(selector).on('click', '.li', fn)
$(selector).on('click', fn)