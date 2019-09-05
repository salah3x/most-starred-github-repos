export interface Repository {
  name: string;
  description: string;
  html_url: string;
  created_at: Date;
  stargazers_count: number;
  open_issues: number;
  owner: {
    avatar_url: string;
    login: string;
    html_url: string;
  };
}
