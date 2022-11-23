//merge function: los observables emiten en cualquier momento

import { concat, interval, merge, take } from "rxjs";

const interval$ = interval(1000);
merge(interval$.pipe(take(3)), interval$.pipe(take(2))).subscribe(console.log);
