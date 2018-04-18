import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-content',
  templateUrl: './quote-content.component.html',
  styleUrls: ['./quote-content.component.css']
})
export class QuoteContentComponent implements OnInit {

  upVotes: number;
  downVotes: number;
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() {
    this.upVotes = 0
    this.downVotes = 0
   }
  
   upVote(): boolean {
    this.upVotes += 1;
    return false;
  }

  downVote(): boolean {
    this.downVotes += 1;
    return false;
  }

  ngOnInit() {
  }

}
