export interface Restaurant {
  id:          number;
  name:        string;
  email:       string;
  description: string;
  address:     string;
  numDiners:   number;
  numberPhone: string;
  tags:        string[];
  images:      string[];
  menus:       string[];
  admin:       Admin;
}

export interface Admin {
  email:    string;
  name:     string;
  password: string;
}
