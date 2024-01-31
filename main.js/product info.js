
function ProductDetails(){
    const urlParams= new URLSearchParams (window.location.search);
    const id = urlParams . get("id");
    console.log(id)
    
    axios.get(`https://dummyjson.com/products?id=${id}`)
    
    
    .then(function(responce){
     
        const data = responce.data;
        console.log(data);
        const products=data.products;
        console.log(products)
        const product = products[id -1];
        console.log(product)
         
            document.querySelector(".title").textContent=product.title;
            document.querySelector(".image img").src=product.thumbnail;
            document.querySelector(".description").textContent=product.description;
            document.querySelector(".price").textContent=`${product.price} $`;
            document.querySelector(".rating").textContent=`${product.rating} /5`;
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
        
        
        
    
    
    }
    ProductDetails()