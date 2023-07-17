function reluctantHello() {
    console.log('hello')
}

function receivesAFunction(fun) {
    fun()
}

function returnsANamedFunction() {
    return reluctantHello
}

function returnsAnAnonymousFunction() {
    return () => console.log("wow")
}