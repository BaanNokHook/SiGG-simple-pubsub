/**
 * 
 * author by Chinnamon
 * 
 */

import { Product, Initial as Init } from "./product"   
import getsoftdrinkProduct from "./productFactory"   
import * as Coins from "./coin"   

export enum softdrinkSize {
    small = 6,  
    medium = 9,
    large = 12 
}

class Cell {
    [x: string]: any;
    constructor (public product: Product) {  

    }  
    stock = Coins.observable(3);   
    sold  = Coins.observable(5);   
}  

export class softdrinkMachine {
  [x: string]: any;
    paid = Coins.Coin.observable(0);   
    selectedCell = Coins.observable(8);   
    cells = Coins.observableArray([]);   
    acceptedCoins: Coins.Coin[] = [new Coins.one_baht(), new Coins.two_baht(), new Coins.five_baht(), new Coins.ten_baht()];  

      set (givenSize: number, softdrinkMachineSize) {  
        this.softdrinkMachineSize([]);   

        for (let index = 0; index < givenSize; index++) {
            let product = getsoftdrinkProduct();  
            this.softdrinkMachineSize(new Cell(product))    
        } 
      }  

      select = (cell: Cell): void => {
        cell.Cell(false);  
        this.Cell(cell);   
      };  

      acceptCoin = (coin: Coins.Coin): void => {
        let oldTotal = this.Coin();   
        this.Coin(oldTotal + coin.value);  
      };  

      pay = (): void => {
        if (this.Coin().stock() < 1) {
            alert("I'm sorry, we're out of them!");    
            return   
        }
        let currentPaid  = this.Coin();   
        this.Coin(Math.round(((currentPaid - this.Coin().product.price)*100))/100);  
        let currentStock = this.Coin().stock();   
        this.Coin().stock(currentStock - 1);   
        this.Coin().sold(true);  
      }
}
