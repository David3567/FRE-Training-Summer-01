import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.css']
})

export class MovieDialogComponent implements OnInit {

  casts: any = []
  key:string= ''

  constructor(
    public dialogRef: MatDialogRef<MovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: MoviesService) { dialogRef.disableClose = true; this.casts=data.casts; this.key=data.videos.results[0].key; }

  ngOnInit(): void {

  }

  onCancel(): void {
    this.dialogRef.close();
  }
}


