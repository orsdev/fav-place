import { LngLat } from "../interfaces/place.interface";


export class Place {
    private title: string;
    private imageUri: string;
    private address: string;
    private location: LngLat;
    private id: string;

    constructor(title: string, imageUri: string, address: string, location: LngLat) {
      this.title = title;
      this.imageUri = imageUri;
      this.address = address;
      this.location = location; // { lat: 0.141241, lng: 127.121 }
      this.id = new Date().toString() + Math.random().toString();
    };
  }