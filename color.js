let countOver = 0;
document.querySelector('.color').addEventListener('mouseover', function() {
    countOver++;
    if (countOver == 1) {
        event.target.style.background = 'red';
    }  
    else if (countOver == 2) {
        event.target.style.background = 'yellow';
    }
    else if (countOver == 3) {
        event.target.style.background = 'green';
        countOver = 0;
        } 
});
document.querySelector('.color').addEventListener('mouseout', function() {
    event.target.style.background = 'purple'; 
});



