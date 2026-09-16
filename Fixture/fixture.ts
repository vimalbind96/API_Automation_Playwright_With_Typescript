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















































// import { test as base } from '@playwright/test';
// import { ContactServices } from '../Contact_Services/ContactServices';

// type fixture = {
//     contacts: ContactServices;
// };

// export const test = base.extend<fixture>({

//     contacts: async ({ playwright }, use) => {
//         let username = "yourUsername";
//         let password = "yourPassword";

//         let contact = new ContactServices(await playwright.request.newContext(),username,password);

//         await use(contact);
//     }
// });









