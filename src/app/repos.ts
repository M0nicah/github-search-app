export class Repos {
  emit: any;

  constructor(
    public name: string,
    public description: string,
    public login: string,
    public visibility: string,
    public created_at: Date,
    public updated_at: Date,
    public html_url: string,
    public repos_url: string,
    public clone_url: string,
    public homepage: any,
    public language: string
  ) {}
}
