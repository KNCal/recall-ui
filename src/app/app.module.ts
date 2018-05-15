import { InfoService } from './info.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodRecallComponent } from './food-recall/food-recall.component';
import { DrugRecallComponent } from './drug-recall/drug-recall.component';
import { ConsumerProductRecallComponent } from './consumer-product-recall/consumer-product-recall.component';
import { VehicleRecallComponent } from './vehicle-recall/vehicle-recall.component';
import { InfoWindowComponent } from './info-window/info-window.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    FoodRecallComponent,
    DrugRecallComponent,
    ConsumerProductRecallComponent,
    VehicleRecallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
