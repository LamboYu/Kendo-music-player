import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  constructor() {
  }

  @Input() tracks: [];
  @Input() currentAlbum: any;

  get albumCover() {
    const {images} = this.currentAlbum;
    const [image] = images;
    return image;
  }

  get albumArtiste() {
    const {artists} = this.currentAlbum;
    const [artist] = artists;
    return artist;
  }

  ngOnInit() {
  }

}
