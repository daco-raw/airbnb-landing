export interface HotelsResults {
  id?: number;
  hotel_name?: string;
  description?: string;
  price?: number;
  url_img?: string;
}

export interface Environments {
  apiHotelsMocha: string;
  apiHotels: string;
  apiHotelsDev: string;
}
