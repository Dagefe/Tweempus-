import { Component, OnInit } from '@angular/core';

import { Author } from '../../author/author.model';
import { Twimp } from '../twimp.model';

@Component({
  selector: 'tweempus-tweempus-twimp-list',
  templateUrl: './tweempus-twimp-list.component.html',
  styleUrls: ['./tweempus-twimp-list.component.css']
})
export class TweempusTwimpListComponent implements OnInit {

  text:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur sodales libero, sit amet posuere arcu consectetur ut. Nam volutpat ligula ac nunc consectetur vestibulum.'
  authors: Author[] = [];
  twimps : Twimp[] = [];

  ngOnInit() {

    this.authors.push(new Author('1'))

    this.twimps.push(new Twimp('1','', this.authors[0], this.text, '26/02/2019'))
    this.twimps.push(new Twimp('2','', this.authors[0], this.text, '26/02/2019'))
    this.twimps.push(new Twimp('3','', this.authors[0], this.text, '26/02/2019'))
    this.twimps.push(new Twimp('4','', this.authors[0], this.text, '26/02/2019'))
  }


}
