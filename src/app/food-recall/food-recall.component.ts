import { debounceTime } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from '../info.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-food-recall',
  templateUrl: './food-recall.component.html',
  styleUrls: ['./food-recall.component.css']
})
export class FoodRecallComponent implements OnInit {

  recallData: any;

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private infoService: InfoService

  ) { }

  ngOnInit() {
    this.infoService.createAPI('food')
    .pipe(debounceTime(1000))
    .subscribe((data)=>{
      console.log("Here");
      console.log(this.recallData=data.json());
    })  
  }
}