export interface User {
  id?: string;
  username?: string;
  password?: string;
  email?: string;
  role?: string;
  tmdb_key?: string;
  exp?: number;
  jwt_token?: string;
}