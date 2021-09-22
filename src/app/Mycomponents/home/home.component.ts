import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import {MatAccordion} from '@angular/material/expansion';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ])
    ]),

    trigger('explainerAnim', [
      transition('* => *',[
        query('.tx',style({ opacity:0, transform: 'translateX(-40px'})),

        query('.tx', stagger('500ms',[
          animate('800ms 1.2s ease-out', style({opacity:1, transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  
  constructor() { }

  ngOnInit(): void {
  }

}
