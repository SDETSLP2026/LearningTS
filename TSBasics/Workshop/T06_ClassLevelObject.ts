//This is how class level objects are created.

class Product{
    pid:number;
    pname:string;

    constructor(pid:number, pname:string)
    {
        this.pid = pid;
        this.pname = pname;
    }

    getProductData():void
    {
        console.log(`Product details are:...
            \nproduct id is:${this.pid}
            \nproduct name is:${this.pname} `);
    }
}

//object
let p1:Product = new Product(101,"Asus Laptop");
p1.getProductData();
/*
Product details are:...
            
product id is:101
            
product name is:Asus Laptop 
*/