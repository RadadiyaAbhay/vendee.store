var url = 'https://radadiyaabhay.github.io/JSON/'


var show = document.getElementById('show');
var searchArr = [];


var showPro = () => {

    fetch(url).then((res) => {
        return res.json();
    }).then((resn) => {
        resn.reverse();
        for (const key in resn) {
    
            searchArr.push(resn[key].name)
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

var header = document.getElementById('header1');
var search = () => {
    
    header.innerHTML = `
    <div class="col-12 col-md-6 py-1">
    <div class="input-group wow animate__animated animate__slideInRight py-1">
        <input type="text" class="form-control " placeholder="Search vendee.store" aria-label="Recipient's username" aria-describedby="button-addon2" oninput="return search1(this.value)">
        <button class="btn btn-light" type="button" id="button-addon2" onclick="return show1()"><i class="bi bi-x-lg"></i></button>
    </div>
    </div>
    `
}

var search1 = (res) => {


    const startsWithInput = res.toLowerCase();

    const foundpro = searchArr.filter(prod => prod.toLowerCase().startsWith(startsWithInput));

    if (foundpro.length > 0) {

        showPro1(foundpro)
        
    } else {
        show.innerHTML =`
            <div>
                <h1 class="text-center">Products Not Found</h1>
            </div>
        `
    }
}

var show1 = () => {
    show.innerHTML = ' '
    showPro();
    header.innerHTML = `
        <div class="col-lg-2 col-3 col-md-4  d-flex justify-content-start align-items-center" ><button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="bi bi-list text-white fs-3"></i></button></div>
                <div class="col-lg-8 col-6 col-md-4 d-flex justify-content-center"><img src="./images/logo.png" class="img-fluid col-md-8 col-sm-7 col-lg-3 " alt=""></div>
                <div class="col-lg-2 col-3 col-md-4 d-flex justify-content-end align-items-center" onclick="return search()"><i class="bi bi-search text-white fs-3"></i></div>
        `

}

var showPro1 = (pr) => {

    fetch(url).then((res3) => {
        return res3.json();
    }).then((resn4) => {
        show.innerHTML = ` `;
        resn4.reverse();
        for (const key in resn4) {
            let count = 0 ;
            pr.forEach(pri => {
                if(pri == resn4[key].name && count == 0){

                    show.innerHTML += `
                   <div class="col-6 col-md-6 col-lg-4 col-xl-3 p-2 wow animate__animated animate__flipInX">
                   <a href="${resn4[key].affLink}" target="_blank">
                   <div class="col-12  hei overflow-hidden d-flex align-items-center justify-content-center border border-black">
                       <img src="${resn4[key].imgLink}" class="img-fluid" alt="">
                   </div>
                   <div class="border border-black">
                       <h5 class="p-2 p-sm-3 m-0 fe text-white text-center" style="background-color: #E52E06;">
                           ${resn4[key].name}
                       </h5>
                   </div>
                   </a>
                   </div>
                   `
                    count++;
                }
            });
        }
        
    
    }).catch((err) => {
        console.log(err);
    })
}
