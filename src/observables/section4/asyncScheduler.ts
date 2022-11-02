import { asyncScheduler } from "rxjs";

asyncScheduler.schedule(function(state){
    console.log('state', state);

    this.schedule(state +1, 1500) // para que se ejecute como interval()
}, 3000, 2000)