import { Component, } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { take } from 'rxjs';
import { appService, GiffyData, GiffyResponce } from './app.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss']
})
export class AppComponent {

  pagedImages: GiffyData[] = [];
  searchKeyword = ''
  pageRequestIndex = 0;
  pageIndex = 0;
  public maxLimit = 0;

  maxGiffyResponceLimit = 5000;


  constructor(private appServ: appService,
    private matSnackbar: MatSnackBar) {
  }

  getImages(event: PageEvent | undefined) {
    this.pageRequestIndex = 0;
    this.pageIndex = 0
    if (event) {
      this.pageIndex = event.pageIndex;
      this.pageRequestIndex = 9 * event.pageIndex;
    }
    this.appServ.getImages(this.searchKeyword, this.pageRequestIndex).pipe(take(1)).subscribe({
      next: (jsonData) => {
        const okayResponseCode = 200
        if (jsonData && jsonData.meta && jsonData.meta.status !== okayResponseCode) {
          this.matSnackbar.open(jsonData.meta.msg, 'dismiss')
        }
        const giffyResp: GiffyResponce = jsonData;
        this.pagedImages = giffyResp.data;
        this.maxLimit = giffyResp.pagination.total_count > this.maxGiffyResponceLimit ? this.maxGiffyResponceLimit : giffyResp.pagination.total_count;
      },
      error: (errorCode) => {
        this.matSnackbar.open(errorCode, 'dismiss')
      }
    });

  }


}
