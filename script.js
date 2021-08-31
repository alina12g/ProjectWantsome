let cart = document.getElementsByClassName('cart-shopping');
let select = document.getElementsByClassName('select');
let button = document.getElementsByTagName('button');

for(let but of button){
    but.addEventListener('click', (e)=>{
        let add = Number(cart.getAttribute('data-count') || 0);
        cart.setAttribute('data-count', add +1);
        cart.classList.add('zero')

        // image --animation to cart ---//
        let image = e.target.parentNode.querySelector('img');
        let span = e.target.parentNode.querySelector('span');
        let s_image = image.cloneNode(false);
        span.appendChild(s_image);
        span.classList.add("active");
        setTimeout(()=>{
            span.classList.remove("active");
            span.removeChild(s_image);
        }, 500); 
        
        

        // copy and paste //
        let parent = e.target.parentNode;
        let clone = parent.cloneNode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerText = "Buy-now";
        
        if (clone) {
            cart.onclick = ()=>{
                select.classList.toggle('display');
            }	
        }
    })
}