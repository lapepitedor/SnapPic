import { Injectable } from '@angular/core';
import { FacePic } from '../Models/FacePic';

@Injectable({
  providedIn: 'root',
})
export class FacepicService {
  myPics: FacePic[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      createdDate: new Date(),
      snaps: 6,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    },

    {
      id: 2,
      title: 'Leckeres Essen',
      description: 'Französisches Food!',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      location: 'Paris',
    },
  ];

  getAllFacepics(): FacePic[] {
    return this.myPics;
  }

  getFacepicById(facePicId: number) {
    const facePict = this.myPics.find((facePict) => facePict.id === facePicId);
     if (!facePict) {
       throw new Error('Picture not found!');
     } else {
       return facePict;
     }
  }

  facepicById(facePicId: number, snapType: 'follow' | 'unfollow'): void
  { //type script litteral
    
     const facePict = this.getFacepicById(facePicId);
    snapType === 'follow' ? facePict.snaps++ : facePict.snaps--;
}
  
}
