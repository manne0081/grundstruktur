import { Component, OnInit } from '@angular/core';

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

    ngOnInit() {
        console.log("onInit");
    }

    onSubmit(): void {
        if(this.firstName != "" && this.lastName != "") {
            var str;

            str = this.lastName.slice(0,3);
            str += this.firstName.slice(0,2);
            str += "01";

            this.shortName = str.toLocaleLowerCase();
            this.id = "2393";
        }
    }

}

