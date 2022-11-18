import { IExecuteFunctions } from 'n8n-core';

import {
		INodeType,
		INodeTypeDescription,
} from 'n8n-workflow';

import { loadOptions } from './methods';
import { router } from './actions/router';

import * as alert from './actions/alert';

export class Liongard implements INodeType {
		description: INodeTypeDescription = {
            displayName: 'Liongard',
            name: 'Liongard',
            icon: 'file:liongard.svg',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Utilize the Liongard API',
            defaults: {
                    name: 'Liongard',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                    {
                            name: 'liongardApi',
                            required: true,
                    },
            ],
            requestDefaults: {
                    headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                    },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options:
                        [
                        {
                            name: 'Alert',
                            value: 'alert',
                        }
                    ],
                    default: 'alert',
                },
                ...alert.description,
            ],
        };

		methods = { loadOptions };

		async execute(this: IExecuteFunctions) {
				return await router.call(this);
		}
}
