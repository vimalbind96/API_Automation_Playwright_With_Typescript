import { APIRequest, APIRequestContext, APIResponse } from '@playwright/test';

export class BaseServices {
    request: APIRequest
    constructor(request: APIRequest) {
        this.request = request;
    }
    async getRequest(endPoint: string,): Promise<APIResponse> {
        let apiContaxt: APIRequestContext = await this.request.newContext();
        let response:APIResponse = await apiContaxt.get(endPoint)
        return response;
    }

    async postRequest(endPoint: string, payloadData: any) {
        let apiContaxt: APIRequestContext = await this.request.newContext();

        let response:APIResponse = await apiContaxt.post(endPoint,{
            data: payloadData
        })
        return response;
    }

    async putRequest(endPoint: string, jsonData: any): Promise<APIResponse> {
        let apiContaxt: APIRequestContext = await this.request.newContext();

        let response:APIResponse = await apiContaxt.put(endPoint, {
            data: jsonData
        })
        return response;
    }
    async patchRequest(endPoint: string,jsonData:any): Promise<APIResponse> {
        let apiContaxt: APIRequestContext = await this.request.newContext();

        let response:APIResponse = await apiContaxt.patch(endPoint, {
            data:jsonData
        })
        return response;
    }
    async deleteRequest(endPoint: string,): Promise<APIResponse> {
        let apiContaxt: APIRequestContext = await this.request.newContext();

        let response:APIResponse = await apiContaxt.delete(endPoint)
        return response;
    }

}