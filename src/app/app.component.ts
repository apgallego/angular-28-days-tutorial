import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-28-days-tutorial';
  name!: string;
  cities = ['Barcelona', 'Madrid', 'Lima', 'Quito'];
  selection!: string;

  addNewCity(city: string): void {
    this.cities.push(city);
  }

  onCityClicked(city: string): void{
    console.log('City -> ', city);
    this.selection = city;
  }

  onClear(): void{
    console.log('onClear');
    this.selection = '';
  }

  onSearch(): void {
   console.log('onSearch'); 
  }
}
