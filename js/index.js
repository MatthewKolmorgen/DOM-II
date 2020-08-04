// Your code goes here

// Nav Itmes mouseover mouseleave
const navItem = document.querySelectorAll("nav a");

navItem.forEach( (element) => {
    element.addEventListener('mouseover', (event) => {
        element.style.color = 'purple';
    });
});

navItem.forEach( (element) => {
    element.addEventListener('mouseleave', (event) => {
        element.style.color = 'green';
    });
});



// Bus Image click dblclick
const funBus = document.querySelector('.intro img');

funBus.addEventListener('click', event => {
    funBus.style.transform = 'scale(1.5)';
});

funBus.addEventListener('dblclick', event => {
    funBus.style.transform = 'scale(1)';
});