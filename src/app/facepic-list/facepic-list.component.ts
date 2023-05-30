import { Component, OnInit } from '@angular/core';
import { FacePic } from '../Models/FacePic';
import { FacepicService } from '../service/facepic.service';

@Component({
  selector: 'app-facepic-list',
  templateUrl: './facepic-list.component.html',
  styleUrls: ['./facepic-list.component.scss'],
})
export class FacepicListComponent implements OnInit {
  myPics!: FacePic[];

  constructor(private facepicService: FacepicService) {}

  ngOnInit(): void {
    this.myPics = this.facepicService.getAllFacepics();
  }
}
