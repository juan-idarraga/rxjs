import {Observable, Observer, Subject} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next', value),
    error: error => console.log('error', error),
    complete: () => console.log('Completed')
}

const interval$ = new Observable<number>( subscriber => {
    const intervalID = setInterval(
        ()=>subscriber.next( Math.random()), 1000
    )
    
    return () => {
        clearInterval( intervalID )
        console.log('interval destroyed')
    }
})


// casteo multiple, es un observer, tiene next() error() y complete()
const subject$ = new Subject()

const intervalSubject = interval$.subscribe(subject$)


// no se subscribe al interval sino al subject
const firstSubscription = subject$.subscribe( observer )
const secondSubscription = subject$.subscribe( observer )


setTimeout(() => {
    subject$.next(10)
    subject$.complete() // es el complete del subject$ no del interval$ por eso no va a ejecutar el return

    intervalSubject.unsubscribe()
}, 3500);


// const subscription = interval$.subscribe( observer )
// observer.next(5)