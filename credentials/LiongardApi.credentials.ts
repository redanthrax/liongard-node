
import {
		ICredentialType,
		INodeProperties,
} from 'n8n-workflow';

export class LiongardApi implements ICredentialType {
		name = 'liongardApi';
		displayName = 'Liongard Credentials API';
		documentationUrl = 'https://github.com/redanthrax/liongard-node';
		properties: INodeProperties[] = [
						{
										displayName: 'Deployment https://{deployment}.app.liongard.com',
										name: 'deployment',
										type: 'string',
										default: '',
										placeholder: 'deployment',
						},
						{
										displayName: 'Access ID',
										name: 'accessId',
										type: 'string',
										default: '',
						},
						{
										displayName: 'Access Secret',
										name: 'accessSecret',
										type: 'string',
										typeOptions: {
														password: true,
										},
										default: '',
						},
		];
}
