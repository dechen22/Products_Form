var product, price, category, image;
var products = [];

var title = '<h3 class="display-title">My Cart</h3>';
var tableS = "<table><tr><th>Product</th><th>Price ($)</th><th>Category</th><th>Image</th></tr>";
var tableE = "</table>";
var trS = "<tr>";
var trE = "</tr>";
var tdS = "<td>";
var tdE = "</td>";
var imgS = '<img src="';
var imgE = '" width="45px" height="45px"';


class Product {
    constructor (product, price, category, image) {
        this.product = product;
        this.price = price;
        this.category = category;
        this.image = image;
    }
}

function readDataEntry() {
    product = document.getElementById("productEntry").value.trim();
    price = document.getElementById("priceEntry").value.trim();
    category = document.getElementById("categoryEntry").value.trim();
    image = document.getElementById("imgEntry").value.trim();
}

function validateDataEntry() {
    if (product.length == 0 || price.length == 0 || category == "Category" || image.length == 0) {
        alert ("Some fields are empty");
        return false;
    } else if (price <= 0) {
        alert ("Price should be greater than 0");
    } else {
        return true;
    }
}

function enterProduct() {
    
    readDataEntry();
    
    if (validateDataEntry() == true){
        
        var tempObject = new Product(product, price, category, image);
        localStorage.setItem('products',JSON.stringify(tempObject));
        products.push(tempObject);        
    }
    display();
    clearForm();
}

function display() {

    let text= title + tableS;

    for (let i = 0; i < products.length; i++)
    {
        var rowTemp = 
        trS + 
        tdS + products[i].product + tdE +
        tdS + products[i].price + tdE +
        tdS + products[i].category + tdE +
        tdS + imgS + products[i].image + imgE + tdE + 
        trE;

        text += rowTemp;            
    }
    
    text += tableE;
    document.getElementById("displayProducts").innerHTML = text;
}

function clearForm() {
    document.getElementById("productEntryForm").reset();
}