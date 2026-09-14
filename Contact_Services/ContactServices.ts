import { APIRequest, APIRequestContext, APIResponse } from '@playwright/test';
import commonData from '../TestData/API_CommonData.json'
import testData from '../TestData/CreateContactData.json'
import { BaseServices } from './BaseServices';

export class ContactServices extends BaseServices{
    request: APIRequest;

    constructor(request: APIRequest) {
        super(request)
        this.request = request;
    }

  

    async createContacts() {
       return await this.postRequest(testData.URL.CreateContact_URL,testData.Data.CreateContact)
        
    }

    async updateFullContact() {
      return await this.putRequest(testData.URL.UpdateContact_URL,testData.Data.UpdateContact);

    }

    async fetchContacts() :Promise<APIResponse>{
      return await this.getRequest(testData.URL.GetContact_URL)
         
    }


    
    // async updateContactWithpartiallyData() {
    //   return await this.putRequest(testData.URL.UpdateContact_URL,testData.Data.UpdateContact);

    // }

}
