export class Users {
  constructor(
    public avatar: any,
    public name: string,
    public bio: string,
    public followers: number,
    public following: number,
    public company: string,
    public blog: string,
    public twitter: string,
    public email: string,
    public profile: string,
    public created_at : Date,
  ) {}
}
