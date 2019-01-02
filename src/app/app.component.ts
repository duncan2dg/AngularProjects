import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';
import { beers } from './beers';
//import { Observable } from 'rxjs';
//import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
//import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';




//const countries =['France','Germany','Belgium','USA'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //providers: [NgbTypeaheadConfig] 
})
export class AppComponent {
    outputBeers: beers[];
    private _apiUrl= 'http://localhost:3000/beer';
  


    getBeersConfig(){
      return this.http.get<beers[]>(this._apiUrl);
    }
  
    
  
    constructor(private http: HttpClient){}
    //@ViewChild('div') loadbeercompanies: ElementRef 
    //@ViewChild('select') loadbeercompanies: ElementRef 
        
    //ngAfterViewInit(){
      //this.loadBeerCompanies();
    //}


    //companies: beers[];
    /******************
     * POPULATE DDLIST
     ****************
    loadBeerCompanies(){
      return this.getBeersConfig()
      .subscribe(data => {
        console.log(data);
        this.companies = data;
      })
    }*/

    /*
    public ngOnInit(){
      //console.log("WASSUP" + this.loadBeerCompanies());
      return this.loadBeerCompanies();
    }*/



    /**************************
     * GET BEER COMPANY FROM DDLIST
     *************************/
    //selectCompany(value: any){
       //console.log("Chosen this: " + value);
      //return this.getBeersConfig()
      //.subscribe(value => {
        //this.outputBeers = value;
        //console.log(value);
      //})
    //}



    /******************************
     * LOAD DATA GRID -ALL RESULTS
     ******************************/

    //@ViewChild('div') loadDataGrid: ElementRef 
    setGridVisibility: boolean = false;
    //setGridDDLVisibility: boolean = false;
      getBeerData(){
        return this.getBeersConfig()
        .subscribe(data => {
          //console.log(data);
          //console.log("company: " + data[0].company);
          //console.log("description: " + data[0].description);
          //console.log("ingredients: £" + data[0].ingredients);
          //console.log("country: " + data[0].countryOfOrigin);
          this.outputBeers = data;
          this.setGridVisibility = true;
        })
        
      }
    clearGrid(){
      this.setGridVisibility = false;
    }
    editBeerSelection(selectedItem: any){
      //var beerNo: number;
      //beerNo = this.outputBeers[0].id;
      return console.log("Edit Button clicked" + selectedItem.id);
    }

    //FILTER  

    /*
    public model: any;

    formatter = (result: string) => result.toUpperCase();

    search = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map(term => term === '' ? []
          //: states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
          : countries.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))

      
          )
*/
}
