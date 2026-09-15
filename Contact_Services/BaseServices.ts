import { APIRequest, APIRequestContext, APIResponse } from '@playwright/test';
import testData from '../TestData/API_CommonData.json'

export class BaseServices {

    request: APIRequest
    constructor(request: APIRequest) {
        this.request = request;
    }

    async getRequest(endPoint: string,): Promise<APIResponse> {
        let apiContaxt: APIRequestContext = await this.request.newContext({
            httpCredentials: {
                username: testData.Authentication_Credential.UserName,
                password: testData.Authentication_Credential.Password
            }
        });

        let response = await apiContaxt.get(endPoint, {
            headers: {
                "accept": "application/json",
            }
        })
        return response;
    }

    async postRequest(endPoint: string, payloadData: any) {
        let apiContaxt: APIRequestContext = await this.request.newContext({
            httpCredentials: {
                username: testData.Authentication_Credential.UserName,
                password: testData.Authentication_Credential.Password
            }
        });

        let response = await apiContaxt.post(endPoint, {
            headers: {
                "accept": "application/json",
                "Content-Type":"application/json"
            },
            data: payloadData
        })
        return response;
    }

    async putRequest(endPoint: string, payloadData: any): Promise<APIResponse> {
        let apiContaxt: APIRequestContext = await this.request.newContext({
            httpCredentials: {
                username: testData.Authentication_Credential.UserName,
                password: testData.Authentication_Credential.Password
            }
        });

        let response = await apiContaxt.put(endPoint, {
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            data: payloadData
        })
        return response;
    }

    async patchRequest(endPoint: string,jsonData:any): Promise<APIResponse> {
        let apiContaxt: APIRequestContext = await this.request.newContext({
            httpCredentials: {
                username: testData.Authentication_Credential.UserName,
                password: testData.Authentication_Credential.Password
            }
        });

        let response = await apiContaxt.patch(endPoint, {
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            data:jsonData
        })
        return response;
    }

    async deleteRequest(endPoint: string,): Promise<APIResponse> {
        let apiContaxt: APIRequestContext = await this.request.newContext({
            httpCredentials: {
                username: testData.Authentication_Credential.UserName,
                password: testData.Authentication_Credential.Password
            }
        });

        let response = await apiContaxt.delete(endPoint, {
            headers: {
                "accept": "application/json",
            }
        })
        return response;
    }

}