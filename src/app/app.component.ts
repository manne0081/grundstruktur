import { Component, OnInit } from '@angular/core';
import { Partner } from './model/partner';
import { PartnerService } from './services/partner.service';

@Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    title = 'grundstruktur';

    id: string = "";
    firstName: string = "";
    lastName: string = "";
    shortName: string = "";

    partners: Partner[] = [];

    constructor (private partnerService: PartnerService) {}

    ngOnInit() {
        console.log("onInit");
        this.partners = this.partnerService.getPartners();
        console.log(this.partners);
    }

    onSubmit(): void {
        if(this.firstName != "" && this.lastName != "") {
            var str;

            str = this.lastName.slice(0,3);
            str += this.firstName.slice(0,2);
            str += "01";

            this.shortName = str.toLocaleLowerCase();            
        }

        if(this.id == "") {
            this.id = "2393";
        }

    }

    // todo
    


}

