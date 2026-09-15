import { APIRequest, APIRequestContext, APIResponse } from '@playwright/test';
import testData from '../TestData/CreateContactData.json'
import { BaseServices } from './BaseServices';

export class ContactServices extends BaseServices{
    request: APIRequest;

    constructor(request: APIRequest) {
        super(request)
        this.request = request;
    }
    async createContacts(jsonData:any) {
       return await this.postRequest(testData.URL.CreateContact_URL,jsonData)
        
    }

    async updateFullContact(jsonData:any) {
      return await this.putRequest(testData.URL.UpdateContact_URL,jsonData);

    }

    async getContacts() :Promise<APIResponse>{
      return await this.getRequest(testData.URL.GetContact_URL)
         
    }


    
    // async updateContactWithpartiallyData() {
    //   return await this.patchRequest(testData.URL.UpdateContact_URL,testData.Data.UpdateContact);

    // }

}
