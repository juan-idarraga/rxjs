
import { fromEvent } from "rxjs";

// eventos del dom
const firstSrc$ = fromEvent<MouseEvent>(document, 'click');
const secondSrc$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: ({x, y}) => console.log('x:',x,'y:',y)
}

firstSrc$.subscribe(observer)
secondSrc$.subscribe( e => console.log(e.key))
