import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next', value),
    error: error => console.log('error', error),
    complete: () => console.log('Completed')
}

const interval$ = new Observable<number>( subscriber => {
    let count = 0
    const interval = setInterval(()=>{
        subscriber.next(count++)
    }, 1000);

    setTimeout(() => {
        subscriber.complete()
    }, 2000);

    return () => {
        clearInterval(interval)
        console.log('interval finalizado')
    }
})

const subscription = interval$.subscribe( observer )

setTimeout(()=>{
    //subscription.unsubscribe() // run the return
}, 4000)