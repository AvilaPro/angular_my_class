import { CurrencyPipe, DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { DolarService } from '../../services/dolar.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, CurrencyPipe, UpperCasePipe, DatePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: any = [];
  monedaBool: boolean = true;
  moneda: string = 'USD';
  monedaSymbol: string = '$';
  tasaBCV: number = 0;

  fecha = Date.now();

  constructor(private productsService: ProductsService, private dolar: DolarService){
    this.productsService.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
    this.dolar.getTasasDolar().subscribe((data) => {
      console.log(data);
      this.tasaBCV = data[0].promedio;
    });
  }

  cambiarMoneda(){
    this.monedaBool = !this.monedaBool;
    if (this.monedaBool) {
      this.moneda = "USD";
      this.monedaSymbol = "$ ";
    }else{
      this.moneda = "VES"
      this.monedaSymbol = "BsD. "
    }
  }
}
