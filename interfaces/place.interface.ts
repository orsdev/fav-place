export type LngLat = {lat: number; lng: number};

export interface IPlace {
    title: string;
    imageUrl: string;
    address: string;
    location: LngLat;
    id: string;
}