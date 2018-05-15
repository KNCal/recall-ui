import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodRecallComponent } from './food-recall/food-recall.component';
import { DrugRecallComponent } from './drug-recall/drug-recall.component';
import { ConsumerProductRecallComponent } from './consumer-product-recall/consumer-product-recall.component';
import { VehicleRecallComponent } from './vehicle-recall/vehicle-recall.component';


const routes: Routes = [

    {
        path: 'food-recall',
        component: FoodRecallComponent 
    },

    {
        path: 'drug-recall',
        component: DrugRecallComponent
    },

    {
        path: 'consumer-product-recall',
        component: ConsumerProductRecallComponent
    },

    {
        path: 'vehicle-recall',
        component: VehicleRecallComponent
    }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}