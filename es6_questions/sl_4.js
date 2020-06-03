let productCart = [
    { productname:'iphone-x',qty:10, price:1000 },
    { productname:'macbook pro',qty:200, price:2000},
    { productname:'iwatch',qty:100, price:550 },
    { productname:'macbook air',qty:100, price:1000},
    { productname:'iphone 8',qty:300, price:700 },
    { productname:'iphone 7',qty:100, price:550 },
    { productname:'ipad Retina',qty:20, price:1000},
    { productname:'ipad', qty:10, price:700 },
    { productname:'Magic Mouse',qty:50, price:300},
    { productname:'Magic Trackpad',qty:75, price:200}
]

function productsCostWithQtyGreaterThan(quantity, productCart) {
    let productsTotalCost = 0;
    let productCount = productCart.length;

    for (let i = 0; i < productCount; i++) {
        if (productCart[i].qty > quantity) {
            let productTotalCost = totalCostOfProduct(productCart[i].productname, productCart);
            productsTotalCost += productTotalCost;
        }
    }

    return productsTotalCost;
}

function totalCostOfProduct(productName, productCart) {
    let productCount = productCart.length;

    for (let i = 0; i < productCount; i++) {
        if (productCart[i].productname === productName) {
            return productCart[i].qty * productCart[i].price;
        }
    }

    return 0;
}

productsCostWithQtyGreaterThan(100, productCart);