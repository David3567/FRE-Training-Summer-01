import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-param',
  templateUrl: './product-param.component.html',
  styleUrls: ['./product-param.component.scss'],
})
export class ProductParamComponent implements OnInit {
  pageNo = '';
  snapshotPageNo = '';
  name = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.snapshotPageNo =
      this.activatedRoute.snapshot.queryParamMap.get('pageNum') || '0';

    const name = this.activatedRoute.snapshot.queryParamMap.get('name');
    console.log('snapshotPageNo: ', this.snapshotPageNo);

    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.pageNo = params.get('pageNum') || '0';
      this.name = params.get('name') || '';
      console.log('Query params ', this.pageNo, name);
    });
  }

  nextPage() {
    this.router.navigate(['product-param'], {
      queryParams: { pageNum: +this.pageNo + 1 },
    });
  }
}
