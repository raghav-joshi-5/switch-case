import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-switch',
  templateUrl: './tab-switch.component.html',
  styleUrls: ['./tab-switch.component.scss'],
})
export class TabSwitchComponent implements OnInit {
  val = 15;
  selectedskill: string = 'html';
  constructor() {}

  ngOnInit(): void {}
}
