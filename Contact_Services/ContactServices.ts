import { APIRequest, APIRequestContext, APIResponse } from '@playwright/test';
import testData from '../TestData/ContactsDataFormate.json'
import { BaseServices } from './BaseServices';


export class ContactServices extends BaseServices {
  request: APIRequest;
  constructor(request: APIRequest) {
    super(request);
    this.request = request;
  }
  async createContacts(endPoint: any, jsonData: any): Promise<APIResponse> {
    return await this.postRequest(testData.URL.baseUrl + endPoint, jsonData)
  }
  async updateFullContact(jsonData: any): Promise<APIResponse> {
    return await this.putRequest(testData.URL.baseUrl, jsonData);
  }
  async getContacts(endPoint: string): Promise<APIResponse> {
    return await this.getRequest(testData.URL.baseUrl + endPoint)
  }
  async updateContactWithpartiallyData(endPoint: string, jsonData: any): Promise<APIResponse> {
    return await this.putRequest(testData.URL.baseUrl + endPoint, jsonData);
  }
  async updateContactPropertiesByID(contactID: number, jsonData: any): Promise<APIResponse> {
    return await this.putRequest(testData.URL.baseUrl + contactID, jsonData);
  }
  async updateLeadScoreById(endPoint: string, jsonData: any): Promise<APIResponse> {
    return await this.putRequest(testData.URL.baseUrl + endPoint, jsonData);
  }
  async updateStarValueById(endPoint: string, jsonData: any): Promise<APIResponse> {
    return await this.putRequest(testData.URL.baseUrl + endPoint, jsonData);
  }
  async UpdateTagsValuebyID(endPoint: string, jsonData: any): Promise<APIResponse> {
    return await this.putRequest(testData.URL.baseUrl + endPoint, jsonData);

  }









}
