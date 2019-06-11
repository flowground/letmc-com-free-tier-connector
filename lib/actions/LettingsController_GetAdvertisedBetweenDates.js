/**
 * Auto-generated action file for "LetMC Api V2, Free (Tier 1)" API.
 *
 * Generated at: 2019-06-06T13:12:25.577Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / letmc-com-free-tier-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'LettingsController_GetAdvertisedBetweenDates'
 * Endpoint Path: '/v2/tier1/{shortName}/lettings/advertisedbetweendates'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "shortName",
    "branchID",
    "offset",
    "count",
    "rangeStartDate",
    "rangeEndDate",
    "areaID",
    "rentMinimum",
    "rentMaximum",
    "maximumTenants",
    "wantSharedProperties",
    "wantStudentProperties"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "shortName": "shortName",
    "branchID": "branchID",
    "offset": "offset",
    "count": "count",
    "rangeStartDate": "rangeStartDate",
    "rangeEndDate": "rangeEndDate",
    "areaID": "areaID",
    "rentMinimum": "rentMinimum",
    "rentMaximum": "rentMaximum",
    "maximumTenants": "maximumTenants",
    "wantSharedProperties": "wantSharedProperties",
    "wantStudentProperties": "wantStudentProperties"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['apiKey'] = cfg['auth_apiKey'];
    securities['basic'] = {username: cfg.auth_username, password: cfg.auth_password};;

    let callParams = {
        spec: spec,
        operationId: 'LettingsController_GetAdvertisedBetweenDates',
        pathName: '/v2/tier1/{shortName}/lettings/advertisedbetweendates',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}