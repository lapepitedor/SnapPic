import { Component, Input, OnInit } from '@angular/core';
import { FacePic } from '../Models/FacePic';
import { FacepicService } from '../service/facepic.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-face-pic',
  templateUrl: './face-pic.component.html',
  styleUrls: ['./face-pic.component.scss'],
})
export class FacePicComponent implements OnInit {
  @Input() facepic!: FacePic;
  buttonText!: string;

  constructor(private facepicService: FacepicService,
  private router :Router) { }

  ngOnInit() {
    this.buttonText = 'Follow';
  }

  onAddSnap() {
    if (this.buttonText == 'Follow') {
      this.facepicService.facepicById(this.facepic.id, 'follow');
      this.buttonText = 'Unfollow';
    } else {
      this.facepicService.facepicById(this.facepic.id, 'unfollow');
      this.buttonText = 'Follow';
    }
  }

  onView() {
    //this.router.navigateByUrl('facepic/${this.facepic.id}') Fausse
    this.router.navigateByUrl(`facepic/${this.facepic.id}`);
  }
}
