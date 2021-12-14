竞态条件：函数执行顺序的不确定性

function timeoutify(fn, delay){
    let timer = setTimeout(() => {
        timer = null
        fn(new Error('time out!'))
    }, delay)
    return function(){
        if(timer){
            clearTimeout(timer)
            fn.apply(this, arguments)
        }
    }
}