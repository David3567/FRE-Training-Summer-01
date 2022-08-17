export interface SignUpCredentials {
  username: string;
  password: string;
  email: string;
  role: string;
  tmdb_key: string;
}
export interface EmailAvailableResponse{
  response: boolean;
}
export interface SignUpResponse {
  accessToken: string;
}
export interface SignInCredentials {
  email: string;
  password: string;
}
