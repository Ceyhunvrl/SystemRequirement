import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SteamService } from '@app/data/service/steam.service';

@Component({
  selector: 'app-steam',
  templateUrl: './steam.component.html',
  styleUrls: ['./steam.component.scss'],
  
})
export class SteamComponent implements OnInit {
  reposDetail: any;
  image:any;
  reposList:any[];
  loading: boolean = false;
  errorMessage;
  param1:any
  constructor(private steamService:SteamService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAppDetail();
   
  }
  public getAppDetail() {
    this.param1 = this.route.snapshot.queryParams.appid;
    let appid = this.param1
    this.loading = true;
    this.errorMessage = "";
    this.steamService.getAppDetails(appid)
      .subscribe(
        (response) => { 
          console.log('response received')
          this.reposDetail ='<strong> <br>'+response[appid].data.name+'<p> </strong> <p>'+response[appid].data.pc_requirements.minimum+ '<p>';//+ response[appid].data.steam_appid; 
          this.image=response[appid].data.header_image 
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
  
}




  