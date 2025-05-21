export interface AuthResponse {
  user:  User;
  token: string;
}

export interface User {
  email:    string;
  fullName: string;
}
