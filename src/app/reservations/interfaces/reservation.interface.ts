import { Restaurant } from "../../restaurants/interfaces/restaurant.intesface";

export interface Reservation {
  id:             number;
  numDiners:      number;
  date:           Date;
  hour:           string;
  fromClientName: string;
  restaurant:     Restaurant;
  client:         Client;
}

export interface Client {
  email:       string;
  name:        string;
  numberPhone: string;
  admin:       Admin;
}

export interface Admin {
  email:    string;
  name:     null | string;
  password: null | string;
}

