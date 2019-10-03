import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { NativeKeyboard } from '@ionic-native/native-keyboard';

const DEFAULT_IP = 'http://192.168.0.7';
const DEFAULT_PORT = 5000;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  ipAddress: any;
  keys: any;

  constructor(private httpClient: HTTP,
              private nativeKeyboard: NativeKeyboard) {
  }

  onKeysChange(e: any) {
    if (!this.ipAddress) {
      this.ipAddress = DEFAULT_IP;
    }
    const url = this.ipAddress + ':' + DEFAULT_PORT;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'

   });
   const options = {
      headers: headers
   };

    this.httpClient.post(url, {
      key: e.detail.data
    }, {})
    .then((data) => {
      console.log(data);
      //alert(JSON.stringify(data));
      //alert(JSON.stringify(data));
      //alert('native Success');
      //this.keys = data;
      //this.ipAddress = data;
    }
    // , (error) => {
    //   console.log(error.message);
    //   alert(JSON.stringify(error.message));
    //   alert(JSON.stringify(error));
    //   alert('native error');
    //  // this.keys = error;
    //   //this.ipAddress = error; 
    // }
    )
    .catch((error) => {
      console.log(error.message);
      alert(JSON.stringify(error.message));
      alert(JSON.stringify(error));
      alert('native error');
     // this.keys = error;
      //this.ipAddress = error; 
    });
  }



}
