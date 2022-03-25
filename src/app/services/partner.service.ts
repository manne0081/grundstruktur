import { Injectable } from '@angular/core';
import { Partner } from '../model/partner';
import { PartnerMock } from '../mock-data/mock-partner';

@Injectable({
    providedIn: 'root'
})

export class PartnerService {

    constructor() {
    }

    getPartners(): Partner[] {        
        return PartnerMock;
    }

}