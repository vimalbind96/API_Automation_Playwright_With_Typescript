import { test } from "../Fixture/fixture";
import { APIResponse, expect } from "@playwright/test";
import testData from '../TestData/ContactsDataFormate.json'


test('listing contacts', async ({ contacts }) => {
    let response: APIResponse = await contacts.getContacts();
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    expect(response.status()).toBe(200);
});


test('verify Contact Creation', async ({ contacts }) => {
    let time = Date.now();
    let contactdata = structuredClone(testData.Data.CreateContact);
    let proData = contactdata.properties;
    for (let data of proData) {
        if (data.name == 'email') {
            data.value = "vimal_" + time + "@gmail.com";
        }
    }

    let response: APIResponse = await contacts.createContacts(contactdata);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    expect(response.status()).toBe(200);
    expect(jsonResponse.properties[0].value).toBe("vimal");
    expect(jsonResponse.properties[1].value).toBe("Bind");
    expect(jsonResponse.properties[2].value).toBe("vimal_" + time + "@gmail.com");
})


test('get contact by ID', async ({ contacts }) => {
    let response: APIResponse = await contacts.getContact_By_Id("4509273880723456");
    let jsonBody = await response.json();
    expect(response.status()).toBe(200);
    console.log(jsonBody)
    console.log(jsonBody.id);
});



test('update contacts with  data', async ({ contacts }) => {
    let time = Date.now();
    let updateData = structuredClone(testData.Data.UpdateContact);
    updateData.tags[2] = "QA Engneer";
    updateData.id = "4730199113138176";
    let proData = updateData.properties;
    for (let data of proData) {
        if (data.name == 'email') {
            data.value = "vimalB" + time + "@gmail.com";
        }
    }

    let response: APIResponse = await contacts.updateContactWithpartiallyData(updateData);
    let jsonBody = await response.json();
    console.log(jsonBody);
    expect(jsonBody.id).toBe(4730199113138176);
    expect(jsonBody.properties[13].value).toBe("vimalB" + time + "@gmail.com");
    expect(jsonBody.tags[0]).toBe("Lead")
})



test('Update lead score by ID', async ({ contacts }) => {
    let scoreID = structuredClone(testData.Data.updateLeadScore_ById);
    scoreID.id = "4730199113138176";
    scoreID.lead_score = 103;

    let response: APIResponse = await contacts.updateLeadScoreById(scoreID);
    let jsonBody = await response.json();
    console.log(jsonBody);
    expect(response.status()).toBe(200);
    console.log(response.statusText());
    expect(jsonBody.id).toBe(4730199113138176);
})



test('Update star value by ID', async ({ contacts }) => {
    let starValue = structuredClone(testData.Data.updateStarValueByID);
    starValue.id = "6337378794536960",
        starValue.star_value = 4;

    let response: APIResponse = await contacts.updateStarValueById(starValue);
    let jsonBody = await response.json();
    console.log(jsonBody)
    expect(jsonBody.id).toBe(6337378794536960);
    expect(jsonBody.star_value).toBe(4);
})


test('Update tags value by ID', async ({ contacts }) => {

    let tagsValue = structuredClone(testData.Data.updateTagsValue);
    tagsValue.id = "6337378794536960";
    tagsValue.tags[0] = "QA Analysis EVA";


    let response: APIResponse = await contacts.UpdateTagsValuebyID(tagsValue)
    let jsonBody = await response.json();
    expect(jsonBody.id).toBe(6337378794536960);
    expect(response.status()).toBe(200);
    console.log(jsonBody);
})



test('Delete tags value by ID', async ({ contacts }) => {
    let tagJsonData = structuredClone(testData.Data.deleteTagsValue);
    tagJsonData.id = "4730199113138176";
    tagJsonData.tags[0] = "Lead";

    let response = await contacts.deleteTagsValueByID(tagJsonData);
    let jsonBody = await response.json();
    console.log(jsonBody);
})
test('Delete single contact', async ({ contacts }) => {
    let response: APIResponse = await contacts.deleteSingleContactByID("5244611389489152");
    console.log(response.status());
    expect(response.status()).toBe(204);
})
test('Search contact by email', async ({ contacts }) => {
    let response: APIResponse = await contacts.searchContactByEmail("vimaly11@gmail.com");
    let jsonBody = await response.json();
    console.log(jsonBody);
    expect(response.status()).toBe(200);
    expect(jsonBody.properties[2].value).toBe("vimaly11@gmail.com");
})