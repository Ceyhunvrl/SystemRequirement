import { Component, OnInit } from '@angular/core';
import { SteamService } from '@app/data/service/steam.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  repos: any[];
 
  loading: boolean = false;
  errorMessage;
  
  constructor(private steamService:SteamService) {}

  ngOnInit() {
    this.getAppDetail()
  }
  public getAppDetail() {
    let appid=730
    this.loading = true;
    this.errorMessage = "";
    this.steamService.getAppDetails(appid)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.repos = response[appid].data.pc_requirements.minimum; 
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed 
          this.loading = false; 
        })
  }
}
