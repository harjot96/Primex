import { Component } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  logo: any;
  curreny: any[] = [];
  date:Date = new Date();

  constructor(public api:APIService) { 
    this.getData();
    this.getCompanyLogo();
    setInterval(() => {
      this.getData();
      this.getCompanyLogo();  
    },300000)
  }


  getMarquevalue()
  {
    // return `<h4>dsdsdsdds</h4>`
   return this.curreny.map(item => `<strong class="labelmarq" style={margin:10px}> ${item.currencyname}</strong>   <strong class="labelmarqsuccess">BUY:</strong> <strong class="paddd"> ${item.Buy}</strong>   <strong class="labeldanger">SELL:</strong><strong  class="paddd">${item.Sell}</strong>`)
  }
  getData()
  {
    this.api.getApiresponse('https://squareitservice.com/primuat1/api/currdetail').subscribe((res:any) =>{
      if(res)
      {
        console.log(res);
        this.curreny = res;
        
      }
})
  }
  getCompanyLogo()
  {
    this.api.getApiresponse('https://squareitservice.com/primuat1/api/getcustlogo').subscribe((res:any) =>{
      if(res)
      {
        console.log(res);
        this.logo = res;
        
      }
})
  }

}
