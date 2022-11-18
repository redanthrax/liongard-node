import { IExecuteFunctions } from 'n8n-core';

import {
		IDataObject,
		INodeExecutionData,
} from 'n8n-workflow';

import { Liongard } from './Interfaces';

import * as alert from './alert';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    console.log('router');
    const items = this.getInputData();
    const operationResult: INodeExecutionData[] = [];
    let responseData: IDataObject | IDataObject[] = [];

    for (let i = 0; i < items.length; i++) {
        const resource = this.getNodeParameter<Liongard>('resource', i);
        const operation = this.getNodeParameter('operation', i);

        const liongard = {
            resource,
            operation,
        } as Liongard;

        try {
            switch(liongard.resource) {
                case 'alert':
                    responseData = await alert[liongard.operation].execute.call(this, i);
                    break;
                default:
                    break;
            }
        } catch(err) {
        }
    }

    return [operationResult];
}
