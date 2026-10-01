import { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseServices } from './BaseServices';
import { endPoints } from '../endPoint';

export class ContactServices extends BaseServices {
  request: APIRequestContext;
  constructor(request: APIRequestContext) {
    super(request);
    this.request = request;
  }
 
async getContact_By_Id(contact_id:string): Promise<APIResponse> {
    return await this.getRequest(endPoints.getContacts+contact_id);
  }


  async getContacts(): Promise<APIResponse> {
    return await this.getRequest(endPoints.getContacts);
  }
   async createContacts(jsonData: any): Promise<APIResponse> {
    return await this.postRequest(endPoints.createContact, jsonData)
  }
  async updateFullContact(endPoint:string,jsonData: any): Promise<APIResponse> {
    return await this.putRequest(endPoint,jsonData);
  }
  async updateContactWithpartiallyData(jsonData: any): Promise<APIResponse> {
    return await this.putRequest( endPoints.updateContactWithPartialyData, jsonData);
  }
  async updateContactPropertiesByID(endPoint_With_ContactID: string, jsonData: any): Promise<APIResponse> {
    return await this.putRequest(endPoint_With_ContactID, jsonData);
  }
  async updateLeadScoreById( jsonData: any): Promise<APIResponse> {
    return await this.putRequest(endPoints.updateLeadScoreBy_Id, jsonData);
  }
  async updateStarValueById( jsonData: any): Promise<APIResponse> {
    return await this.putRequest(endPoints.updateStarValueById, jsonData);
  }
  async UpdateTagsValuebyID( jsonData: any): Promise<APIResponse> {
    return await this.putRequest(endPoints.updateTagValueById, jsonData);
  }
  async deleteTagsValueByID(jsonData:any): Promise<APIResponse>{
    return await this.putRequest(endPoints.deleteTagValueById,jsonData);
  }
  async deleteSingleContactByID(contact_Id:string): Promise<APIResponse>{
    return await this.deleteRequest(endPoints.deleteSingleContactById+contact_Id);
  }
async searchContactByEmail(emailId:string): Promise<APIResponse>{
  return await this.getRequest(endPoints.searchContactBy_Email+emailId);
}

}
