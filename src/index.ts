import { from, map, reduce, scan } from "rxjs"

const numbers = [1,2,3,4,5]

const reductor = (acc, cur)=>acc+cur


from(numbers).pipe(
    reduce(reductor, 0)
)
.subscribe(
    val=>console.log('reduce:',val)
)

from(numbers).pipe(
    scan(reductor,0)
)
.subscribe(
    val=>console.log('scan:',val)
)


//redux
interface UserType {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: UserType[] = [
    { id: 'fher', autenticado: false, token: 'null' },
    { id: 'fher', autenticado: true, token: 'ABC' },
    { id: 'fher', autenticado: true, token: 'ABC123' },
];



const state$ = from(user).pipe(
    reduce<UserType>( (acc,cur) => {
        return { ...acc, ...cur}
    }, {age:30})
)

const id$ = state$.pipe(
    map(  state => state.id)
)
id$.subscribe(console.log)