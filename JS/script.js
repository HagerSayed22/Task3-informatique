var request=new XMLHttpRequest();
request.open("GET","https://dummyjson.com/products");
request.send();
request.onreadystatechange=function(){
    if(this.readyState===4 && this.status===200){
        var products=JSON.parse(this.responseText).products;
        products.map(function(ele){
            document.getElementById("content").innerHTML+=` <div  style="min-height: 500px;" onclick="getDetails(${ele.id})" class="col col-md-3 col-sm-6 col-xs-12">
            <div class="card ">
            <img src="${ele.images[0]}" alt="" height="250px" width="100%" style="border-radius:10px 10px 0px 0px">
           <div style="padding:30px; color:black" >
            <h4 >${ele.title}</h4>
            <p>Brand: <span>${ele.brand}</span></p>
            <p>Price: <span>${ele.price}</span></p>
            <p>Discount: <span>${ele.discountPercentage}%</span></p>
            </div>
            </div>
            <br><br><br><br><br><br>
        </div>
        
      `
    console.log(ele.images[0])
    })
  
        
       
       

    }
}

function ConvertMode(){
     var moon= document.getElementById("moon");
     document.body.classList.toggle("dark");
     document.getElementById("brands").classList.toggle("dark-boxShadow");
     document.getElementById("inputSearch").classList.toggle("dark-boxShadow");
     document.getElementById("navbar").classList.toggle("dark-boxShadow"); 
    
     
}


function FilterSearch(){
    document.getElementById("content").innerHTML="";
        var products=JSON.parse(request.responseText).products;
   var s= products.filter(function(ele){
      return ele.title.startsWith(document.getElementById("inputSearch").value)

    })
    s.map(function(ele){
       
        document.getElementById("content").innerHTML+=` <div style="min-height: 500px" onclick="getDetails(${ele.id})" class="col col-md-3 col-sm-6 col-xs-12">
        <div class="card">
        <img src="${ele.images[0]}" alt="" height="250px" width="100%" style="border-radius:10px 10px 0px 0px">
       <div style="padding:30px;color:black"">
        <h4 >${ele.title}</h4>
        <p>Brand: <span>${ele.brand}</span></p>
        <p>Price: <span>${ele.price}</span></p>
        <p>Discount: <span>${ele.discountPercentage}%</span></p>
        </div>
        </div>
        <br><br><br><br><br><br>
    </div>
  `

    })

}
function FilterDropDown(){
    document.getElementById("content").innerHTML="";
    var products=JSON.parse(request.responseText).products;
   var s= products.filter(function(ele){
      return ele.brand===document.getElementById("brands").value;

    })
    s.map(function(ele){
       
        document.getElementById("content").innerHTML+=` <div style="min-height: 500px" onclick="getDetails(${ele.id})" class="col col-md-3 col-sm-6 col-xs-12">
        <div card="card">
        <img src="${ele.images[0]}" alt="" height="250px" width="100%" style="border-radius:10px 10px 0px 0px">
       <div style="padding:30px;color:black"">
        <h4 >${ele.title}</h4>
        <p>Brand: <span>${ele.brand}</span></p>
        <p>Price: <span>${ele.price}</span></p>
        <p>Discount: <span>${ele.discountPercentage}%</span></p>
        </div>
        </div>
        <br><br><br><br><br><br>
    </div>
  `

    })
}
// using XMLHttpRequest
var request1=new XMLHttpRequest();
 function getDetails(id){
    /* request1.open("GET",`https://dummyjson.com/products/${id}`);
    request1.send();
    console.log(request1.responseText)
   
    request1.onreadystatechange=function(){
    if(request1.readyState===4 && request1.status===200){
        var product=JSON.parse(request1.responseText);
    document.getElementById("content").innerHTML="";
     document.getElementById("content").innerHTML+=` <div class="col col-md-3 col-sm-6 col-xs-12">
    <img src="rocket.jpg" alt="" height="300px">
    <br>
    <h1>${product.title}</h1>
</div>
` 

        }
    } */

    // using fetch function

fetch(`https://dummyjson.com/products/${id}`)          
.then(response => response.json())
.then(data => {document.getElementById("content").innerHTML="";
document.getElementById("content").innerHTML+=` <div class="container">
<div class="row" style="width: 100%;">
  <div class="col col-md-6 col-sm-6 col-xs-12">
    <img src="${data.images[0]}" alt=""  width="100%" height="500px">
  </div>
  <div class="col col-md-6 col-sm-6 col-xs-12" >
  <h4 >${data.title}</h4>
    <p style="padding-top:10% ;">${data.description}</p>
    <p>Brand: <span>${data.brand}</span></p>
    <p>Price: <span>${data.price}</span></p>
    <p>Discount: <span>${data.discountPercentage}%</span></p>
  </div>
</div>
</div>
` });
    
} 









