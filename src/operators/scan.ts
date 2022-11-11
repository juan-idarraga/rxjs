import { from, map, reduce, scan } from "rxjs";

const numeros = [1, 2, 3, 4, 5];

// const totalAcumulador = (acc, cur) => {
//     return acc + cur;
// }
const totalAcumulador = (acc, cur) => acc + cur;

// Reduce
from(numeros).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);

// Scan
from(numeros).pipe(scan(totalAcumulador, 0)).subscribe(console.log); // es un reduce pero emite en cada interaccion

// Redux
// interface Usuario {
//   id?: string;
//   autenticado?: boolean;
//   token?: string;
//   edad?: number;
// }

// const user: Usuario[] = [
//   { id: "fher", autenticado: false, token: "" },
//   { id: "fher", autenticado: true, token: "ABC" },
//   { id: "fher", autenticado: true, token: "ABC123" },
// ];

// const state$ = from(user).pipe(
//   scan<Usuario>(
//     (acc, cur) => {
//       return { acc, ...cur };
//     },
//     { edad: 33 }
//   )
// );

// const id$ = state$.pipe(map((state) => state.id));

// id$.subscribe(console.log);
