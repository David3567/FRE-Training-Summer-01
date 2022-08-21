
export class User {
  constructor(
    public username?: string,
    public email?: string,
    public id?: string,
    private exp?: number,
    private jwt_token?: string,
  ) {}
  get token() {
    if (!this.exp || new Date() > new Date(this.exp * 1000)) {
      return null;
    }
    return this.jwt_token;
  }
}
