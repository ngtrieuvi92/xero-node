import { Employee, EmployeesResponse } from '../../interfaces/AccountingAPI';
import { AccountingAPIClient } from '../../endpoints/AccountingAPIClient';
import * as path from 'path';
import * as fs from 'fs';
import { InMemoryOAuthLib } from './InMemoryOAuthLib';
import { allEmployeesResponse, createResponse } from './response-examples/employees.response.examples';

const privateKeyFile = path.resolve(__dirname + '/test-privatekey.pem');
const privateKey = fs.readFileSync(privateKeyFile, 'utf8');

describe('/employees', () => {
	describe('and getting', () => {
		describe('all employees', () => {
			let result: EmployeesResponse;
			const inMemoryOAuth = new InMemoryOAuthLib();

			beforeAll(async () => {
				inMemoryOAuth.callbackResultsForNextCall(null, JSON.stringify(allEmployeesResponse), { statusCode: 200 });

				const xeroClient = new AccountingAPIClient({
					AppType: 'private',
					ConsumerKey: 'RDGDV41TRLQZDFSDX96TKQ2KRJIW4C',
					ConsumerSecret: 'DJ3CMGDB0DIIA9DNEEJMRLZG0BWE7Y',
					PrivateKeyCert: privateKey
				}, null, inMemoryOAuth);

				result = await xeroClient.employees.get();
			});

			it('the response is defined', () => {
				expect(result).not.toBeNull();
			});

			it('matches the expected response', () => {
				expect(result).toMatchObject(allEmployeesResponse);
			});

			it('called the correct URL', () => {
				inMemoryOAuth.lastCalledThisURL('https://api.xero.com/api.xro/2.0/employees');
			});
		});

	});

	describe('and creating', () => {
		describe('an employee', () => {
			let result: EmployeesResponse;
			const inMemoryOAuth = new InMemoryOAuthLib();

			beforeAll(async () => {
				inMemoryOAuth.callbackResultsForNextCall(null, JSON.stringify(createResponse), {stausCode: 200});

				const xeroClient = new AccountingAPIClient({
					AppType: 'private',
					ConsumerKey: 'RDGDV41TRLQZDFSDX96TKQ2KRJIW4C',
					ConsumerSecret: 'DJ3CMGDB0DIIA9DNEEJMRLZG0BWE7Y',
					PrivateKeyCert: privateKey
				}, null, inMemoryOAuth);

				const employee: Employee = {
					FirstName: 'Bryan',
					LastName: 'Tee'
				};

				result = await xeroClient.employees.create(employee);
			});

			it('the response is defined', () => {
				expect(result).not.toBeNull();
			});

			it('matches the expected response', () => {
				expect(result).toMatchObject(createResponse);
			});

			it('called the correct URL', () => {
				inMemoryOAuth.lastCalledThisURL('https://api.xero.com/api.xro/2.0/employees');
			});
		});

	});
});
