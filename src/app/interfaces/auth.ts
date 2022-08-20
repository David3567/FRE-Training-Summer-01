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
export interface SignUpResponse {
  accessToken: string;
}
export interface SignInCredentials {
  email: string;
  password: string;
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
