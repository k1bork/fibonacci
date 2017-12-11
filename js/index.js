enterNumber();
function enterNumber() {
    const n = Number(prompt('введіть число порядковий номер числа фібоначі"n"'));
    if (Number.isInteger(n)) {
        document.write(`<h2> ${n}число фібоначі циклом FOR =${fibonacci(n)}</h1>`);
        document.write(`<h2> ${n}число в массиві "fibonaArr[${n - 1}]"=${fibonacciArr(n)}`);
        document.write(`<h2> ${n}число "рекурсивним методом"=${fibonacciRecurs(n)}`);

    } else {
        alert('"n" не число');
        enterNumber();
    }
}
function fibonacci(n) {
    let previous = 0;
    let next = 1;
    let mem;

    for (let i = 2; i <= n; i++) {
        mem = previous + next;
        previous = next;
        next = mem;

    }
    return next;
}

function fibonacciArr(n) {

    let fibonaArr = [1, 1];

    for (let i = 2; i < n; i++) {
        fibonaArr[i] = fibonaArr[i - 1] + fibonaArr[i - 2];
    }

    return fibonaArr[n - 1];
}
function fibonacciRecurs(n) {

    if (n <= 2) {
        return 1;
    } else
        return fibonacciRecurs(n - 1) + fibonacciRecurs(n - 2);
}
