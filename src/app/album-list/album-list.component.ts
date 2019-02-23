import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  constructor() {
  }

  @Input() albums: [] = [];
  @Output() albumSelected = new EventEmitter<object>();

  onAlbumSelected(album) {
    this.albumSelected.emit(album);
  }

  ngOnInit() {
  }

}
