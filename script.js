document.addEventListener('click', function(e){

    const heart = document.createElement('div');

    heart.classList.add('heart');

    heart.innerHTML = '♡';

    heart.style.left = e.pageX + 'px';

    heart.style.top = e.pageY + 'px';

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 3000);

});