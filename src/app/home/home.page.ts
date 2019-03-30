import { Component } from '@angular/core';
import {Product} from '../models/Interface-product';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Article:Product[];

  constructor(public navCtrl:NavController){

    this.Article=[
        {title : "Jacket",
         description :"Jacket Nike original",
            price:10000,
            category:"Vetement",
            created_at: new Date(),
            state:"Neuf",
            city:"Dakar",
            id:"1",
            averagStar:4,
            avaibility:{
                availabe:true,
                type:"livraison",
                feed: 10

            }
            ,
            picture:[
                "assets"
            ]

        }
        ]

  }


}
