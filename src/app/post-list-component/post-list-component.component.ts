import { Component, OnInit, Input } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;
  

  constructor() { }

  ngOnInit() {
  }
  
  getColor(){
      if (this.postLoveIts>0){
        return 'green';
      } else if (this.postLoveIts<0) {
        return 'red';
      } else {
        return 'black';
      }
  }

  addLove(){
    this.postLoveIts++;
  }

  removeLove(){
    this.postLoveIts--;
  }
}
