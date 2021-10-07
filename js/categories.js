document.addEventListener("DOMContentLoaded", function (){

    fetch("data/categories.json")
    .then(response => response.json())
    .then(data => {

        let categorySection = document.querySelector('.categories__grid');
        
        data.kategori.forEach(kategori => {

            let section = document.createElement('section');
            section.setAttribute('data-category', kategori.name);
            section.innerHTML = `  
            <div class="categories__grid__box" style="background-image: url('images/${kategori.image_folder}/${kategori.image}" alt="${kategori.name}');"> 
            <a class="categories__grid__link" href="shop_kategorier.html?category=${kategori.category}">${kategori.name}
            </a></div>
            `;
            
            categorySection.appendChild(section);
        });
    })
})