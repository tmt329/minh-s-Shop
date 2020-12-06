export class Product 
{
    static count=0;
    public id:number;
    public name:string;
    public price:number;
    public type: string ;

    constructor(name :string,price : number, type : string  )
    {
            this.name=name ;
            this.price = price;
            this.type=type;
            this.id= Product.count ++ ; 
    }
}