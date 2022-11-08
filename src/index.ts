import { fromEvent, map, tap } from "rxjs";


const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies aliquam ligula, facilisis aliquam nunc pellentesque et. Nam eleifend, sapien ac viverra tincidunt, ipsum mauris sagittis magna, et tincidunt mi nulla in metus. Phasellus congue congue pretium. Nullam gravida molestie urna sed scelerisque. Cras fringilla urna libero, et commodo ante facilisis id. Vivamus eget quam et tellus rhoncus congue a eget velit. Nullam in tellus fermentum, bibendum elit a, scelerisque lectus. Quisque tempor ipsum felis, vitae scelerisque nisl pretium et. Integer maximus, nisi at posuere sollicitudin, nisl tellus bibendum urna, sit amet aliquet tortor lectus non arcu. Nullam gravida risus quis gravida efficitur. Nullam odio nisl, congue ut interdum eu, convallis sed quam.
<br /><br />
Suspendisse libero lectus, viverra a leo eu, tincidunt dignissim ligula. Donec placerat in nisi ut dignissim. Quisque ut felis eget lacus condimentum efficitur. Donec a condimentum tortor. Curabitur mollis vestibulum lorem, non auctor ligula egestas ac. Integer vel arcu eget erat luctus facilisis. Ut eleifend pharetra neque, et congue lacus varius id. Sed et ante semper, ultrices libero nec, efficitur nibh. Integer nec nunc ex.
<br /><br />
Nulla ultrices felis eu dolor egestas, sit amet condimentum metus fringilla. Praesent eu lobortis dolor. Suspendisse ac justo eu orci sollicitudin hendrerit at in arcu. Mauris euismod elementum velit. Integer at sapien eget enim egestas laoreet at sed purus. Mauris varius sodales sollicitudin. Mauris sollicitudin, odio ut condimentum posuere, est dui hendrerit lorem, et tincidunt ligula erat eget felis. Aenean arcu quam, porttitor et luctus non, dictum a risus.
<br /><br />
Proin quis elit molestie, iaculis orci nec, rhoncus turpis. Praesent gravida nunc mauris, id dictum risus tincidunt euismod. In id consequat nunc. Donec lacus nisi, lobortis nec tincidunt nec, euismod et quam. Morbi fermentum interdum sapien eu auctor. Curabitur ullamcorper auctor eros, et rutrum quam placerat ut. Donec at suscipit tortor, vel auctor libero. Nullam sodales, libero sed sodales luctus, mi risus consequat ex, ut commodo sapien enim ornare nisl. Sed pulvinar libero volutpat scelerisque placerat. Sed pharetra, tellus sit amet imperdiet faucibus, est nunc blandit metus, non aliquet eros erat quis magna. Pellentesque lobortis ut lorem ultrices tristique. Nunc mollis sed sapien vitae iaculis. Quisque elementum tellus justo, eget rutrum nibh ultrices sed. Sed ullamcorper tellus id blandit consectetur. Cras non dolor mauris.
<br /><br />
Nullam malesuada, est eget blandit ultricies, eros nibh porta tortor, elementum tincidunt mauris mi vel nulla. Sed sit amet leo volutpat, luctus sem non, congue sem. Donec sit amet tortor non mi aliquet mollis. Phasellus volutpat quam auctor ipsum hendrerit accumsan. Nam sit amet justo viverra, finibus diam vitae, vestibulum ex. Morbi sit amet porta ipsum. Aliquam tincidunt, nisi non accumsan consectetur, erat ligula tincidunt enim, in placerat quam orci vel erat. Nunc lorem arcu, consectetur in ligula condimentum, consectetur ultricies ex. Fusce nunc metus, vehicula a leo nec, efficitur ornare nibh. Nunc quis consequat ex. Pellentesque vestibulum consectetur arcu eget elementum.
<br /><br />
Generated 5 paragraphs, 473 words, 3205 bytes of Lo
`;

const body = document.querySelector('body')
body.append(text)


const progressBar = document.createElement('div')
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar)


//funcion para calcular el scrollTop
const calculateToScroll = (event) => {
    const {
        scrollTop, scrollHeight, clientHeight
    } = event.target.documentElement;

    return ( scrollTop/ (scrollHeight - clientHeight)) * 100;
}

//Streams
const scroll$ = fromEvent(document, 'scroll')
//scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    map( event => calculateToScroll(event)),
    tap( console.log)
)

progress$.subscribe(percent =>{
    progressBar.style.width=`${percent}%`
})
