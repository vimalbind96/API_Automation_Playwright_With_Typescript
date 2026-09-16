import { test} from "../Fixture/fixture";
import { APIRequestContext, APIResponse, expect } from "@playwright/test";
import testData from '../TestData/CreateContactData.json'


let data=structuredClone(testData.Data.CreateContact);
let emailProperties=data.properties.find(property=>property.name==="email");
if(emailProperties){
emailProperties.value="vimal4441@gmail.com";
}





test('listing contacts',async({contacts})=>{
let response=await contacts.getContacts("dev/api/contacts");
let jsonResponse:APIResponse=await response.json();
console.log(jsonResponse);
expect(response.status()).toBe(200);
});





test('verify Contact Creation',async({contacts})=>{
let response=await contacts.createContacts(data);
let jsonResponse:APIResponse=await response.json();
console.log(jsonResponse);
expect(response.status()).toBe(200);
})

test('get contact by ID',async({contacts})=>{
let response=await contacts.getContacts("dev/api/contacts/4730199113138176");
let jsonBody=await response.json();
expect(response.status()).toBe(200);
console.log(jsonBody)
console.log(jsonBody.id);
});





let updateData=structuredClone(testData.Data.UpdateContact);
updateData.tags[0]="QA Engneer";
updateData.id="4730199113138176";
updateData.properties[2]!.value="vimalb@gmail.com";


test('update contacts with parcelly data',async({contacts})=>{
let response=await contacts.updateContactWithpartiallyData("dev/api/contacts/edit-properties/",updateData);
let jsonBody=await response.json();
console.log(jsonBody);
expect(jsonBody.id).toBe(4730199113138176);
expect(jsonBody.properties[13].value).toBe("vimalb@gmail.com");
expect(jsonBody.tags[0]).toBe("QA Engneer")
})

