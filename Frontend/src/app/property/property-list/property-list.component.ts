
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { IProperty } from 'src/app/models/iproperty';
import { IPropertyBase } from 'src/app/models/ipropertybase';
import { HousingService } from 'src/app/services/housing.service';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
 properties: IPropertyBase[];
 SellRent: number = 1;
 Today = new Date();
 City = '';
 SearchCity = '';
 SortbyParam = '';
 SortDirection = 'asc';
  constructor(private route: ActivatedRoute, private housingService:HousingService) {

  }
  ngOnInit():void {
    if(this.route.snapshot.url.toString()){
      this.SellRent= 2;//in rent-property URL else in base URL
    }

    this.housingService.getAllProperties(this.SellRent).subscribe(
      data=>{
        //this.properties=data;
        // const newProperty = JSON.parse(localStorage.getItem('newProp'));
        // console.log(newProperty);
        // console.log(newProperty.SellRent);
        // console.log(this.SellRent);
        // if (newProperty.SellRent == this.SellRent) {
        //   //console.log("triiiiiiii");
        //    this.properties.push(newProperty);
        //   //this.properties=[newProperty, ... this.properties]
        // }
        this.properties = data;
        console.log(data);

        console.log("reched here");
        //console.log(this.route.snapshot.url.toString());
      },
      error=> {
        console.log('httperror: ');
        console.log(error);
      }
    );
  }
  onCityFilter() {
    this.SearchCity = this.City;
  }

  onCityFilterClear() {
    this.SearchCity = '';
    this.City = '';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }

}
