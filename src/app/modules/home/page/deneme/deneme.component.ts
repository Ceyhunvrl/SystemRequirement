import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DenemeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
