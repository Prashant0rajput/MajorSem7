import { Component, OnInit } from '@angular/core';
import {latLng, tileLayer} from 'leaflet';
import {GetLocDetailsService} from '../get-loc-details.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  lat: number ;
  lng: number ;
  devices : any;
  user : any;

  // options = {
  //   layers: [
  //     tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
  //   ],
  //   zoom: 5,
  //   center: latLng(28.7401, 77.1177)
  // };

  constructor( private location :   GetLocDetailsService) { }

  ngOnInit() {
    this.getMarkers();
    this.location.getLocation();

  }

  getMarkers()
  {
    this.lat = 28.7491;
    this.lng = 77.1167;
    this.user = {name : 'Prashant'};
    this.devices = [{name : 'Prashant',latitude : 28.7491 , longitude :77.1165},{name : 'Shahzeb' , latitude : 28.7491 , longitude : 77.1167},{name : 'Prince' , latitude : 28.7493 , longitude : 77.1168} ]
  }

}
