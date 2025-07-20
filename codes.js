let search = document.querySelector("input")
let heads = document.querySelectorAll("h6")
let btn = document.querySelector(".butn")
let products = document.querySelectorAll(".image, #print-1")



search.addEventListener("input",function(){
    let crat = search.value.toLowerCase()
    let found = false

    let rem = document.querySelector(".rem")
    let rems = document.querySelector(".rems")
    let remse = document.querySelector(".remse")
    if(rem && rems && remse){
        rem.remove()
        rems.remove()
        remse.remove()
    }
    

    heads.forEach((head,index) => {
        let productList = head.innerText.toLowerCase()

        if(products[index]){
            let product = products[index]
            if(productList.includes(crat)){
                product.style.display="block"
                found=true
            }
            else{
                product.style.display="none"
            }
        }

    })
    if(!found){
        let dem = document.createElement("h2")
        let tem = document.createElement("p")
        let img = document.createElement("img")
        let dam = document.querySelector(".cut")
        tem.classList.add("rems")
        dem.classList.add("rem")
        img.classList.add("remse")
        img.setAttribute("src","error-no-search-results_2353c5.png")
        dem.innerText = "Sorry, no results found!"
        tem.innerText = "Please check the spelling or try searching for something else"
        dam.appendChild(img)
        dam.appendChild(dem)
        dam.appendChild(tem)
        
    }
})