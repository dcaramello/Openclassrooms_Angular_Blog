import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLovits: number;
  @Input() postCreated: Date;

  constructor() { }

  ngOnInit(): void {
  }

  onUp() {
    this.postLovits ++;
    console.log(this.postLovits);
  }

  onDown() {
    this.postLovits --;
    console.log(this.postLovits);
  }
}
