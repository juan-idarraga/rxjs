//forkJoin: emite un array con las ultimas emisiones de cada observable

import { delay, forkJoin, interval, of, take } from "rxjs";

const numbers$ = of(1, 2, 3, 4);
const intervalo$ = interval(1000).pipe(take(3));
const letters$ = of("a", "b", "c").pipe(delay(3500));

forkJoin({ numbers$, intervalo$, letters$ }).subscribe((resp) =>
  console.log(resp)
);
