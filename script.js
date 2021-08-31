let cart = document.getElementsByClassName('.cart-shop');
let select = document.querySelector('.select');
let button = document.getElementsByTagName('button');

for ( let btn of button){
    btn.addEventListener('click', (e) => {
        let add = Numer(cart.getAttribute('data-count') || 0);
        cart.setAttribute('data-count', add +1);
        cart.classList.add('zero')

        let image = e.target.parentNode.querySelector('img');
        let span = e.target.parentNode.querySelector('span');
        let s_image = image.cloneNode(false);

        span.appendChild(s_image);
        span.classList.add("active");
        setTimeout(() => {
            span.classList.remove("active");
            span.removeChild(s_image);
        }, 500);

        let parent = e.target.parentNode;
        let clone = parent.cloneNode(true);

        select.appendChild(clone);
        clone.lastElementChild.innerText = "Buy now!";
        if (clone) {
            cart.onclick = () => {
                select.classList.toggle('display');

            }
        }
    })
}