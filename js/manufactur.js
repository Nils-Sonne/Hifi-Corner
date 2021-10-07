document.addEventListener("DOMContentLoaded", function (){

    let manufacturers = [];

    fetch("data/product_data.json")
    .then(response => response.json())
    .then(data => {

        let manuAside = document.querySelector('.manufacturer__aside_right');
        
        data.products.forEach(products => {
            if (manufacturers.indexOf(products.brand) != -1) { return; }
            manufacturers.push(products.brand);

            let section = document.createElement('ul');
            section.setAttribute('data-brand', products.brand);
            section.innerHTML = `  
            <li class="manufacturer__links"><a class="manufacturer__links_url" href="shop_kategorier.html?brand=${products.brand}">${products.brand}</a></li> 
            `;
            
            manuAside.appendChild(section);
        });
    })
})