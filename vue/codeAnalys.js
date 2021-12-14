vm._update(vm._render(), hydrating)

vm._render = function(){
    return function(text: string = '') {
        const node = new VNode()
        node.text = text
        node.isComment = true
        return node
    }.call(vm, vm.$createElement)
}

vm.$createElement = createElement(vm, a, b, c, d, true)
