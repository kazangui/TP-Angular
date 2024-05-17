import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [HttpClientModule,FormsModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {
  weatherData:any;
  pays:any;
  temp:any;
  hum:any;
  press:any;
  ville:string="";
  image :string=""

  constructor(private weatherService:WeatherService){
    this.getWeatherData(this.ville)
  }

  getWeatherData(ville:string):void{

    this.weatherService.getWeatherService(ville).subscribe(
      (data)=>{
        this.weatherData=data
        console.log("test");
        this.pays=this.weatherData['sys']['country']
        this.temp=this.weatherData['main']['temp']
        this.hum=this.weatherData['main']['humidity']
        this.press=this.weatherData['main']['pressure']
        this.image=`https://flagsapi.com/${this.pays}/flat/64.png`

      },
      (Error)=>{
        console.log(Error);
      }
    )
  }
}
