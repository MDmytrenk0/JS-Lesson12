function addFoto () {
    let link = prompt ('Введіть силку фото');
    event.target.style.background = `url(${link})`;
    event.target.style.backgroundSize = 'cover';
    event.target.style.backgroundPosition = 'center';
};
