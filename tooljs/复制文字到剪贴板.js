class Clipboard {
    constructor(trigger, options) {
        this.resolveOptions(options)
        this.addEventToTrigger(trigger)
    }

    addEventToTrigger(trigger) {
        const dom = document.querySelector(`${trigger}`)
        dom.addEventListener('click', (e) => this.onClick(e))      
    }

    onClick(event) {
        const trigger = event.currentTarget
        const targetDom = this.target(trigger)
        this.selectTarget(targetDom)
        this.copyText()
    }

    resolveOptions(options = {}) {
        this.target = typeof options.target === 'function'
            ? option.target
            : this.defaultTarget
    }


    selectTarget(targetDom) {
        const tagName = targetDom.tagName.toLowerCase()
        if (targetDom === 'input' || tagName === 'textarea') {
            const text = targetDom.value
            targetDom.select()
            targetDom.setSelectionRange(0, text.length)
        }
    }

    copyText() {
        let success = false
        const action = 'copy'
        success = document.queryCommandSupported(action)
        if (success) {
            document.execCommand(action)
        }
    }

    defaultTarget(trigger) {
        const selector = trigger.getAttribute('target')
        if (selector) {
            return document.querySelector(`${selector}`)
        }
    }
}