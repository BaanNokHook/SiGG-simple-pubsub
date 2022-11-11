/**
 * 
 * author by Chinnamon
 * 
 */

import * as categories from "./productCategory"  

export interface Product {
    name: string 
    price: number
    category?: categories.ProductCategory  
}

export class Initial implements Product {
    name = "please select a product";  
    price = 0;  
}

export class coffee implements Product {
    name = "Coffee";  
    price = 35;     // unit price :: THB
    category = new categories.CoffeeCategory() 
}

export class Thaitea implements Product {
    name = "Thaitea";  
    price = 35;   // unit price :: THB   
    category = new categories.TeaCategory()   
}   

export class Lemontea implements Product {
    name = "Lemontea";  
    price = 40;   // unit price :: THB
    category = new categories.LemonteaCategory()  
}

export class Cocoa implements Product {
    name = "Co-Coa";  
    price = 40;   // unit price :: THB   
    category = new categories.CocoaCategory()  
}   

export class MOZARTALMOSTDIRTY implements Product {
    name = "MOZART-ALMOST-DIRTY";   
    price = 35;   // unit price :: THB    
    category = new categories.ArabicaCategory()   
} 

export class OrioMilkshake implements Product {
    name = "Orio-Milkshake's";  
    price = 45;   // unit price :: THB
    category = new categories.MilkshakeBarCategory()  
}  

export class IcedStrawberrySoda implements Product {
    name = "Iced-Strawberry-Soda";  
    price = 45;   // unit price :: THB
    category = new categories.SodaCategory()   
}  



