import {Injectable} from '@angular/core'
import { Booking } from './booking.model'

@Injectable({providedIn:'root'})
export class BookingService {
  public _bookings:Booking[]=[
    {
      id:'xyz',
      placeId:'p1',
      placeTitle:'Manhatton Park',
      guestNumber:2,
      userId:'abc'
    }
  ]


}
