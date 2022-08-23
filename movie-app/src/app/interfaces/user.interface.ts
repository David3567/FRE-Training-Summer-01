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

type Role =
  Partial<
    Record<"USER" | "ADMIN" | "SUPERUSER", string>
  >;
