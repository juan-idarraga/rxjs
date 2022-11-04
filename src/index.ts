import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators'

range(1,5).pipe(
    map<number, number>(value => {
        return value * 10;
    })
)
.subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
)


keyupCode$.subscribe( val => console.log('map', val))