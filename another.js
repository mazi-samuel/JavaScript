function fibonacci(n) {
    var fib = [0];
    for (var i = 1; i < n; i++) {
        if (i === 1) {
            fib.push(1);
        } else {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
    }
    return fib;
}