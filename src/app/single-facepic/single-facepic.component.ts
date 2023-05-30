import { Component, Input } from '@angular/core';
import { FacepicService } from '../service/facepic.service';
import { FacePic } from '../Models/FacePic';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-facepic',
  templateUrl: './single-facepic.component.html',
  styleUrls: ['./single-facepic.component.scss'],
})
export class SingleFacepicComponent {
 facepic!: FacePic;
  buttonText!: string;

  constructor(
    private facepicService: FacepicService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buttonText = 'Follow';
    const snapId = +this.route.snapshot.params['id'];
    this.facepic = this.facepicService.getFacepicById(snapId);
  }

  onAddSnap() {
    if (this.buttonText == 'Follow') {
      this.facepicService.facepicById(this.facepic.id, 'follow');
      this.buttonText = 'Unfollow';
    }
    else
    {
      this.facepicService.facepicById(this.facepic.id, 'unfollow');
      this.buttonText = 'Follow';
    }
  }
}
