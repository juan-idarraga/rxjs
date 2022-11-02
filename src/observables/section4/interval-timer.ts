import { interval, timer } from "rxjs";

const today = new Date();
const seconds = today.setSeconds(today.getSeconds())
console.log(seconds)


const obsInterval$ = interval(2000) // es como setInterval
const obsTimer$ = timer(2000, 10000)  // primer arg como setTimeOut() y el segundo es setInterval()


const subInterval = obsInterval$.subscribe(
    next => console.log('interval:',next)
)

const subTimer = obsTimer$.subscribe(
    next => console.log('timer:',next)
)