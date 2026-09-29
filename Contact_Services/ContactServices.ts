import { APIRequest, APIRequestContext, APIResponse } from '@playwright/test';
import testData from '../TestData/ContactsDataFormate.json'
import { BaseServices } from './BaseServices';


export class ContactServices extends BaseServices {
  request: APIRequestContext;
  constructor(request: APIRequestContext) {
    super(request);
    this.request = request;
  }
 
  async getContacts(endPoint: string): Promise<APIResponse> {
    return await this.getRequest( endPoint)
  }
   async createContacts(endPoint: any, jsonData: any): Promise<APIResponse> {
    return await this.postRequest(endPoint, jsonData)
  }
  async updateFullContact(endPoint:string,jsonData: any): Promise<APIResponse> {
    return await this.putRequest(endPoint,jsonData);
  }
  async updateContactWithpartiallyData(endPoint: string, jsonData: any): Promise<APIResponse> {
    return await this.putRequest( endPoint, jsonData);
  }
  async updateContactPropertiesByID(endPoint_With_ContactID: string, jsonData: any): Promise<APIResponse> {
    return await this.putRequest(endPoint_With_ContactID, jsonData);
  }
  async updateLeadScoreById(endPoint: string, jsonData: any): Promise<APIResponse> {
    return await this.putRequest(endPoint, jsonData);
  }
  async updateStarValueById(endPoint: string, jsonData: any): Promise<APIResponse> {
    return await this.putRequest(endPoint, jsonData);
  }
  async UpdateTagsValuebyID(endPoint: string, jsonData: any): Promise<APIResponse> {
    return await this.putRequest(endPoint, jsonData);
  }
  async deleteTagsValueByID(endPoint:string,jsonData:any): Promise<APIResponse>{
    return await this.putRequest(endPoint,jsonData);
  }
  async deleteSingleContactByID(endPoint:string): Promise<APIResponse>{
    return await this.deleteRequest(endPoint);
  }
async searchContactByEmail(endPoint:string): Promise<APIResponse>{
  return await this.getRequest(endPoint);
}

}
