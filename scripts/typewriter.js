class TypeWriter {

	constructor() {
		this.els = []
		const $els = document.querySelectorAll('[tw]')
		for (const $el of $els) {
			const el = {}
			el.dom = $el
			el.content = $el.innerHTML
			el.delay = this.getTwAttribute($el, 'tw-delay', 1000)
			el.interval = this.getTwAttribute($el, 'tw-interval', 50)
			this.typewrite(el)
		}
	}

	getTwAttribute($el, attr, def) {
		return $el.hasAttribute(attr) ? $el.getAttribute(attr) : def
	}

	typewrite(el) {
		el.dom.innerHTML = ''
		const length = el.content.length
		let i = 0
		
		const write = () => {
			el.dom.innerHTML += el.content[i]
			i++
			if (i < length) setTimeout(write, el.interval)
		}
		setTimeout(write, el.delay)
	}
}

new TypeWriter()