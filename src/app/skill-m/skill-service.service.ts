import { Injectable } from '@angular/core';

@Injectable()
export class SkillServiceService {

  constructor() { }

  Company = 'Persistent System Pvt. Ltd.'; // Bydefault it is public

 getName(): string {
   return this.Company;
 }
}
