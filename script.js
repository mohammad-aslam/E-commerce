// script.js

// Sample product data (replace with your actual data)
const products = {
    1: {id: 1, brand: "Generic", title: "Collar Tshirt (Rizim Temu Print Polo-Black)", price: "₹379", img: "img/products/f1.jpg", desc: "Men's Irregular Geometric Pattern and Alphabet Print Sports Collar Tshirt (Rizim Temu Print Polo-Black) Short Sleeve Collar Polo Tshirt & Regular Machine Wash" },
    2: {id: 2, brand: "TAANIZLAND", title: "Avengers Hoodie", price: " ₹489", img: "img/products/f2.jpg", desc: "TAANIZLAND Clothing's Avengers Hoodie for Men Trending Best Winter Wear for Mens and Womens | Avengers Logo Edition Sweatshirt Hood" },
    3: {id: 3, brand: "LAMBOO", title: "Casual Shirt", price: "₹417", img: "img/products/f3.jpg", desc: "LAMBOO Men Stylish Floral Print Fashionable Lycra Blend Half Sleeve Slim Fit Button Down Casual Shirt" },
    4: {id: 4, brand: "Lymio ", title: "Men Cargo", price: " ₹699", img: "img/products/f4.jpg", desc: "Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men & Type:Cargo Pants Closure Type:Drawstring Waist & Length:Long &Fit Type:Loose" },
    5: {id: 5, brand: "ZAALIMA", title: "Lehenga Choli And Dupatta Set", price: "₹599", img: "img/products/f5.jpg", desc: "ZAALIMA FASHION WITH Z LOGO Women's Net Embroidered Semi-Stitched Lehenga Choli And Dupatta Set (Free Size)." },
    6: {id: 6, brand: " DSK Studio", title: "short kurti", price: "₹215", img: "img/products/f6.jpg", desc: "Kurta Material :- 100 % Poly Rayon :: Package Contents :- 1 Straight Short Kurta :: Pattern :- Floral Print" },
    7: {id: 7, brand: "Nifty", title: "Denim Crop Jacket", price: "₹629", img: "img/products/f7.jpg", desc: "Nifty Women's Denim Crop Jacket." },
    8: {id: 8, brand: "Leriya Fashion", title: "A-Line Mini Dress ", price: " ₹499", img: "img/products/f8.jpg", desc: "Leriya Fashion Elegant Women's Long-Sleeve | Floral Print | Button-Down | A-Line Mini Dress for Women" },
    9: {id: 9, brand: "Louis Stich", title: "Formal Shoes ", price: " ₹699", img: "img/products/f9.jpg", desc: "LOUIS STITCH Derby Formal Shoes for Men | Lace-Up Front Cut | Ideal for Business, Casual, Parties (RGFCBU)" },
    10: {id: 10, brand: "Asian", title: "Casual Sneakers ", price: " ₹599", img: "img/products/n2.jpg", desc: "ASIAN Carnival-02 Men's High Top Casual Chunky Fashion Sneakers,Dancing Shoes | Basketball Shoes with Rubber Outsole for Boys" },
    11: {id: 11, brand: "FAUSTO", title: "Loafer Shoes ", price: " ₹1399", img: "img/products/n3.jpg", desc: "FAUSTO Men's Party Formal Velvet Horsebit Buckle Slip On Loafer Shoes" },
    12: {id: 12, brand: "Campus", title: "slides ", price: " ₹499", img: "img/products/n4.jpg", desc: "Campus SL-433 Men's Slip-On Slippers" },
    13: {id: 13, brand: "DFR", title: "Jutis ", price: " ₹789", img: "img/products/n5.jpg", desc: "DFR Women Rajasthani Embroidered with Payal Punjabi Mojari Jutti Jutis Shoe" },
    14: {id: 14, brand: "Skechers", title: "Sneakers Shoes ", price: " ₹1899", img: "img/products/n6.jpg", desc: "Skechers womens Summits 2" },
    15: {id: 15, brand: "Mochi", title: "Heels ", price: " ₹1194", img: "img/products/n7.jpg", desc: "Mochi Women Block Heel Fashion Slip-on" },
    16: {id: 16, brand: "Marc Loire", title: "Heel Sandals ", price: " ₹779", img: "img/products/n8.jpg", desc: "Marc Loire Women's Shimmer Open Toe Comfortable Block Heel Sandals" },            
    18: {id: 18, brand: "OnePlus", title: "OnePlus 13 ", price: " 69998", img: "img/products/e2.jpg", desc: "OnePlus 13 | Smarter with OnePlus AI (12GB RAM, 256GB Storage Midnight Ocean)" },
    17: {id: 17, brand: "JBL TUNE", title: "HeadPhones ", price: " ₹5999", img: "img/products/e1.jpg", desc: "JBL Tune 770NC Wireless Over Ear ANC Headphones with Mic, Upto 70 Hrs Battery, Speed Charge : 5 min Charge Gives up to 3H of Playback, Google Fast Pair, Dual Pairing, BT 5.3 (Black)" },
    19: {id: 19, brand: "boat", title: "Stone 352 Speaker ", price: " ₹1599", img: "img/products/e3.jpg", desc: "SboAt Stone 352 Pro Bluetooth Speaker w/ 14W Signature Sound, Up to 12hrs Playback, RGB LEDs, TWS Feature, Built-in Mic, BTv5.3, AUX Port, IPX5 & Type-C Interface(Raging Black)2" },
    20: {id: 20, brand: "Lenovo", title: "LOQ Gaming Laptop ", price: " ₹69990", img: "img/products/e4.jpg", desc: "Lenovo Smartchoice LOQ, Intel Core i5-12450HX, 12th Gen, RTX 3050-6GB, 16GB RAM, 512GB SSD, FHD 144Hz 300Nits, 15.6 /39.6cm, Windows 11, MS Office 21, Grey, 2.4Kg, 83GS003UIN, Gaming Laptop" },
    21: {id: 21, brand: "HP", title: "Victus Gaming Laptops ", price: " ₹89990", img: "img/products/e5.jpg", desc: "HP Victus, 13th Gen Intel Core i7-13620H, 8GB NVIDIA RTX 4060, 16GB DDR4, 1TB SSD (Win11, Office21, Silver, 2.29kg), 144Hz, 9MS, IPS, 15.6-inch(39.6cm), FHD Gaming Laptop, Enhanced Cooling, fa1333TX" },
    22: {id: 22, brand: "Samsung Galaxy", title: "S25 ultra 5G ", price: " ₹141999", img: "img/products/e6.jpg", desc: "Samsung Galaxy S25 Ultra 5G AI Smartphone (Titanium Gray, 12GB RAM, 512GB Storage), 200MP Camera, S Pen Included, Long Battery Life" },
    23: {id: 23, brand: "Zebronics", title: "Bluetooth Portable Speaker ", price: " ₹499", img: "img/products/e7.jpg", desc: "Zebronics ZEB-COUNTY 3W Wireless Bluetooth Portable Speaker With Supporting Carry Handle, USB, SD Card, AUX, FM & Call Function. (Green)" },
    24: {id: 24, brand: "Boult", title: "Ear Buds TWS ", price: " ₹1399", img: "img/products/e8.jpg", desc: "Boult Audio UFO Truly Wireless in Ear Earbuds with 48H Playtime, Built-in App Support, 45ms Low Latency Gaming, 4 Mics ENC, Breathing LEDs, 13mm Bass Drivers Ear Buds TWS, Made in India (White Opal)" }
};


function addToCart(productId, quantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products[productId];

    if (!product) {
        alert("Product not found!");
        return;
    }

    if (quantity <= 0 || isNaN(quantity)) {
        alert("Invalid quantity!");
        return;
    }

    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Cart Updated:", cart);
    alert("Item added to cart!");
    updateCartDisplay(); 
}

function removeFromCart(productId, quantity = null) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const existingItem = cart.find(item => item.id == productId);
    
    if (existingItem) {
        if (quantity === null || existingItem.quantity <= quantity) {
            cart = cart.filter(item => item.id != productId);
        } else {
            existingItem.quantity -= quantity;
        }
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Cart Updated after removal:", cart);
    alert("Item removed from cart!");
    updateCartDisplay();
}


function clearCart() {
    localStorage.removeItem("cart");
    console.log("Cart cleared");
    alert("Cart has been emptied!");
    updateCartDisplay(); 
}


function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");

    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = ""; // Clear existing cart items

        cart.forEach(item => {
            const row = document.createElement("tr");
            row.classList.add("cart-item");
            row.setAttribute("data-id", item.id);
            
            const itemTotal = parseFloat(item.price.replace('₹', '')) * item.quantity;
            
            row.innerHTML = `
                <td><img src="${item.img}" width="50"></td>
                <td>${item.title}</td>
                <td>₹${item.price.replace('₹', '')}</td>
                <td><input type="number" class="quantity-input" value="${item.quantity}" min="1"></td>
                <td>₹${itemTotal.toFixed(2)}</td>
                <td><button class="remove-cart">Remove</button></td>
            `;
            
            cartItemsContainer.appendChild(row);
        });
    }
}

// Add event listeners to "Add to Cart" buttons
document.addEventListener("DOMContentLoaded", function () {
    // Add to Cart buttons on product pages
    document.querySelectorAll(".cart").forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const productId = this.closest(".pro").getAttribute("data-id");
            addToCart(productId, 1);
        });
    });

    // Add to Cart button on product detail page
    const addToCartButton = document.querySelector(".add-to-cart");
    if (addToCartButton) {
        addToCartButton.addEventListener("click", function () {
            const params = new URLSearchParams(window.location.search);
            const productId = params.get("id");
            const quantity = parseInt(document.querySelector("input[type='number']").value) || 1;
            addToCart(productId, quantity);
        });
    }

    // Remove from Cart buttons (event delegation)
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-cart")) {
            e.preventDefault();
            const productId = e.target.closest(".cart-item").getAttribute("data-id");
            const quantityInput = e.target.closest(".cart-item").querySelector(".quantity-input");
            const quantity = quantityInput ? parseInt(quantityInput.value) : null;
            removeFromCart(productId, quantity);
        }
    });

    // Clear Cart button
    const clearCartButton = document.querySelector(".clear-cart");
    if (clearCartButton) {
        clearCartButton.addEventListener("click", function () {
            if (confirm("Are you sure you want to clear your cart?")) {
                clearCart();
            }
        });
    }

    // Update cart display on page load
    updateCartDisplay();
});