
import {range, asyncScheduler} from 'rxjs'


// const observable$ = range(-5,10) //( inicio, cantidad de next)
const observable$ = range(1,5, asyncScheduler) // asynschedule corre el observable fuera del hilo

console.log('start')
const subs = observable$.subscribe(
    next => console.log(next)
)
console.log('end')