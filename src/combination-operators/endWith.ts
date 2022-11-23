import { endWith, of, startWith } from "rxjs";

const numbers$ = of(1, 2, 3).pipe(endWith("end")); // emite despues de todo, pero antes de complete
numbers$.subscribe(console.log);
