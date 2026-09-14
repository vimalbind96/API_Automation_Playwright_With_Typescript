import { test} from "../Fixture/fixture";
import { APIResponse, expect } from "@playwright/test";
import testData from '../TestData/CreateContactData.json'


test('verify Get Contact services',async({contacts})=>{
let response=await contacts.fetchContacts();
let jsonResponse:APIResponse=await response.json();
console.log(jsonResponse);
expect(response.status()).toBe(200);
})

test('verify Contact Creation',async({contacts})=>{
let response=await contacts.createContacts();
let jsonResponse:APIResponse=await response.json();
console.log(jsonResponse);
expect(response.status()).toBe(200);
})









































































































// test('create Contact usin POM',async({contacts})=>{
// let response=await contacts.createContacts("vimal","Bind","ashishaa@gmail.com");
// let resData=await response.json();
// console.log(resData.id);
// console.log(response.status());
// expect(response.status()).toBe(200);
// //console.log(resData.tagsWithTime[0].tag);

// });
// test('update contact',async({contacts})=>{
// await contacts.updateContact("6315187134726144","Vimal","bind","updateContact@gmail.com");


// })

// test('Get contact',async({contacts})=>{
// let responseAPI=await contacts.getContacts();
// let jsonResponse=await responseAPI.json();
// console.log(jsonResponse );
// console.log(responseAPI.status());
// });


// test("get contact", async ({playwright}) => {
//     const apiContext = await playwright.request.newContext({
//         httpCredentials: {
//             username: "vimal@072026.com",
//             password: "Pass@123"
//         }
//     });

//     const response = await apiContext.get("https://qavimalb.agilecrm.com/dev/api/contacts",{
//         headers:{
//             "accept":"application/json",
//         },
        
//     });
//     let x=(await response.body()).toString();
//     console.log(x);
//     console.log("Status Code:", response.status());

//     // const responseBody = await response.json();

//     // console.log(responseBody);

//      expect(response.status()).toBe(200);

// });

// test('Create Contact',async({playwright})=>{

//     let apiCreateContext= await playwright.request.newContext({
// httpCredentials:{
//     username:"vimal@072026.com",
//     password:"Pass@123"
// }
// });
// const responce=await apiCreateContext.post("https://qavimalb.agilecrm.com/dev/api/contacts",{
//     data:{

//     "star_value": "5",
//     "lead_score": "99",
//     "tags": [
//         "Automation Learner",
//         "Glaxy Batch"
//     ],
//     "properties": [
//         {
//             "type": "SYSTEM",
//             "name": "first_name",
//             "value": "Shani AA"
//         },
//         {
//             "type": "SYSTEM",
//             "name": "last_name",
//             "value": "Bind A1"
//         },
//         {
//             "type": "SYSTEM",
//             "name": "email",
//             "subtype": "work",
//             "value": "shaniAAA@gmail.com"
//         },
//         {
//             "type": "SYSTEM",
//             "name": "address",
//             "value": "{\"address\":\"225 George Street\",\"city\":\"NSW\",\"state\":\"Sydney\",\"zip\":\"2000\",\"country\":\"Australia\"}"
//         },
//         {
//             "name": "phone",
//             "value": "88775968879",
//             "subtype": "work"
//         },
//         {
//             "name": "phone",
//             "value": "78006211110",
//             "subtype": "home"
//         },
//         {
//             "name": "website",
//             "value": "www.youtube.com",
//             "subtype": "YOUTUBE"
//         },
//         {
//             "name": "website",
//             "value": "www.linkedin.com",
//             "subtype": "LINKEDIN"
//         },
//         {
//             "name": "website",
//             "value": "www.mywebsite.com",
//             "subtype": "URL"
//         },
//         {
//             "name": "My custom field of type text",
//             "type": "CUSTOM",
//             "value": "My name is ghanshyam"
//         },
//         {
//             "name": "My custom field of type date",
//             "type": "CUSTOM",
//             "value": 1479580200
//         },
//         {
//             "name": "My custom field of type checkbox",
//             "type": "CUSTOM",
//             "value": "on"
//         },
//         {
//             "name": "My custom field of type list",
//             "type": "CUSTOM",
//             "value": "lemon"
//         },
//         {
//             "name": "My custom field of type companies",
//             "type": "CUSTOM",
//             "value": "[\"5767466600890368\",\"5114076984246272\",\"5746725247516672\"]"
//         }
//     ]
//     },
// headers:{
//     "accept":"application/json",
//     "Content-type":"application/json"
// }

// });
// let x= responce.body().toString();
// let y=await responce.json();
// expect(responce.status()).toBe(200);
// console.log(y);
// })

// test('update contact',async({playwright})=>{
// const apiRequestContext=await playwright.request.newContext({
// httpCredentials:{
//     username:"vimal@072026.com",
//     password:"Pass@123"
// }
// });
// let response=await apiRequestContext.put("https://qavimalb.agilecrm.com/dev/api/contacts/edit-properties",{
// headers:{
//     "accept":"application/json",
//     "Content-Type":"application/json"
// },
// data:{ //
    
//     "id": "5068929090912256",
//     "properties": [
//         {
//             "type": "SYSTEM",
//             "name": "first_name",
//             "value": "Vimal Chand"
//         },
//         {
//             "type": "SYSTEM",
//             "name": "last_name",
//             "value": "Bind"
//         },
//         {
//             "type": "SYSTEM",
//             "name": "email",
//             "subtype": "work",
//             "value": "Shani@vimal.gmail.com"
//         },
//         {
//             "type": "SYSTEM",
//             "name": "address",
//             "value": "{\"address\":\"225 George Street\",\"city\":\"NSW\",\"state\":\"Sydney\",\"zip\":\"2000\",\"country\":\"Australia\"}"
//         }
//     ]
// }

// })
// let jsonResponce=await response.json();
// console.log(jsonResponce);

// expect(response.status()).toBe(200);



// })



