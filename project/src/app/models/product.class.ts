export class Product 
{   
    
    public id:string;
    public name:string;
    public price:number;
    public type: string ;
    public link: any;
    public gender: string

    constructor(id :string,name :string, gender:string, type : string, price : number, linkList  : any   )
    {
            this.name=name ;
            this.price = price;
            this.gender=gender;
            this.type=type;
            this.id= id ; 
            this.link= linkList;
    }
}