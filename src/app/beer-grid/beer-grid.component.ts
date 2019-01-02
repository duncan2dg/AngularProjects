import { Component, ViewChild, ElementRef, HostBinding } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { beers } from '../beers';
import { BeerOptionComponent } from '../beer-option-ddl/beer-option.component';

@Component({
  selector: 'app-beer-grid',
    template: `<div><!--#setGridVisibilityDDL-->
    <table class="table table-striped">
    <thead class="thead-dark">
        <tr>
            <td scope="col" hidden>Id</td>
            <th scope="col">Company</th>
            <th scope="col">Description</th>
            <th scope="col">Country</th>
            <th scope="col">Style</th>
            <th scope="col">Strength</th>
            <th scope="col">Ingredients</th>
            <th scope="col">Bottle colour</th>
            <td scope="col">Rating</td>
            <td scope="col">&nbsp;</td>
        </tr>
    </thead>

    

    <tbody></tbody>
        <tr *ngFor="let beer of outputBeers">
            <td hidden>{{beer.id}}</td>
            <!--
            <td>
                <input type="text" 
                class=""
                id="company"
                required
                [(ngModel)]="beer.company"
                name="company"
                #description="ngModel">
                
                

                </td>-->
            <td>{{beer.company}}</td>    
            <td>{{beer.description}}</td>
            <td>{{beer.countryOfOrigin}}</td>
            <td>{{beer.Style}}</td>
            <td>{{beer.strength}}</td>
            <td>{{beer.ingredients}}</td>
            <td>{{beer.colourOfBottle}}</td>
            <td>{{beer.rating}}</td>
            <td><button (click)="editBeerSelection(beer)">Edit</button></td>
        </tr>
    </tbody>
</table>
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
export class BeerGridComponent { 
    
    constructor(private http: HttpClient){}

    private _apiUrl= 'http://localhost:3000/beer';
    
    getBeersConfig(){
        return this.http.get<beers[]>(this._apiUrl);
    }
    outputBeers: beers[];
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
        
    ngAfterViewInit(){
      this.loadBeerCompanies();
    }



    @HostBinding('class.is-open')
    isOpen= false;

    toggle(){
        this.isOpen = !this.isOpen;
        console.log("Toggle settings: " + this.isOpen);
    }


    //setGridDDLVisibility: boolean = false;


    /**************************
     * GET BEER COMPANY FROM DDLIST
     *************************
    selectCompany(value: any){
           console.log("You selected this beer: " + value);
          //return this.getBeersConfig()
          //.subscribe(value => {
            //this.outputBeers = value;
            //console.log(value);
          //})
          this.setGridDDLVisibility=true;
            console.log("Visibility status: " + this.setGridDDLVisibility);
        }*/


        getBeerData(){
            return this.getBeersConfig()
            .subscribe(data => {
              //console.log(data);
              //console.log("company: " + data[0].company);
              //console.log("description: " + data[0].description);
              //console.log("ingredients: £" + data[0].ingredients);
              //console.log("country: " + data[0].countryOfOrigin);
              this.outputBeers = data;
            })
          }
        
        editBeerSelection(selectedItem: any){
            //var beerNo: number;
            //beerNo = this.outputBeers[0].id;
            return console.log("Edit Button clicked" + selectedItem.id);
        }        
}