var url = 'https://radadiyaabhay.github.io/JSON/'


var show = document.getElementById('show');
var header = document.getElementById('header1');

// Products Show Function
var showPro = () => {
    show.innerHTML = ` `;
    fetch(url).then((res) => {
        return res.json();
    }).then((resn) => {
        resn.reverse();
        for (const key in resn) {
    
            show.innerHTML += `
           <div class="col-6 col-md-6 col-lg-4 col-xl-3 p-2 wow animate__animated animate__fadeIn">
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
    <div class="input-group wow animate__animated animate__fadeIn py-1">
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
                    show.innerHTML = `
                    <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a onclick="return showPro()">Home</a></li>
                      <li class="breadcrumb-item active" aria-current="page">${keyword.charAt(0).toUpperCase() + keyword.slice(1)}</li>
                    </ol>
                  </nav>
                    `
                data.forEach((product) => {
                    if (product.name.toLowerCase().includes(keyword.toLowerCase())) {
                    
                        show.innerHTML += `
                        <div class="col-6 col-md-6 col-lg-4 col-xl-3 p-2 wow animate__animated animate__fadeIn">
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
var show12 = () => {
    header.innerHTML = `
    <div class="col-lg-2 col-3 col-md-4  d-flex justify-content-start align-items-center" ><button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="bi bi-list text-white fs-3"></i></button></div>
    <div class="col-lg-8 col-6 col-md-4 d-flex justify-content-center"><img src="./images/logo.png" class="img-fluid col-md-8 col-sm-7 col-lg-3 " alt=""></div>
    <div class="col-lg-2 col-3 col-md-4 d-flex justify-content-end align-items-center" onclick="return search()"><i class="bi bi-search text-white fs-3"></i></div>
    `
}


  if(navigator.userAgent.includes("Instagram")){
      window.location.href = "https://vendee.store"
  }
