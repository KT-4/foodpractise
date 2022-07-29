export class Foods{
    id!:number;
    price!:number
    name!:string;
    favorite:boolean = false;
    stars:number = 0;
    tags?:any[];
    imageUrl!:any;
    cookTime!:string;
    origins!:string[];
}