// Your code goes here

// Nav Itmes mouseover mouseleave
const navItem = document.querySelectorAll("nav a");


navItem.forEach( (element) => {
    element.addEventListener('mouseover', () => {
        element.style.color = 'purple';
    });
});

navItem.forEach( (element) => {
    element.addEventListener('mouseleave', () => {
        element.style.color = 'green';
    });
});



// Bus Image click dblclick
const funBus = document.querySelector('.intro img');


funBus.addEventListener('click', () => {
    funBus.style.transform = 'scale(1.5)';
});

funBus.addEventListener('dblclick', () => {
    funBus.style.transform = 'scale(1)';
});



// logo moseup mousedown

const logo = document.querySelector('h1');

logo.addEventListener('mouseup', () => {
    logo.textContent = 'I think it works!'
})

logo.addEventListener('mousedown', () => {
    logo.textContent = 'Why am I Stuggling With mouseup?!?!'
})

// logo mouseover mouseout

logo.addEventListener('mouseover', () => {
    logo.style.color = 'blue';
})

logo.addEventListener('mouseout', () => {
    logo.style.color = 'orange';
})


// keydown
const backgroundChange = document.querySelector('body');


backgroundChange.addEventListener('keydown', (event) => {
    if (event.key === 'p') {
        backgroundChange.style.backgroundColor = 'blue';
    } else {
        console.log('that didn\'t do anything')
    }  
});

backgroundChange.addEventListener('keyup', (event) => {
    if (event.key === 'p') {
        backgroundChange.style.backgroundColor = 'white';
    } else {
        console.log('that didn\'t do anything')
    }  
});



// Prevent Default Nav Items
document.querySelector('a').addEventListener('click', event => {
    event.preventDefault()
});


// Stop propagation
const noPropagation = document.querySelectorAll('p')
noPropagation[0].addEventListener('mouseover', (element) => {
    debugger
    noPropagation[0].style.border = '1 px solid black';
    element.stopPropagation();
});
