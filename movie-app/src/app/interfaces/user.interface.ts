export interface User{
  id?: number
  email?: string
  password?: string
  username?: string
  firstName?: string
  lastName?: string
  phone?: string
  role?: Role
  tmdb_key?: string
  jwt_token?: string
  exp?: string
}


export type Role = "USER" | "ADMIN" | "SUPERUSER"
