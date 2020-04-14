import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class Utilities {
    
    constructor() { }

    public static isEmptyValue(value: any) {
        if (value === '' || value === undefined || value === null || (typeof value === 'number' && isNaN(value))) {
            return true;
        } else {
            return false;
        }
    }
}