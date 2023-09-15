var url = 'https://radadiyaabhay.github.io/JSON/'


var show = document.getElementById('show');
var header = document.getElementById('header1');

// Products Show Function
var showPro = () => {

    fetch(url).then((res) => {
        return res.json();
    }).then((resn) => {
        resn.reverse();
        for (const key in resn) {
    
            show.innerHTML += `
           <div class="col-6 col-md-6 col-lg-4 col-xl-3 p-2 wow animate__animated animate__flipInX">
           <a href="${resn[key].affLink}" target="_blank">
           <div class="col-12  hei overflow-hidden d-flex align-items-center justify-content-center border border-black">
               <img src="${resn[key].imgLink}" class="img-fluid" alt="">
           </div>
           <div class="border border-black">
               <h5 class="p-2 p-sm-3 m-0 fe text-white text-center" style="background-color: #E52E06;">
                   ${resn[key].name}
               </h5>
           </div>
           </a>
           </div>
            `
        }
        
    
    }).catch((err) => {
        console.log(err);
    })
}
showPro();

// Search Products
var search = () => {
    
    header.innerHTML = `
    <div class="col-12 col-md-6 py-1">
    <div class="input-group wow animate__animated animate__slideInRight py-1">
        <input type="text" class="form-control " placeholder="Search vendee.store" id="search-input">
        <button class="btn btn-light" type="button" id="button-addon2" onclick="return show1()"><i class="bi bi-x-lg"></i></button>
    </div>
    </div>
    `

    // Get references to the input field and product list container
    const searchInput = document.getElementById('search-input');
    console.log(searchInput);
    
    // Function to filter and display products based on search keywords
    function filterProducts(keyword) {
        show.innerHTML = ''; // Clear the product list
    
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Loop through the products and filter by keyword
                data.reverse();
                data.forEach((product) => {
                    if (product.name.toLowerCase().includes(keyword.toLowerCase())) {
                    
                        show.innerHTML += `
                        <div class="col-6 col-md-6 col-lg-4 col-xl-3 p-2 wow animate__animated animate__flipInX">
                        <a href="${product.affLink}" target="_blank">
                        <div class="col-12  hei overflow-hidden d-flex align-items-center justify-content-center border border-black">
                            <img src="${product.imgLink}" class="img-fluid" alt="">
                        </div>
                        <div class="border border-black">
                            <h5 class="p-2 p-sm-3 m-0 fe text-white text-center" style="background-color: #E52E06;">
                            ${product.name}
                            </h5>
                        </div>
                        </a>
                        </div>
                        `  
                    }
                });
            })
            .catch((error) => {
                // Handle any errors that occurred during the fetch.
                console.error('There was a problem with the fetch operation:', error);
            });
    }
    
    // Add an event listener to the search input
    searchInput.addEventListener('input', function () {
        const searchKeyword = searchInput.value.trim();
        filterProducts(searchKeyword);
    });
}

// Main Header Show
var show1 = () => {
    show.innerHTML = ' '
    showPro();
    header.innerHTML = `
        <div class="col-lg-2 col-3 col-md-4  d-flex justify-content-start align-items-center" ><button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="bi bi-list text-white fs-3"></i></button></div>
                <div class="col-lg-8 col-6 col-md-4 d-flex justify-content-center"><img src="./images/logo.png" class="img-fluid col-md-8 col-sm-7 col-lg-3 " alt=""></div>
                <div class="col-lg-2 col-3 col-md-4 d-flex justify-content-end align-items-center" onclick="return search()"><i class="bi bi-search text-white fs-3"></i></div>
        `
}