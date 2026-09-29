import { APIRequest, APIRequestContext, APIResponse } from '@playwright/test';

export class BaseServices {
    apiContaxt: APIRequestContext
    constructor(request: APIRequestContext) {
        this.apiContaxt = request;
    }
    async getRequest(endPoint: string,): Promise<APIResponse> {
        let response:APIResponse = await this.apiContaxt.get(endPoint)
        return response;
    }
    async postRequest(endPoint: string, payloadData: any) {

        let response:APIResponse = await this.apiContaxt.post(endPoint,{
            data: payloadData
        })
        return response;
    }
    async putRequest(endPoint: string, jsonData: any): Promise<APIResponse> {
        let response:APIResponse = await this.apiContaxt.put(endPoint, {
            data: jsonData
        })
        return response;
    }
    async patchRequest(endPoint: string,jsonData:any): Promise<APIResponse> {
        let response:APIResponse = await this.apiContaxt.patch(endPoint, {
            data:jsonData
        })
        return response;
    }
    async deleteRequest(endPoint: string,): Promise<APIResponse> {
        let response:APIResponse = await this.apiContaxt.delete(endPoint)
        return response;
    }

 }