import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Place } from './place.model';
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places:Place[] = [
    new Place(
      'p1',
      'Mhatre Farmhouse',
      'Best Place to stay',
      'https://content3.jdmagicbox.com/comp/palghar/r1/022pxx22.xx22.161203112824.u6r1/catalogue/mhatre-farm-and-resort-boisar-palghar-resorts-92vd8uv6zd.jpg',
      1000,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
    new Place(
      'p2',
      'Delux House',
      'Feel like your own place',
      'https://www.theoriginaltour.com/sites/default/files/inline-images/buckingham1.jpg',
      2000,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
    new Place(
      'p3',
      'Divine Home',
      'Srreal Experince',
      'https://pix10.agoda.net/hotelImages/438/43883/43883_15101719590036944954.jpg?s=1024x768',
      25000,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    )
  ];
  constructor(private authService:AuthService) { }

  get places(){
    return [...this._places];
  }

  getPlace(id:string){
    return {...this._places.find(p=>p.id === id)}
  }

  addPlace(title:string, description:string, price:number, dateFrom:Date, dateTo:Date){
    const newPlace = new Place(Math.random().toString(), title, description, 'https://pix10.agoda.net/hotelImages/438/43883/43883_15101719590036944954.jpg?s=1024x768', price,dateFrom,dateTo,this.authService.userId);
    this._places.push(newPlace)
  }
}
