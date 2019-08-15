import { Component } from '@angular/core';

class Post {
  public title: string;
  public content: string;
  public loveIts: number;
  public created_at: Date;
  constructor(title: string, content: string) {
      this.title = title;
      this.content = content;
      this.loveIts = 0;
      this.created_at = new Date();        
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  date = new Date();
  
  posts = [
    new Post("Premier post", "Ceci est le contenu de mon premier post !"),
    new Post("Second post", "Je ne sais pas quoi raconter mais dehors ... ;bah il pleut"),
    new Post("Encore un !!!", "... blablablablablabla ..."),
  ]
}
