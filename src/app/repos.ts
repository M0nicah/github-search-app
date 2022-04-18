export class Repos {
  emit: any;

  constructor(
    public bio: string,
    public public_repos: string,
    public login: string,
    public avatar_url: string,
    public created_at: string,
    public updated_at: string,
    public html_url: string
  ) {}
}
