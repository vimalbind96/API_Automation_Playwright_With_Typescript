import{test as base} from '@playwright/test';
import {  } from '@playwright/test';
import {  ContactServices } from '../Contact_Services/ContactServices';

type fixture={
contacts:ContactServices;

}
export const test=base.extend<fixture>({
contacts:async({playwright},use)=>{
    let contact:ContactServices=new ContactServices(playwright.request);
    await use(contact) ;
}

})



