import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  products:any=[
    {name: 'pen', price: 10, rating: 3, freedelivery: 'true' },
    {name: 'phone', price: 100, rating: 2, freedelivery: 'false' },
    {name: 'shrt', price: 400, rating: 4, freedelivery: 'true' },
    {name: 'cap', price: 200, rating: 5, freedelivery: 'false' },
    {name: 'moblie case', price: 300, rating: 2, freedelivery: 'true' },
    {name: 'remote', price: 400, rating: 2.5, freedelivery: 'false' }, 
  ];

  PriceLowtoHigh(){
    this.products.sort((a:any,b:any)=>a.price-b.price)
  };
  PriceHightoLow(){
    this.products.sort((a:any,b:any)=>b.price-a.price)
  };
  RatingLowtoHigh(){
    this.products.sort((a:any,b:any)=>a.rating-b.rating)
  };
  RatingHightoLow(){
    this.products.sort((a:any,b:any)=>b.rating-a.rating)
  }

  discount(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price*50/100;
      return product;
    })
  }
  DeliveryChanges(){
    this.products=this.products.filter((product:any)=>
      product.freedelivery.includes(false))
    console.log(this.products);
      this.products=this.products.map((products:any)=>{
      this.products.price=this.products.price+25;
      return products;
    })
  }

  TotalPrice(){
    let totalCost=this.products.reduce((sum:any,product:any)=>sum+product.price,0)
    alert(totalCost)
  }

  TotalCartItems(){
    let TotalCartItem=this.products.reduce((sum:any,product:any)=>this.products.length)
    alert(TotalCartItem)
  }

  name:string="";
  price:number=0;
  rating:number=0;
  yes:boolean=true;
  no:boolean=false;
  freedelivery:string="";

  add(){
    let product={
      name:this.name,
      price:this.price,
      rating:this.rating,
      freedelivery:this.freedelivery
    };
    this.products.unshift(product);
  }

  text:string=""
  search(){
    this.products=this.products.filter((product:any)=>this.products.name.includes(this.text))
  }

  delete(i:number){
    this.products.splice(i,1);
  }
}
