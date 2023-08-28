var url = 'https://radadiyaabhay.github.io/JSON/'


var show =document.getElementById('show')
fetch(url).then((res) =>{
    return res.json();
}).then((resn) =>{

    for (const key in resn) {
       show.innerHTML +=`
       <div class="col-6 col-md-6 col-lg-4 col-xl-3 p-2 ">
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
}).catch((err) =>{
    console.log(err);
})



