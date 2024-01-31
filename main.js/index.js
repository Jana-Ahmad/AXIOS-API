function getProducts(){
    axios.get('https://dummyjson.com/products')
    
        .then(function showProducts(responce){
      
         const products =responce. data.products;
    
         const result= products.map(function(product){
             return`
             <div class="column productCard">

             <img src=${product.thumbnail} />
             <h2>${product.title}</h2>
    
            <a href="product info.html?id=${product.id}" >For more info</a>
           
            </div>
             `
         }).join(" ")

         document.querySelector(".products").innerHTML=result;

        })

      .catch(function (error) {
        console.error('Error:', error);
    });



  }


  getProducts()