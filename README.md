# ![LOGO](logo.png) LetMC Api V2, Free (Tier 1) **flow**ground Connector

## Description

A generated **flow**ground connector for the LetMC Api V2, Free (Tier 1) API (version v2-free-tier).

Generated from: https://api.apis.guru/v2/specs/letmc.com/free-tier/v2-free-tier/swagger.json<br/>
Generated at: 2019-06-06T16:12:25+03:00

## API Description



## Authorization

Supported authorization schemes:
- API Key- Basic Authentication

## Actions

### A collection of all the areas for a company

*Tags:* `AreaController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### Get a specific area given its unique Object ID (OID)

*Tags:* `AreaController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `areaID` - _required_ - The unique ID of the Area

### All branches defined for a company

*Tags:* `BranchController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### Get a specific branch given its unique Object ID (OID)

*Tags:* `BranchController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `branchID` - _required_ - The unique ID of the Branch

### Information about a specific company

*Tags:* `CompanyController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name

### A collection of all counties available for a company

*Tags:* `CountyController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### Get a specific county given its unique Object ID (OID)

*Tags:* `CountyController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `countyID` - _required_ - The unique ID of the County

### A collection of branches that manage a specific county

*Tags:* `CountyController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `countyID` - _required_ - The unique ID of the County
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### A collection of all diary allocations

*Tags:* `DiaryController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### Get a specific diary allocation given its unique Object ID (OID)

*Tags:* `DiaryController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `diaryAllocationID` - _required_ - The unique ID of the DiaryAllocation

### A collection of all diary appointments

*Tags:* `DiaryController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### Get a specific diary appointment given its unique Object ID (OID)

*Tags:* `DiaryController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `diaryAppointmentID` - _required_ - The unique ID of the DiaryAppointment

### A collection of all diary appointment types

*Tags:* `DiaryController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### Get a specific diary appointment type given its unique Object ID (OID)

*Tags:* `DiaryController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `diaryAppointmentTypeID` - _required_ - The unique ID of the DiaryAppointmentType

### Search all properties available for rent given a range of search criteria.

*Tags:* `LettingsController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `branchID` - _required_ - The unique ID of the Branch
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)
* `areaID` - _optional_ - The unique ID of the Area
* `rentMinimum` - _optional_ - The minimum advertised rent to search for
* `rentMaximum` - _optional_ - The maximum advertised rent to search for
* `maximumTenants` - _optional_ - The maximum number of tenants a property can accommodate
* `wantSharedProperties` - _optional_ - Search for shared properties?
* `wantStudentProperties` - _optional_ - Search for student properties?

### Search all properties available for rent given a range of search criteria and dates.

*Tags:* `LettingsController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `branchID` - _required_ - The unique ID of the Branch
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)
* `rangeStartDate` - _required_ - The date to search from
* `rangeEndDate` - _required_ - The date to search to
* `areaID` - _optional_ - The unique ID of the Area
* `rentMinimum` - _optional_ - The minimum advertised rent to search for
* `rentMaximum` - _optional_ - The maximum advertised rent to search for
* `maximumTenants` - _optional_ - The maximum number of tenants a property can accommodate
* `wantSharedProperties` - _optional_ - Search for shared properties?
* `wantStudentProperties` - _optional_ - Search for student properties?

### A collection of all the company's tenancies

*Tags:* `LettingsController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### Get a specific tenancy given its unique Object ID (OID)

*Tags:* `LettingsController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `tenancyID` - _required_ - The unique ID of the Tenancy

### Downloads the brochure relating to the latest advertised rental of a property

*Tags:* `LettingsController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `tenancyID` - _required_ - The unique ID of the tenancy

### A collection of all photos in the company

*Tags:* `PhotoController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### Get a specific photo given its unique Object ID (OID)

*Tags:* `PhotoController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `photoID` - _required_ - The unique ID of the Photo

### Downloads the photo of a property given the property and photo ID.

*Tags:* `PhotoController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `photoID` - _required_ - The unique ID of the photo on the property
* `width` - _optional_ - An optional parameter specifying the image width
* `height` - _optional_ - An optional parameter specifying the image height

### A collection of all properties within a company

*Tags:* `PropertyController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### Get a specific property given its unique Object ID (OID)

*Tags:* `PropertyController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `propertyID` - _required_ - The unique ID of the Property

### A collection of facilities linked to a block, property or room

*Tags:* `PropertyController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `propertyID` - _required_ - The unique ID of the Property
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### A collection showing all the photos linked to a specific block, property or room

*Tags:* `PropertyController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `propertyID` - _required_ - The unique ID of the Property
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### A collection of the rooms that belong to this property or block

*Tags:* `PropertyController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `propertyID` - _required_ - The unique ID of the Property
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### A collection of all tenancies associated with this block, property or room

*Tags:* `PropertyController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `propertyID` - _required_ - The unique ID of the Property
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### Downloads the energy efficiency report (EER) graph for a property

*Tags:* `PropertyController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `propertyStructureID` - _required_ - The unique ID of the property structure

### Downloads the environmental impact report (EIR) graph for a property

*Tags:* `PropertyController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `propertyStructureID` - _required_ - The unique ID of the property structure

### Search all sales properties available given a range of search criteria

*Tags:* `SalesController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `branchID` - _required_ - The unique ID of the Branch
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)
* `onlyDevelopement` - _required_ - Show only development properties?
* `onlyInvestements` - _required_ - Show only investment properties?
* `minimumPrice` - _optional_ - The minimum price to search for
* `maximumPrice` - _optional_ - The maximum price to search for
* `minimumBeds` - _optional_ - The minimum beds to search for
* `minimumBathrooms` - _optional_ - The minimum bathrooms to search for
* `minimumEnsuites` - _optional_ - The minimum ensuite bathrooms to search for
* `minimumToilets` - _optional_ - The minimum toilets to search for
* `minimumReception` - _optional_ - The minimum reception rooms to search for

### Downloads the energy efficiency report (EER) graph for a sales instruction

*Tags:* `SalesController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `salesInstructionID` - _required_ - The unique ID of the SalesInstruction

### Downloads the energy efficiency report (EIR) graph for a sales instruction

*Tags:* `SalesController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `salesInstructionID` - _required_ - The unique ID of the SalesInstruction

### A collection of all sales feature types linked to a company

*Tags:* `SalesController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### Get a specific sales feature type given its unique Object ID (OID)

*Tags:* `SalesController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `salesFeatureTypeID` - _required_ - The unique ID of the SalesFeatureType

### A collection of all sales instructions linked to a company

*Tags:* `SalesController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### Get a specific sales instruction given its unique Object ID (OID)

*Tags:* `SalesController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `salesInstructionID` - _required_ - The unique ID of the SalesInstruction

### A collection of all features linked to a sales instruction

*Tags:* `SalesController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `salesInstructionID` - _required_ - The unique ID of the SalesInstruction
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### A collection of floor plans linked to an instruction

*Tags:* `SalesController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `salesInstructionID` - _required_ - The unique ID of the SalesInstruction
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### A collection of photos linked to an instruction

*Tags:* `SalesController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `salesInstructionID` - _required_ - The unique ID of the SalesInstruction
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### A collection of rooms linked to an instruction

*Tags:* `SalesController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `salesInstructionID` - _required_ - The unique ID of the SalesInstruction
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### A collection of all the staff members linked to a specific company

*Tags:* `StaffController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### Get a specific application staff given its unique Object ID (OID)

*Tags:* `StaffController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `applicationStaffID` - _required_ - The unique ID of the ApplicationStaff

## License

**flow**ground :- Telekom iPaaS / letmc-com-free-tier-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
