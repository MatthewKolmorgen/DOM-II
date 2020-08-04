// Your code goes here

// Nav Itmes mouseover
const navItem = document.querySelectorAll("nav a");

navItem.forEach( (element) => {
    element.addEventListener('mouseover', (event) => {
        element.style.color = 'purple';
    });
});

