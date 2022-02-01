document.querySelector('.secret').addEventListener('mouseover', function() {
    event.target.style.background = 'yellow'; 
    event.target.style.color = 'blue';
    event.target.textContent = 'Хочeш знати який?';
    event.target.style.border = '5px groove black';
});
document.querySelector('.secret').addEventListener('mousedown', function() {
    event.target.style.background = 'black'; 
    event.target.style.color = 'white';
    event.target.textContent = 'А я тобі не скажу';
    event.target.style.border = '5px groove yellow';
});
document.querySelector('.secret').addEventListener('mouseup', function() {
    event.target.style.background = 'yellow'; 
    event.target.style.color = 'blue';
    event.target.textContent = 'Хочeш знати який?';
    event.target.style.border = '5px groove black';
});
document.querySelector('.secret').addEventListener('mouseout', function() {
    event.target.style.background = 'purple'; 
    event.target.style.color = 'black';
    event.target.textContent = 'У мене є секрет!';
    event.target.style.border = '5px groove orange';
});