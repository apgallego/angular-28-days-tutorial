import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'angular-28-days-tutorial';
  name!: string;
  cities = ['Barcelona', 'Madrid', 'Lima', 'Quito'];
  selection!: string;
  criteria = '';

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
}
