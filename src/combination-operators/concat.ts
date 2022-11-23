//concat function: los observables se van ejecutando uno a uno

import { concat, interval, take } from "rxjs";

const interval$ = interval(1000);
concat(interval$.pipe(take(3)), interval$.pipe(take(2))).subscribe(console.log);
