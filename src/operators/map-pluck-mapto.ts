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

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')  // para tomar un propiedad de un objeto 
)

const keyupMapTo$ = keyup$.pipe(
    mapTo('key pressed')  // siempre va a retornar este valor
)


keyup$.subscribe( val => console.log(val))
keyupCode$.subscribe( val => console.log('map', val))
keyupPluck$.subscribe( val => console.log('pluck', val))
keyupMapTo$.subscribe( val => console.log('mapTo', val))