
const products = {
    beats: {
        name: "Beats By Dre",
        image: "headphone.png",
        price: "BAM 29.99",
        brand: "DRE",
        model: "Beats By Dre",
        color: "Black",
        form: "Headphones",
        connectivity: "Wireless",
        colors: ["black", "gray", "navy"],
        extra: ["Frame1.png", "headphone.png", "Frame1.png", "headphone.png"]
    },

    jbl: {
        name: "JBL Speaker",
        image: "item2.png",
        price: "BAM 39.99",
        brand: "JBL",
        model: "Flip 5",
        color: "Black",
        form: "Portable Speaker",
        connectivity: "Bluetooth",
        colors: ["black", "navy", "light-gray"],
        extra: ["item2.png", "item2.png", "item2.png", "item2.png"]
    },

    samsung: {
        name: "Samsung Earphones 1",
        image: "item3.png",
        price: "BAM 19.99",
        brand: "Samsung",
        model: "Wired Earphones",
        color: "Black",
        form: "In-Ear",
        connectivity: "Wired",
        colors: ["light-gray", "black"],
        extra: ["item3.png", "item3.png", "item3.png", "item3.png"]
    },

    wireless: {
        name: "Wireless Headset",
        image: "item4.png",
        price: "BAM 69.99",
        brand: "BeeSound",
        model: "Wireless Headset",
        color: "Black",
        form: "Over-Ear Headphones",
        connectivity: "Wireless",
        colors: ["black", "gray", "navy"],
        extra: ["item4.png", "item4.png", "item4.png", "item4.png"]
    },

    airpods: {
        name: "Apple Airpods",
        image: "new1.png",
        price: "BAM 29.99",
        brand: "Apple",
        model: "AirPods",
        color: "White",
        form: "In-Ear",
        connectivity: "Bluetooth",
        colors: ["light-gray"],
        extra: ["new1.png", "new1.png", "new1.png", "new1.png"]
    },

    studio3: {
        name: "Beats By Dre Studio 3",
        image: "new2.png",
        price: "BAM 29.99",
        brand: "Beats",
        model: "Studio 3",
        color: "Gray",
        form: "Over-Ear Headphones",
        connectivity: "Wireless",
        colors: ["black", "gray", "navy"],
        extra: ["new2.png", "new2.png", "new2.png", "new2.png"]
    },

    airpodsmax: {
        name: "Apple Airpods Max",
        image: "new3.png",
        price: "BAM 29.99",
        brand: "Apple",
        model: "AirPods Max",
        color: "Silver",
        form: "Over-Ear Headphones",
        connectivity: "Wireless",
        colors: ["light-gray", "gray"],
        extra: ["new3.png", "new3.png", "new3.png", "new3.png"]
    },

    samsungnew: {
        name: "Samsung Earphones",
        image: "new4.png",
        price: "BAM 29.99",
        brand: "Samsung",
        model: "Wired Earphones",
        color: "White",
        form: "In-Ear",
        connectivity: "Wired",
        colors: ["light-gray", "black", "navy"],
        extra: ["new4.png", "new4.png", "new4.png", "new4.png"]
    }
};

const selectedKey = new URLSearchParams(window.location.search).get("product");
const product = products[selectedKey] || products.beats;

document.title = `${product.name} | BeeSound`;

document.getElementById("productName").textContent = product.name;
document.getElementById("mainProductImage").src = product.image;
document.getElementById("mainProductImage").alt = product.name;
document.getElementById("productPrice").textContent = product.price;
document.getElementById("productBrand").textContent = product.brand;
document.getElementById("productModel").textContent = product.model;
document.getElementById("productColor").textContent = product.color;
document.getElementById("productForm").textContent = product.form;
document.getElementById("productConnectivity").textContent = product.connectivity;

document.getElementById("productColors").innerHTML =
    product.colors.map(color => `<span class="color ${color}"></span>`).join("");

document.getElementById("extraImages").innerHTML =
    product.extra.map((image, index) => `
        <div class="extra-image">
            <img src="${image}" alt="${product.name} view ${index + 1}">
        </div>
    `).join("");

const related = Object.entries(products).filter(([key]) => key !== selectedKey);

document.getElementById("relatedProducts").innerHTML =
    related.map(([key, item]) => `
        <div class="col">
            <a href="product-details.html?product=${key}" class="related-card">
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
                <p>${item.price}</p>
            </a>
        </div>
    `).join("");

    

