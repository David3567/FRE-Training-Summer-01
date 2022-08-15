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

  constructor(
    public dialogRef: MatDialogRef<MovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: MoviesService) { dialogRef.disableClose = true; }

  ngOnInit(): void {
    this.service.getCredits(this.data.movie.id.toString()).subscribe((res: any) => { this.casts = res.cast; console.log("DIalog" + this.casts[0].name) })
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}


