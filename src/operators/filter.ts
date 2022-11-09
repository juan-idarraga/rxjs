import { fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators'


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

const keyupCode$ = keyup$.pipe(
    // se ejecutan en orden map, filter
    map(event => event.code), // recibe keyboardevent retorna string
    filter(key => key === 'KeyA' )// recibe el retorno del map
)

keyupCode$.subscribe( val => console.log('filter', val))