import {of} from 'rxjs';


//const observable$ = of<number>(1,2,3,4,5); of es un observable que itera en los args
const observable$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));


console.log('start')
observable$.subscribe( 
    next => console.log('next: ', next),
    null,
    ()  => console.log('Completed')
)
console.log('end')


