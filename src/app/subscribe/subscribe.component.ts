import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ObservableComponent } from '../observable/observable.component';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [FormsModule,RouterOutlet,HttpClientModule,ObservableComponent],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css'
})

export class SubscribeComponent {
  title = 'TPHttp';
  weatherData:any;
  pays:any;
  temp:any;
  hum:any;
  press:any;
  ville:string="";
  image :string=""

  constructor(private http:HttpClient){
    this.getWeatherData()
  }

  getWeatherData():void{

    this.http.get("https://api.openweathermap.org/data/2.5/weather?q="+this.ville+"&appid=cf532cd2aced266e16de172022b99f79&units=metric")
    .subscribe(
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

