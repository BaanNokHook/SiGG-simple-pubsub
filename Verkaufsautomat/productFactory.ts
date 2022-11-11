/**
 * 
 * author by Chinnamon
 * 
 */

import * as products from "./product"   


export default function GetProduct():products.Product {
      let random = Math.floor(Math.random() * 7);  
      switch (random) {
          case 0: 
             return new products.coffee();    
          case 1:
             return new products.Thaitea();   
          case 2:  
             return new products.Lemontea();   
          case 3:
             return new products.Cocoa();  
          case 4:  
             return new products.MOZARTALMOSTDIRTY();  
          case 5:  
             return new products.OrioMilkshake();   
          case 6:
             return new products.IcedStrawberrySoda();   
      }
}
