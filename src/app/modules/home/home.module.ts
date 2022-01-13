import { NgModule } from '@angular/core';
import { NgxMasonryModule } from 'ngx-masonry';
import { SharedModule } from '@shared/shared.module';

import { MyModalComponent } from './modal/my-modal.component';
import { HomeComponent } from './page/home.component';
import { ProjectItemComponent } from './page/project-item/project-item.component';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';

import { HomeRoutingModule } from './home.routing';
import { SteamComponent } from './page/steam/steam.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';


@NgModule({
  declarations: [
    HomeComponent,
    MyModalComponent,
    ProjectItemComponent,
    ProjectDetailsComponent,
    SteamComponent
  ],
  imports: [SharedModule, NgxMasonryModule, HomeRoutingModule, AutocompleteLibModule],
  exports: [],
  providers: [],
  entryComponents: [MyModalComponent]
})
export class HomeModule {}
