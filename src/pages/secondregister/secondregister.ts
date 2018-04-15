import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {LoginPage}  from '../login/login';


/**
 * Generated class for the SecondregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secondregister',
  templateUrl: 'secondregister.html',
})
export class SecondregisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondregisterPage');
  }

  second(){
  		this.navCtrl.push(LoginPage)
  }
}
