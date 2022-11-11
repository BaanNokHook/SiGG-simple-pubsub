/**
 * 
 * author by Chinnamon
 * 
 */

 abstract class ProductCategory {
      protected imgPath = "img/";
  
      name: string;
      abstract getImageUrl(): string;
  }
  
  class CoffeeCategory extends ProductCategory{
      name = "Coffee";
      getImageUrl() {
          return this.imgPath + "coffee.jpg"
      }
  }
  
  class TeaCategory extends ProductCategory{
      name = "Thaitea";
      getImageUrl() {
          return this.imgPath + "tea.jpg"
      }
  }
  
  class LemonteaCategory extends ProductCategory{
    name = "Lemontea";
    getImageUrl() {
        return this.imgPath + "lemontea.jpg"
    }
}

  class CocoaCategory extends ProductCategory{
      name = "cocoa";
      getImageUrl() {
          return this.imgPath + "cocoa.jpg"
      }
  }
  
  class ArabicaCategory extends ProductCategory{
      name = "MOZART-ALMOST-DIRTY";
      getImageUrl() {
          return this.imgPath + "arabica.jpg"
      }
  }
  
  class MilkshakeBarCategory extends ProductCategory{
      name = "Orio-Milkshake's";
      getImageUrl() {
          return this.imgPath + "oriomilk.jpg"
      }
  }
  

  class SodaCategory extends ProductCategory{
      name = "Iced-Strawberry-Soda";
      getImageUrl() {
          return this.imgPath + "IcedStrawberrySoda.jpg"
      }
  }


  export { ProductCategory, CoffeeCategory, TeaCategory, CocoaCategory, SodaCategory, LemonteaCategory as  MilkshakeBarCategory, ArabicaCategory, LemonteaCategory}