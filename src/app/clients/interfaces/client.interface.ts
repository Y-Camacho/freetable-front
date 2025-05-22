import { Admin } from "../../restaurants/interfaces/restaurant.intesface";

export interface Client {
  email:       string;
  name:        string;
  numberPhone: string;
  admin:       Admin;
}

