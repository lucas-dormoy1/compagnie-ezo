import { Component, Inject } from '@angular/core';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Artist } from '../meduses.component';

@Component({
    selector: 'app-artist-modal',
    templateUrl: './artist-modal.component.html',
    styleUrls: ['./artist-modal.component.scss'],
    standalone: true,
    imports: [NgFor, NgOptimizedImage, MatDialogModule],
})
export class ArtistModalComponent {
  public artist: Artist;
  private imagePathBase: string = "assets/creations/meduses/artists/"; 

  constructor(public dialogRef: MatDialogRef<ArtistModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Artist) { 
    this.artist = data;
  }

  close(): void{
    this.dialogRef.close();
  }
  
  getArtistImagePath(artist: Artist){
    return this.imagePathBase + artist.imagePath;
  }

}
