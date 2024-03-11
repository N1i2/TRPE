//colors
let colors: string[] = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Violet",
    "Black",
    "White"
];
let AllId: number = 0;
let checkNumb = /^[0-9]+$/;

class Product {
    constructor(size: number, color: number, price: number,
        discount: number = 0) {
        this.id = ++AllId;
        this.size = size;
        this.color = color;
        this.price = price;
        this.discount = discount;
        this.resultPrice = price - price * discount / 100;
    }

    public get ResultPriceGet(): number {
        return this.resultPrice;
    }
    public set PesultPriceSet(resOrs: number) {
        this.resultPrice = resOrs;
    }

    id: number;
    size: number;
    color: number;
    price: number;
    discount: number;
    private resultPrice: number;
}
interface Products {
    boots: {
        boot: Product[],
        sneaker: Product[],
        slipper: Product[]
    },
    trousers: {
        trouser: Product[],
        jeans: Product[],
        short: Product[]
    }
}
let products: Products = {
    boots: {
        boot: [],
        sneaker: [],
        slipper: []
    },
    trousers: {
        trouser: [],
        jeans: [],
        short: []
    }
};
//Boots
products.boots.boot.push(new Product(30, 2, 240, 25));
products.boots.boot.push(new Product(44, 2, 123));
products.boots.boot.push(new Product(37, 3, 323, 30));

products.boots.sneaker.push(new Product(35, 1, 233));
products.boots.sneaker.push(new Product(59, 7, 130));
products.boots.sneaker.push(new Product(54, 6, 370));

products.boots.slipper.push(new Product(41, 5, 223));
products.boots.slipper.push(new Product(41, 1, 123));
products.boots.slipper.push(new Product(33, 4, 264, 11));
//Trusers
products.trousers.trouser.push(new Product(38, 5, 200, 10));
products.trousers.trouser.push(new Product(45, 4, 100));
products.trousers.trouser.push(new Product(40, 2, 135));

products.trousers.jeans.push(new Product(59, 3, 198));
products.trousers.jeans.push(new Product(51, 4, 450, 70));
products.trousers.jeans.push(new Product(53, 3, 540));

products.trousers.short.push(new Product(47, 1, 322));
products.trousers.short.push(new Product(48, 7, 234, 7));
products.trousers.short.push(new Product(45, 4, 432));

function GetProducts() {
    console.log("BOOTS");
    for (let i = 0; i < 6; i++) {
        if (i == 3)
            console.log("TROUSERS")

        if (i == 0) {
            console.log("BOOT");
            GetProdView(products.boots.boot);
        }
        else if (i == 1) {
            console.log("SNEAKER");
            GetProdView(products.boots.sneaker);
        }
        else if (i == 2) {
            console.log("SLIPPER");
            GetProdView(products.boots.slipper);
        }
        else if (i == 3) {
            console.log("TROUSER");
            GetProdView(products.trousers.trouser);
        }
        else if (i == 4) {
            console.log("JEAN");
            GetProdView(products.trousers.jeans);
        }
        else {
            console.log("SHORT");
            GetProdView(products.trousers.short);
        }
    }
}
function GetProdView(product: Product[]) {
    for (let i = 0; i < product.length; i++) {
        console.log('id = ' + product[i].id);
        console.log('size = ' + product[i].size);
        console.log('color = ' + colors[product[i].color]);
        console.log('price = ' + product[i].price);
        console.log('discount = ' + product[i].discount);
        console.log('resulte price = ' + product[i].ResultPriceGet);
    }
}

let iterstor = () => {
    let gg: Product[] = [];


};

for (let i in iterstor) {
    console.log(i);
}

// GetProducts();
// GetProdView(products.boots.boot);

function FilterProduct(whereFiltr: number, viewFiltr: number, value: number):void {
    let result: Product[];

    if (whereFiltr == 1) {
        result = GetResult(products.boots.boot, viewFiltr, value);
    }
    else if (whereFiltr == 2) {
        result = GetResult(products.boots.sneaker, viewFiltr, value);
    }
    else if (whereFiltr == 3) {
        result = GetResult(products.boots.slipper, viewFiltr, value);
    }
    else if (whereFiltr == 4) {
        result = GetResult(products.trousers.trouser, viewFiltr, value);
    }
    else if (whereFiltr == 5) {
        result = GetResult(products.trousers.jeans, viewFiltr, value);
    }
    else {
        result = GetResult(products.trousers.short, viewFiltr, value);
    }

    if (result.length == 0) {
        console.log("Not element");
        return;
    }

    console.log("LOCATION");
    GetProdView(result);
}
function GetResult(needProducts: Product[], viewFiltr: number, value: number): Product[] {
    if (viewFiltr == 1) {
        return needProducts.filter((prod) => prod.size <= value);
    }
    else if (viewFiltr == 2) {
        return needProducts.filter((prod) => prod.color == value - 1);
    }
    else {
        return needProducts.filter((prod) => prod.price <= value);
    }
}

while (true) {
    let first = prompt('What are we looking for?' +
        '\n1)Boot\n2)Sneaker\n3)Slipper\n4)Trouser\n5)Jeans\n6)Short');
    if (first == null || !checkNumb.test(first) || parseInt(first) > 6 || parseInt(first) < 1) {
        console.log('Error');
        break;
    }
    let second = prompt('How to filter\n1)Size\n2)Color\n3)Price');
    if (second == null || parseInt(second) < 1 || parseInt(second) > 3) {
        console.log('Error');
        break;
    }
    let thride;
    if (parseInt(second) == 2) {
        thride = prompt('Value color:' +
            '\n1)Red\n2)Orange\n3)Yellow\n4)Green\n5)Blue\n6)Violet\n7)Black\n8)White');
    }
    else {
        thride = prompt('Value');
    }
    if (thride == null || parseInt(thride) < 0 || !checkNumb.test(thride)) {
        console.log('Error');
        break;
    }

    FilterProduct(parseInt(first), parseInt(second), parseInt(thride));
    break;
}