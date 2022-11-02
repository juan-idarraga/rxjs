import { from } from "rxjs";

const observer = {
    next: value => console.log('value:', value),
    complete:() => console.log('Completed')
};

const observable$  = from( fetch('https://api.github.com/users/juan-idarraga'));


observable$.subscribe( async(response) => {

    const data = await response.json()

    console.log(data)
})
