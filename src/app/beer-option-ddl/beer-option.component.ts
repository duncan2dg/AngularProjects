import { Component, ViewChild, ElementRef, Input, HostListener } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { beers } from '../beers';
import { BeerGridComponent } from '../beer-grid/beer-grid.component';


@Component({
  selector: 'app-beer-option',
    template: `
    <div>Select a beer company:
    <select #loadbeercompanies (change)="selectCompany($event.target.value)">
            <option></option>
            <option *ngFor="let c of companies" value={{c.company}}>
                {{c.company}}
            </option>
        </select>
    </div>
 
    `

  /* 
  template: `
    <h2>Heroes from JSON File</h2>

    <div *ngFor="let hero of ('assets/heroes.json' | fetch) ">
      {{hero.name}}
    </div>

    <p>Heroes as JSON:
      {{'assets/heroes.json' | fetch | json}}
    </p>`

           <select #loadbeercompanies (change)="selectCompany($event.target.value)">
            <option></option>
            <option *ngFor="let c of companies" value={{c.company}}>
                {{c.company}}
            </option>
        </select>*/
})
export class BeerOptionComponent { 
    
    constructor(private http: HttpClient){}

    private _apiUrl= 'http://localhost:3000/beer';
    
    getBeersConfig(){
        return this.http.get<beers[]>(this._apiUrl);
    }

    companies: beers[];
    /******************
     * POPULATE DDLIST
     *****************/
    loadBeerCompanies(){
      return this.getBeersConfig()
      .subscribe(data => {
        console.log(data);
        this.companies = data;
      })
      
    }
    @ViewChild('select') loadbeercompanies: ElementRef
    //grab reference from DataGrid DDL Version in beer-grid-component file 
    //[style.visibility]="setGridDDLVisibility ? 'visible' : 'hidden'"
    @ViewChild('div') setGridVisibilityDDL: ElementRef

    //setGridDDLVisibility: Boolean = true;
    /*********************************
    Listener and actions for dropdownlist
    **********************************/
    @Input() dropDown: BeerGridComponent;
    @HostListener('click')
    click(){
      this.dropDown.toggle();
      console.log("DropdownList Selected!");
    }  
    
    ngAfterViewInit(){
      this.loadBeerCompanies();
      //this.setGridDDLVisibility;
    }
    //setGridDDLVisibility: boolean = true;
    /**************************
     * GET BEER COMPANY FROM DDLIST
     *************************/
    selectCompany(value: any){
           console.log("You chose this beer: " + value);
          //return this.getBeersConfig()
          //.subscribe(value => {
            //this.outputBeers = value;
            //console.log(value);
          //})
          //this.setGridDDLVisibility=true;
          //console.log("Visibility status: " + this.setGridDDLVisibility);
          
        }
  
}