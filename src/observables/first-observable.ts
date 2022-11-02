import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next', value),
    error: error => console.log('error', error),
    complete: () => console.log('Completed')
}

const firstObs$ = new Observable<string>( subscriber => {

    subscriber.next('Hola');
    subscriber.complete();

})

firstObs$.subscribe(observer)

// firstObs$.subscribe( 
//     value => console.log('next', value)
// )



