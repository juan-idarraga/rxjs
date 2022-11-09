import { of } from "rxjs";
import { tap, map } from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4, 5, 6); 

numbers$.pipe(
    tap(x => console.log("From tap() =" + x)),  // dispara acción secundaria dentro del observable
    map(val => val*10),
    tap(console.log)

).subscribe( value => console.log('tap', value))
