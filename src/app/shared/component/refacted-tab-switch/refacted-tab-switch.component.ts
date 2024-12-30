import { Component, OnInit } from '@angular/core';
import { tabs } from 'src/app/const/tabs';
import { Itab } from 'src/app/modules/tabs';

@Component({
  selector: 'app-refacted-tab-switch',
  templateUrl: './refacted-tab-switch.component.html',
  styleUrls: ['./refacted-tab-switch.component.scss'],
})
export class RefactedTabSwitchComponent implements OnInit {
  selectedskill: string = 'html';
  tabArray: Array<Itab> = tabs;
  constructor() {}

  ngOnInit(): void {}
}
