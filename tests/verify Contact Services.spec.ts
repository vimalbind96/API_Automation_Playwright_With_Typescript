import { test} from "../Fixture/fixture";
import {  APIResponse, expect } from "@playwright/test";
import testData from '../TestData/ContactsDataFormate.json'
import { json } from "node:stream/consumers";






test('listing contacts',async({contacts})=>{
let response:APIResponse=await contacts.getContacts("dev/api/contacts");
let jsonResponse=await response.json();
console.log(jsonResponse);
expect(response.status()).toBe(200);
});


let data=structuredClone(testData.Data.CreateContact);
let emailProperties=data.properties.find(property=>property.name==="email");
if(emailProperties){
emailProperties.value="vimaly1@gmail.com";
}


test('verify Contact Creation',async({contacts})=>{
let response:APIResponse=await contacts.createContacts("dev/api/contacts",data);
let jsonResponse=await response.json();
console.log(jsonResponse);
expect(response.status()).toBe(200);
expect(jsonResponse.properties[0].value).toBe("vimal");
expect(jsonResponse.properties[1].value).toBe("Bind");
expect(jsonResponse.properties[1].value).toBe("vimaly1@gmail.com");
})

test('get contact by ID',async({contacts})=>{
let response:APIResponse=await contacts.getContacts("dev/api/contacts/4730199113138176");
let jsonBody=await response.json();
expect(response.status()).toBe(200);
console.log(jsonBody)
console.log(jsonBody.id);
});



let updateData=structuredClone(testData.Data.UpdateContact);
updateData.tags[0]="QA Engneer";
updateData.id="4730199113138176";
updateData.properties[2]!.value="vimalb@gmail.com";


test('update contacts with  data',async({contacts})=>{
let response:APIResponse=await contacts.updateContactWithpartiallyData("dev/api/contacts/edit-properties/",updateData);
let jsonBody=await response.json();
console.log(jsonBody);
expect(jsonBody.id).toBe(4730199113138176);
expect(jsonBody.properties[13].value).toBe("vimalb@gmail.com");
expect(jsonBody.tags[0]).toBe("QA Engneer")
})


let scoreID= structuredClone(testData.Data.updateLeadScore_ById);
scoreID.id="4730199113138176";
scoreID.lead_score=101;


test('Update lead score by ID',async({contacts})=>{
let response:APIResponse=await contacts.updateLeadScoreById("dev/api/contacts/edit/lead-score",scoreID);
let jsonBody=await response.json();
console.log(jsonBody);
expect(response.status()).toBe(200);
console.log(response.statusText());
expect(jsonBody.id).toBe(4730199113138176);

})


let starValue=structuredClone(testData.Data.updateStarValueByID);
starValue.id="4730199113138176",
starValue.star_value=3;

test('Update star value by ID',async({contacts})=>{
let response:APIResponse=await contacts.updateStarValueById("dev/api/contacts/edit/add-star",starValue);
let jsonBody=await response.json();
console.log(jsonBody)
expect(jsonBody.id).toBe(4730199113138176);
expect(jsonBody.star_value).toBe(3);
})

let tagsValue=structuredClone(testData.Data.updateTagsValue);
tagsValue.id="4730199113138176";
tagsValue.tags[0]="QA Analysis";

test('Update tags value by ID',async({contacts})=>{
let response:APIResponse=await contacts.UpdateTagsValuebyID("dev/api/contacts/edit/tags",tagsValue)
let jsonBody=await response.json();
expect(jsonBody.id).toBe(4730199113138176);
expect(response.status()).toBe(200);
console.log(jsonBody);

})



