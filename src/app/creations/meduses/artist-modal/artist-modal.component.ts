import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Artist } from '../meduses.component';

@Component({
  selector: 'app-artist-modal',
  templateUrl: './artist-modal.component.html',
  styleUrls: ['./artist-modal.component.scss']
})
export class ArtistModalComponent implements OnInit {
  public artist: Artist;
  private imagePathBase: string = "assets/creations/meduses/artists/"; 

  constructor(public dialogRef: MatDialogRef<ArtistModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Artist) { 
    this.artist = data;
  }


  ngOnInit(): void {
  }

  close(): void{
    this.dialogRef.close();
  }
  
  getArtistImagePath(artist: Artist){
    return this.imagePathBase + artist.imagePath;
  }

}
