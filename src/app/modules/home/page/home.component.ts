import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from '@data/service/project.service';
import { Project } from '@data/schema/project';
import { NgxMasonryOptions } from 'ngx-masonry';
import { SteamService } from '@app/data/service/steam.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects$: Observable<Project[]> = this.projectService.getAll();
  masonryOptions: NgxMasonryOptions
  isAppOpen: boolean = false

  reposDetail: any;
  image: any;
  reposList: any[] = [];
  loading: boolean = false;
  errorMessage;


  constructor(private steamService: SteamService,
    private projectService: ProjectService,
    private router: Router
  ) {

  }
  ngOnInit() {
    this.getAppList()
  }
  public getAppList() {
    this.loading = true;
    this.errorMessage = "";
    this.steamService.getAppList()
      .subscribe(
        (response) => {
          console.log('response received');

          this.reposList = response.applist.apps.filter(k => k.appid < 280000 && k.appid > 250000 || k.appid < 800 && k.appid > 500 || k.appid < 579000 && k.appid > 575000 || k.appid < 1172471 && k.appid > 1172469);
          console.log(this.reposList);
          console.log(response);
        },
        (error) => {
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {
          console.error('Request completed')
          this.loading = false;
        })
  }
  selectEvent(item) {

    this.router.navigate(['/dashboard/steamjson'], { queryParams: { appid: item.appid } })
  }

  onChangeSearch(val: string) {

  }
  onFocused(e) {

  }

}

