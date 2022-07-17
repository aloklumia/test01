import { LightningElement,api,track,wire } from 'lwc';
import getAllShips from '@salesforce/apex/createTable3.getAllShips';
export default class App extends LightningElement {
   name = 'Electra X4 10055';
   description = 'A sweet bike built for comfort.';
   category = 'Mountain';
   material = 'Steel';
   price = '$2,700';
   pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';


   @api records;
    @api errors;

    @wire(getAllShips,{
     }
    )
    wiredCases({
        data,error
    }){
    if(data){
        this.records = data;
        this.errors = undefined;
    }
    if(error){
        this.errors = error;
        this.records = undefined;
        }
    }
}