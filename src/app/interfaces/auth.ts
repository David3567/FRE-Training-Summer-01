export interface SignUpCredentials {
  username: string;
  password: string;
  email: string;
  role: string;
  tmdb_key: string;
}
export interface EmailAvailableResponse {
  response: boolean;
}

export interface UserInfoCredentials {
  id?: string;
  username?: string;
  email?: string;
  role?: string;
  tmdb_key?: string;
  iat?: number;
  exp?: any;
  jwt_token?: string;
}
export interface UserInfo {
  id?: string;
  username?: string;
  email?: string;
  role?: string;
  tmdb_key?: string;
  exp?: number;
  jwt_token?: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  tmdb_key: string;
  exp: number;
}
