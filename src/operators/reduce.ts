import  {interval} from 'rxjs';
import {reduce, take, tap} from 'rxjs/operators';

const funcionReductora = (acc:number, currentValue:number) => acc + currentValue

interval(1000).pipe(
    take(4), // completa el observable cuanto termine el parametro
    tap(console.log),
    reduce(funcionReductora)
)
.subscribe({
    next: val => console.log('next', val),
    complete: ()=> console.log('Completed')
})