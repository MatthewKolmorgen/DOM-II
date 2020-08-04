// Your code goes here

// Nav Itmes mouseover mouseleave
const navItem = document.querySelectorAll("nav a");


navItem.forEach( (element) => {
    element.addEventListener('mouseover', event => {
        element.style.color = 'purple';
    });
});

navItem.forEach( (element) => {
    element.addEventListener('mouseleave', event => {
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



// logo moseup mousedown

const logo = document.querySelector('h1');

logo.addEventListener('mouseup', event => {
    logo.textContent = 'I think it works!'
})

logo.addEventListener('mousedown', event => {
    logo.textContent = 'Why am I Stuggling With mouseup?!?!'
})

// logo mouseover mouseout

logo.addEventListener('mouseover', event => {
    logo.style.color = 'blue';
})

logo.addEventListener('mouseout', () => {
    logo.style.color = 'orange';
})




// Prevent Default Nav Items
document.querySelector('a').addEventListener('click', event => {
    event.preventDefault()
});
