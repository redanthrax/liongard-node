import { OptionsWithUri } from 'request';

import { IExecuteFunctions, IHookFunctions, ILoadOptionsFunctions } from 'n8n-core';

import {
    IDataObject,
    IExecuteSingleFunctions,
    IHttpRequestMethods,
    IPollFunctions,
} from 'n8n-workflow';

export async function apiRequest(
    this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions | IPollFunctions | IHookFunctions,
    index: number,
    method: IHttpRequestMethods,
    endpoint: string,
    body: IDataObject = {},
    qs: IDataObject = {},
):Promise<IDataObject> {
    console.log('doing api request');
    const creds = await this.getCredentials('liongardApi');
    console.log(`${Buffer.from(`${creds.clientId}:${creds.clientSecret}`).toString('base64')}`);
    const options: OptionsWithUri = {
        headers: {
            accept: 'application/json',
            'X-ROAR-API-KEY': `${Buffer.from(`${creds.clientId}:${creds.clientSecret}`).toString('base64')}`
        },
        method,
        qs,
        uri: `https://${creds.deployment}.app.liongard.com/api/v1/${endpoint}`,
        json: true,
    };

    console.log(options);

    //@ts-ignore
    const responseData = (await this.helpers.request(options)) as IDataObject;
    console.log('did api request')
    console.log(responseData);
    return responseData;
}
