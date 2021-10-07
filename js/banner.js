document.addEventListener("DOMContentLoaded", function () {
    fetch("data/banner_text.json")
        .then(response => response.json())
        .then(data => {

            const bannerSection = document.querySelector('.banner');
            data.banner.forEach(banner => {

            const section = document.createElement('section');
                section.className = "banner__text";
                section.innerHTML = ` 
                
                ${banner.text}
        
            `
            ;
                bannerSection.appendChild(section);
            });
        })

});