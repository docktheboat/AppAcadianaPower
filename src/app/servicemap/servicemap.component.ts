import { Component, OnInit } from '@angular/core';
import { MapService } from '../map/map.service';
import { CensusMap } from '../map/map';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-servicemap',
  templateUrl: './servicemap.component.html',
  styleUrls: ['./servicemap.component.css']
})
export class ServicemapComponent implements OnInit {
  public mapInfo : CensusMap[] | undefined


  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.getAllMapInfo();
  }


  public getAllMapInfo(){
    this.mapService.allInfo().subscribe(
        (response : CensusMap[]) =>{
            this.mapInfo = response;
        },
        (error: HttpErrorResponse) => {
            alert(error.message);
        }
    )
}


public getTractByZip(zipCode : number){
  this.mapService.tractByZip(zipCode).subscribe(
      (response : CensusMap[]) =>{
          this.mapInfo = response;
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
  )
}
}
