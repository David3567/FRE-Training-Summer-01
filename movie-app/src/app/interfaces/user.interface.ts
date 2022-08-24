export interface User{
  id?: number
  email?: string
  password?: string
  username?: string
  firstName?: string
  lastName?: string
  phone?: string
  role?: "USER" | "ADMIN" | "SUPERUSER",
  tmdb_key?: string
  jwt_token?: string
  exp?: string
  connected?: boolean
}
