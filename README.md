# Getting started

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:
* `node --version`
* `npm -version` 
![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Genius%20Referrals-Node)  

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):
* `npm install`
![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Genius%20Referrals-Node)
![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder. 

Once dependencies are resolved, you will need to move the folder `GeniusReferrals ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`
![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.
![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Genius%20Referrals-Node)


### 2. Creating a Test File
Now right click on the folder name and select the `New File` option to create a new test file.    Save it as `index.js` Now import the generated NodeJS library using the following lines of code:
```JavaScript
var lib = require('lib');
```
Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Genius%20Referrals-Node)
![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Genius%20Referrals-Node)

### 3. Running The Test File
To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:  
`node index.js`
![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Genius%20Referrals-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 
###### (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2
###### (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3
###### (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Genius ReferralsController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TESTTIMEOUT` parameter's value in `Configuration.js`.  
> ***NOTE:*** Changing default timeout is available for only Binary/File type endpoint tests

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Genius%20ReferralsController)

## Initialization

### Authentication
In order to setup authentication and initialization of the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| contentType | The content type |
| xAuthToken | Your API Token, you can get your token here https://www.geniusreferrals.com/en/settings/api-access |



API client can be initialized as following:

```JavaScript
// Configuration parameters and credentials
$contentType = "application/json"; // The content type
$xAuthToken = "3b9d11374b602fb47b987dff90f1c5940a1f377f"; // Your API Token, you can get your token here https://www.geniusreferrals.com/en/settings/api-access

var lib = require('lib');
```

## Class Reference

### <a name="list_of_controllers"></a>List of Controllers

* [RootsController](#roots_controller)
* [AuthenticationsController](#authentications_controller)
* [AdvocatesController](#advocates_controller)
* [AccountsController](#accounts_controller)
* [ReportsController](#reports_controller)
* [ReferralsController](#referrals_controller)
* [RedemptionRequestsController](#redemption_requests_controller)
* [BonusesController](#bonuses_controller)
* [CampaignsController](#campaigns_controller)

### <a name="roots_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RootsController") RootsController

#### Get singleton instance

The singleton instance of the ``` RootsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.RootsController;
```

#### <a name="get_root"></a>![Method: ](https://apidocs.io/img/method.png ".RootsController.getRoot") getRoot

> The root of the API


```javascript
function getRoot(callback)
```

#### Example Usage

```javascript


    controller.getRoot(function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="authentications_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AuthenticationsController") AuthenticationsController

#### Get singleton instance

The singleton instance of the ``` AuthenticationsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AuthenticationsController;
```

#### <a name="get_authentications"></a>![Method: ](https://apidocs.io/img/method.png ".AuthenticationsController.getAuthentications") getAuthentications

> Allow clients to test authentication on Genius Referrals platform.


```javascript
function getAuthentications(callback)
```

#### Example Usage

```javascript


    controller.getAuthentications(function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="advocates_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AdvocatesController") AdvocatesController

#### Get singleton instance

The singleton instance of the ``` AdvocatesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AdvocatesController;
```

#### <a name="delete_advocate"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.deleteAdvocate") deleteAdvocate

> Delete an advocate


```javascript
function deleteAdvocate(accountSlug, advocateToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var advocateToken = advocate_token;

    controller.deleteAdvocate(accountSlug, advocateToken, function(error, response, context) {

    
	});
```



#### <a name="put_advocate"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.putAdvocate") putAdvocate

> Update an advocate.


```javascript
function putAdvocate(accountSlug, advocateToken, advocateForm, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |
| advocateForm |  ``` Required ```  | The body of the request |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var advocateForm = new AdvocateForm({"key":"value"});

    controller.putAdvocate(accountSlug, advocateToken, advocateForm, function(error, response, context) {

    
	});
```



#### <a name="post_advocate"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.postAdvocate") postAdvocate

> Create a new advocate.


```javascript
function postAdvocate(accountSlug, advocateForm, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateForm |  ``` Required ```  | The body of the request |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var advocateForm = new AdvocateForm({"key":"value"});

    controller.postAdvocate(accountSlug, advocateForm, function(error, response, context) {

    
	});
```



#### <a name="get_advocate"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.getAdvocate") getAdvocate

> Get an advocate by a given token.


```javascript
function getAdvocate(accountSlug, advocateToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var advocateToken = advocate_token;

    controller.getAdvocate(accountSlug, advocateToken, function(error, response, context) {

    
	});
```



#### <a name="delete_advocates"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.deleteAdvocates") deleteAdvocates

> Delete all advocates


```javascript
function deleteAdvocates(accountSlug, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |



#### Example Usage

```javascript

    var accountSlug = account_slug;

    controller.deleteAdvocates(accountSlug, function(error, response, context) {

    
	});
```



#### <a name="get_advocates"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.getAdvocates") getAdvocates

> Get the list of advocates


```javascript
function getAdvocates(accountSlug, page, limit, filter, sort, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| page |  ``` Optional ```  ``` DefaultValue ```  | Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result. |
| limit |  ``` Optional ```  ``` DefaultValue ```  | Maximum number of results to return in the response. Default (10), threshold (100) |
| filter |  ``` Optional ```  | Allowed fields: name, lastname, email, advocate_token, bonus_exchange_method_slug, campaign_slug, can_refer, is_referral, from, to, created. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah' |
| sort |  ``` Optional ```  | Allowed fields: name, lastname, email, created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort='last_name\|first_name\|-hire_date' |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var page = 216;
    var limit = 216;
    var filter = "filter";
    var sort = "sort";

    controller.getAdvocates(accountSlug, page, limit, filter, sort, function(error, response, context) {

    
	});
```



#### <a name="patch_advocate"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.patchAdvocate") patchAdvocate

> Update partial elements of an advocate.


```javascript
function patchAdvocate(accountSlug, advocateToken, advocatePatchForm, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |
| advocatePatchForm |  ``` Required ```  ``` Collection ```  | The body of the request |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var advocatePatchForm = [{"key":"value"}].map(function(elem) {
        return new Advocate Patch Form(elem);
    });

    controller.patchAdvocate(accountSlug, advocateToken, advocatePatchForm, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="accounts_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AccountsController") AccountsController

#### Get singleton instance

The singleton instance of the ``` AccountsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AccountsController;
```

#### <a name="get_account"></a>![Method: ](https://apidocs.io/img/method.png ".AccountsController.getAccount") getAccount

> Get an account by a given slug.


```javascript
function getAccount(accountSlug, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |



#### Example Usage

```javascript

    var accountSlug = account_slug;

    controller.getAccount(accountSlug, function(error, response, context) {

    
	});
```



#### <a name="get_accounts"></a>![Method: ](https://apidocs.io/img/method.png ".AccountsController.getAccounts") getAccounts

> Get the list of accounts.


```javascript
function getAccounts(page, limit, filter, sort, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  | Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result. |
| limit |  ``` Optional ```  | Maximum number of results to return in the response. Default (10), threshold (100) |
| filter |  ``` Optional ```  | Allowed fields: name. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah' |
| sort |  ``` Optional ```  | Allowed fields: name, created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort=last_name\|first_name\|-hire_date |



#### Example Usage

```javascript

    var page = 216;
    var limit = 216;
    var filter = "filter";
    var sort = "sort";

    controller.getAccounts(page, limit, filter, sort, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="reports_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ReportsController") ReportsController

#### Get singleton instance

The singleton instance of the ``` ReportsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ReportsController;
```

#### <a name="get_referrals_summary_per_origin"></a>![Method: ](https://apidocs.io/img/method.png ".ReportsController.getReferralsSummaryPerOrigin") getReferralsSummaryPerOrigin

> Get referrals summary per referral origin.


```javascript
function getReferralsSummaryPerOrigin(advocateToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| advocateToken |  ``` Required ```  | The advocate's token |



#### Example Usage

```javascript

    var advocateToken = advocate_token;

    controller.getReferralsSummaryPerOrigin(advocateToken, function(error, response, context) {

    
	});
```



#### <a name="get_bonuses_summary_per_origin"></a>![Method: ](https://apidocs.io/img/method.png ".ReportsController.getBonusesSummaryPerOrigin") getBonusesSummaryPerOrigin

> Get bonuses summary per referral origin.


```javascript
function getBonusesSummaryPerOrigin(advocateToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| advocateToken |  ``` Required ```  | The advocate's token |



#### Example Usage

```javascript

    var advocateToken = advocate_token;

    controller.getBonusesSummaryPerOrigin(advocateToken, function(error, response, context) {

    
	});
```



#### <a name="get_top_advocates"></a>![Method: ](https://apidocs.io/img/method.png ".ReportsController.getTopAdvocates") getTopAdvocates

> Get top 10 advocates.


```javascript
function getTopAdvocates(accountSlug, campaignSlug, limit, from, to, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Optional ```  | The account identifier |
| campaignSlug |  ``` Optional ```  | The campaign identifier |
| limit |  ``` Optional ```  | Maximum number of results to return in the response. Default (10) |
| from |  ``` Optional ```  | The datetime were the range of the search starts |
| to |  ``` Optional ```  | The datetime were the range of the search stops |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var campaignSlug = campaign_slug;
    var limit = 216;
    var from = date("D M d, Y G:i");
    var to = date("D M d, Y G:i");

    controller.getTopAdvocates(accountSlug, campaignSlug, limit, from, to, function(error, response, context) {

    
	});
```



#### <a name="get_share_daily_participation"></a>![Method: ](https://apidocs.io/img/method.png ".ReportsController.getShareDailyParticipation") getShareDailyParticipation

> Get share daily participation.


```javascript
function getShareDailyParticipation(accountSlug, campaignSlug, advocateToken, from, to, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Optional ```  | The account identifier |
| campaignSlug |  ``` Optional ```  | The campaign identifier |
| advocateToken |  ``` Optional ```  | The advocate's token |
| from |  ``` Optional ```  | The datetime were the range of the search starts |
| to |  ``` Optional ```  | The datetime were the range of the search stops |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var campaignSlug = campaign_slug;
    var advocateToken = advocate_token;
    var from = date("D M d, Y G:i");
    var to = date("D M d, Y G:i");

    controller.getShareDailyParticipation(accountSlug, campaignSlug, advocateToken, from, to, function(error, response, context) {

    
	});
```



#### <a name="get_referral_daily_participation"></a>![Method: ](https://apidocs.io/img/method.png ".ReportsController.getReferralDailyParticipation") getReferralDailyParticipation

> Get referral daily participation.


```javascript
function getReferralDailyParticipation(accountSlug, campaignSlug, advocateToken, from, to, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Optional ```  | The account identifier |
| campaignSlug |  ``` Optional ```  | The campaign identifier |
| advocateToken |  ``` Optional ```  | The advocate's token |
| from |  ``` Optional ```  | The datetime were the range of the search starts |
| to |  ``` Optional ```  | The datetime were the range of the search stops |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var campaignSlug = campaign_slug;
    var advocateToken = advocate_token;
    var from = date("D M d, Y G:i");
    var to = date("D M d, Y G:i");

    controller.getReferralDailyParticipation(accountSlug, campaignSlug, advocateToken, from, to, function(error, response, context) {

    
	});
```



#### <a name="get_click_daily_participation"></a>![Method: ](https://apidocs.io/img/method.png ".ReportsController.getClickDailyParticipation") getClickDailyParticipation

> Get click daily participation.


```javascript
function getClickDailyParticipation(accountSlug, campaignSlug, advocateToken, from, to, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Optional ```  | The account identifier |
| campaignSlug |  ``` Optional ```  | The campaign identifier |
| advocateToken |  ``` Optional ```  | The advocate's token |
| from |  ``` Optional ```  | The datetime were the range of the search starts |
| to |  ``` Optional ```  | The datetime were the range of the search stops |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var campaignSlug = campaign_slug;
    var advocateToken = advocate_token;
    var from = date("D M d, Y G:i");
    var to = date("D M d, Y G:i");

    controller.getClickDailyParticipation(accountSlug, campaignSlug, advocateToken, from, to, function(error, response, context) {

    
	});
```



#### <a name="get_bonuses_daily_given"></a>![Method: ](https://apidocs.io/img/method.png ".ReportsController.getBonusesDailyGiven") getBonusesDailyGiven

> Get bonuses daily given.


```javascript
function getBonusesDailyGiven(accountSlug, campaignSlug, advocateToken, from, to, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Optional ```  | The account identifier |
| campaignSlug |  ``` Optional ```  | The campaign identifier |
| advocateToken |  ``` Optional ```  | The advocate identifier |
| from |  ``` Optional ```  | The datetime were the range of the search starts |
| to |  ``` Optional ```  | The datetime were the range of the search stops |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var campaignSlug = campaign_slug;
    var advocateToken = advocate_token;
    var from = date("D M d, Y G:i");
    var to = date("D M d, Y G:i");

    controller.getBonusesDailyGiven(accountSlug, campaignSlug, advocateToken, from, to, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="referrals_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ReferralsController") ReferralsController

#### Get singleton instance

The singleton instance of the ``` ReferralsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ReferralsController;
```

#### <a name="get_referral_origin"></a>![Method: ](https://apidocs.io/img/method.png ".ReferralsController.getReferralOrigin") getReferralOrigin

> Get a referral origin by a given slug.


```javascript
function getReferralOrigin(referralOriginSlug, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| referralOriginSlug |  ``` Required ```  | The referral origin identifier |



#### Example Usage

```javascript

    var referralOriginSlug = referral_origin_slug;

    controller.getReferralOrigin(referralOriginSlug, function(error, response, context) {

    
	});
```



#### <a name="get_referral_origins"></a>![Method: ](https://apidocs.io/img/method.png ".ReferralsController.getReferralOrigins") getReferralOrigins

> Get referral origins. This is needed when creating (POST) a new referral, as referral_origin_slug refers to one of this origins.


```javascript
function getReferralOrigins(callback)
```

#### Example Usage

```javascript


    controller.getReferralOrigins(function(error, response, context) {

    
	});
```



#### <a name="get_referral"></a>![Method: ](https://apidocs.io/img/method.png ".ReferralsController.getReferral") getReferral

> Get a referral by a given id.


```javascript
function getReferral(accountSlug, advocateToken, referralId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |
| referralId |  ``` Required ```  | The referral id |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var referralId = referral_id;

    controller.getReferral(accountSlug, advocateToken, referralId, function(error, response, context) {

    
	});
```



#### <a name="delete_referral"></a>![Method: ](https://apidocs.io/img/method.png ".ReferralsController.deleteReferral") deleteReferral

> Delete a referral.


```javascript
function deleteReferral(accountSlug, advocateToken, referralId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |
| referralId |  ``` Required ```  | The referral identifier |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var referralId = referral_id;

    controller.deleteReferral(accountSlug, advocateToken, referralId, function(error, response, context) {

    
	});
```



#### <a name="post_referrals"></a>![Method: ](https://apidocs.io/img/method.png ".ReferralsController.postReferrals") postReferrals

> Create a new referral.


```javascript
function postReferrals(accountSlug, advocateToken, referralForm, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |
| referralForm |  ``` Required ```  | The body of the request |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var referralForm = new ReferralForm({"key":"value"});

    controller.postReferrals(accountSlug, advocateToken, referralForm, function(error, response, context) {

    
	});
```



#### <a name="put_referral"></a>![Method: ](https://apidocs.io/img/method.png ".ReferralsController.putReferral") putReferral

> Update a referral.


```javascript
function putReferral(accountSlug, advocateToken, referralId, referralForm, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |
| referralId |  ``` Required ```  | The referral id |
| referralForm |  ``` Required ```  | The body of the request |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var referralId = referral_id;
    var referralForm = new ReferralForm({"key":"value"});

    controller.putReferral(accountSlug, advocateToken, referralId, referralForm, function(error, response, context) {

    
	});
```



#### <a name="get_referrals"></a>![Method: ](https://apidocs.io/img/method.png ".ReferralsController.getReferrals") getReferrals

> Get the list of referrals for a given advocate.


```javascript
function getReferrals(accountSlug, advocateToken, page, limit, filter, sort, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |
| page |  ``` Optional ```  | Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result. |
| limit |  ``` Optional ```  | Maximum number of results to return in the response. Default (10), threshold (100) |
| filter |  ``` Optional ```  | Allowed fields: url, referral_origin_slug, created. Use the following delimiters to build your filters params. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah' |
| sort |  ``` Optional ```  | Allowed fields: created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort='last_name\|first_name\|-hire_date' |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var page = 52;
    var limit = 52;
    var filter = "filter";
    var sort = "sort";

    controller.getReferrals(accountSlug, advocateToken, page, limit, filter, sort, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="redemption_requests_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RedemptionRequestsController") RedemptionRequestsController

#### Get singleton instance

The singleton instance of the ``` RedemptionRequestsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.RedemptionRequestsController;
```

#### <a name="get_redemption_request_status"></a>![Method: ](https://apidocs.io/img/method.png ".RedemptionRequestsController.getRedemptionRequestStatus") getRedemptionRequestStatus

> Get a redemption request status.


```javascript
function getRedemptionRequestStatus(redemptionRequestStatusSlug, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| redemptionRequestStatusSlug |  ``` Required ```  | The redemption request status identifier |



#### Example Usage

```javascript

    var redemptionRequestStatusSlug = redemption_request_status_slug;

    controller.getRedemptionRequestStatus(redemptionRequestStatusSlug, function(error, response, context) {

    
	});
```



#### <a name="get_redemption_request_statuses"></a>![Method: ](https://apidocs.io/img/method.png ".RedemptionRequestsController.getRedemptionRequestStatuses") getRedemptionRequestStatuses

> Get redemption request statuses.


```javascript
function getRedemptionRequestStatuses(callback)
```

#### Example Usage

```javascript


    controller.getRedemptionRequestStatuses(function(error, response, context) {

    
	});
```



#### <a name="get_redemption_request_action"></a>![Method: ](https://apidocs.io/img/method.png ".RedemptionRequestsController.getRedemptionRequestAction") getRedemptionRequestAction

> Get a redemption request action.


```javascript
function getRedemptionRequestAction(redemptionRequestActionSlug, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| redemptionRequestActionSlug |  ``` Required ```  | The redemption request action identifier |



#### Example Usage

```javascript

    var redemptionRequestActionSlug = redemption_request_action_slug;

    controller.getRedemptionRequestAction(redemptionRequestActionSlug, function(error, response, context) {

    
	});
```



#### <a name="get_redemption_request_actions"></a>![Method: ](https://apidocs.io/img/method.png ".RedemptionRequestsController.getRedemptionRequestActions") getRedemptionRequestActions

> Get redemption request actions.


```javascript
function getRedemptionRequestActions(callback)
```

#### Example Usage

```javascript


    controller.getRedemptionRequestActions(function(error, response, context) {

    
	});
```



#### <a name="patch_redemption_request"></a>![Method: ](https://apidocs.io/img/method.png ".RedemptionRequestsController.patchRedemptionRequest") patchRedemptionRequest

> Redeem a redemption request. After the redemption request is created it needs to be redeemed. This will deduct the amount of the advocate unclaimed balance and move the request to the completed state.


```javascript
function patchRedemptionRequest(accountSlug, redemptionRequestId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| redemptionRequestId |  ``` Required ```  | The redemption request id |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var redemptionRequestId = 52;

    controller.patchRedemptionRequest(accountSlug, redemptionRequestId, function(error, response, context) {

    
	});
```



#### <a name="post_redemption_request"></a>![Method: ](https://apidocs.io/img/method.png ".RedemptionRequestsController.postRedemptionRequest") postRedemptionRequest

> Create a redemption request.


```javascript
function postRedemptionRequest(accountSlug, redemptionRequestForm, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| redemptionRequestForm |  ``` Required ```  | The body of the request |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var redemptionRequestForm = new RedemptionRequestForm({"key":"value"});

    controller.postRedemptionRequest(accountSlug, redemptionRequestForm, function(error, response, context) {

    
	});
```



#### <a name="get_redemption_request"></a>![Method: ](https://apidocs.io/img/method.png ".RedemptionRequestsController.getRedemptionRequest") getRedemptionRequest

> Get a redemption request by a given id.


```javascript
function getRedemptionRequest(accountSlug, redemptionRequestId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| redemptionRequestId |  ``` Required ```  | The redemption request identifier |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var redemptionRequestId = redemption_request_id;

    controller.getRedemptionRequest(accountSlug, redemptionRequestId, function(error, response, context) {

    
	});
```



#### <a name="get_redemption_requests"></a>![Method: ](https://apidocs.io/img/method.png ".RedemptionRequestsController.getRedemptionRequests") getRedemptionRequests

> Get the list of redemption requests.


```javascript
function getRedemptionRequests(accountSlug, page, limit, filter, sort, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| page |  ``` Optional ```  | Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result. |
| limit |  ``` Optional ```  | Maximum number of results to return in the response. Default (10), threshold (100) |
| filter |  ``` Optional ```  | Allowed fields: redemption_request_id, name, lastname, email, request_status_slug, request_action_slug, from, to, created. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah' |
| sort |  ``` Optional ```  | Allowed fields: name, lastname, email, created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort='last_name\|first_name\|-hire_date' |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var page = "page";
    var limit = "limit";
    var filter = "filter";
    var sort = "sort";

    controller.getRedemptionRequests(accountSlug, page, limit, filter, sort, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="bonuses_controller"></a>![Class: ](https://apidocs.io/img/class.png ".BonusesController") BonusesController

#### Get singleton instance

The singleton instance of the ``` BonusesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.BonusesController;
```

#### <a name="get_bonuses"></a>![Method: ](https://apidocs.io/img/method.png ".BonusesController.getBonuses") getBonuses

> Get the list of bonuses for a given account.


```javascript
function getBonuses(accountSlug, page, limit, filter, sort, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| page |  ``` Optional ```  | Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result. |
| limit |  ``` Optional ```  | Maximum number of results to return in the response. Default (10), threshold (100) |
| filter |  ``` Optional ```  | Allowed fields: name, lastname, email, campaign_slug, from, to, created. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah' |
| sort |  ``` Optional ```  | Allowed fields: name, lastname, email, created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort='last_name\|first_name\|-hire_date' |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var page = 52;
    var limit = 52;
    var filter = "filter";
    var sort = "sort";

    controller.getBonuses(accountSlug, page, limit, filter, sort, function(error, response, context) {

    
	});
```



#### <a name="post_bonuses"></a>![Method: ](https://apidocs.io/img/method.png ".BonusesController.postBonuses") postBonuses

> Make an attempt to give a bonus for to the advocate's referrer. The system processes the given advocate (referral) and creates a bonus for the advocate's referrer if is needed. All restrictions set on the campaigns for this account will be check out before giving the bonus to the advocate's referrer.


```javascript
function postBonuses(accountSlug, bonusesForm, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| bonusesForm |  ``` Required ```  | The body of the request |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var bonusesForm = new BonusesForm({"key":"value"});

    controller.postBonuses(accountSlug, bonusesForm, function(error, response, context) {

    
	});
```



#### <a name="get_bonuses_checkup"></a>![Method: ](https://apidocs.io/img/method.png ".BonusesController.getBonusesCheckup") getBonusesCheckup

> Check if there is a bonus to be given to the advocate. Allows the clients to check if there is a bonus to be given, it simulates the behaivor of a POST request to /accounts/{account_slug}/bonuses resource. This resource is idempotent.


```javascript
function getBonusesCheckup(accountSlug, advocateToken, reference, paymentAmount, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The referral's token. Usually the one that completed the purchase, or trigger an event. |
| reference |  ``` Required ```  | The reference number for this request. Usually the order_id, payment_id, or timestamp. |
| paymentAmount |  ``` Required ```  | The payment amount the referrals has made. Required for a percentage based campaign. |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var reference = "reference";
    var paymentAmount = 52.8554014432502;

    TestHelper.getFileContents("url", function(data) {
        controller.getBonusesCheckup(accountSlug, advocateToken, reference, paymentAmount, function(error, response, context) {

        });
	});
```



#### <a name="post_bonuses_force"></a>![Method: ](https://apidocs.io/img/method.png ".BonusesController.postBonusesForce") postBonusesForce

> Force the system to give a bonus to an advocate. The system will not take into account the restriccions specified on the campaigns.


```javascript
function postBonusesForce(accountSlug, bonusForm, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| bonusForm |  ``` Required ```  | The body of the request |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var bonusForm = new BonusesForm1({"key":"value"});

    controller.postBonusesForce(accountSlug, bonusForm, function(error, response, context) {

    
	});
```



#### <a name="get_bonuses_trace"></a>![Method: ](https://apidocs.io/img/method.png ".BonusesController.getBonusesTrace") getBonusesTrace

> Get a bonus request trace.


```javascript
function getBonusesTrace(accountSlug, traceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| traceId |  ``` Required ```  | The trace id |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var traceId = 52;

    controller.getBonusesTrace(accountSlug, traceId, function(error, response, context) {

    
	});
```



#### <a name="delete_bonus"></a>![Method: ](https://apidocs.io/img/method.png ".BonusesController.deleteBonus") deleteBonus

> Delete a bonus


```javascript
function deleteBonus(accountSlug, bonusId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| bonusId |  ``` Required ```  | The bonus id |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var bonusId = 52;

    controller.deleteBonus(accountSlug, bonusId, function(error, response, context) {

    
	});
```



#### <a name="get_bonus"></a>![Method: ](https://apidocs.io/img/method.png ".BonusesController.getBonus") getBonus

> Get a bonus by a given id.


```javascript
function getBonus(accountSlug, bonusId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| bonusId |  ``` Required ```  | The bonus id |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var bonusId = 52;

    controller.getBonus(accountSlug, bonusId, function(error, response, context) {

    
	});
```



#### <a name="get_bonuses_traces"></a>![Method: ](https://apidocs.io/img/method.png ".BonusesController.getBonusesTraces") getBonusesTraces

> Get the list of bonuses traces (audit trail). Every time the system tries to give a bonus the an advocate a new trace is created.


```javascript
function getBonusesTraces(accountSlug, page, limit, filter, sort, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| page |  ``` Optional ```  | Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result. |
| limit |  ``` Optional ```  | Maximum number of results to return in the response. Default (10), threshold (100) |
| filter |  ``` Optional ```  | Allowed fields: reference, result, bonus_amount, advocate_token, advocate_referrer_token, campaign_slug, from, to, created. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah' |
| sort |  ``` Optional ```  | Allowed fields: created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort='last_name\|first_name\|-hire_date' |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var page = 52;
    var limit = 52;
    var filter = "filter";
    var sort = "sort";

    controller.getBonusesTraces(accountSlug, page, limit, filter, sort, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="campaigns_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CampaignsController") CampaignsController

#### Get singleton instance

The singleton instance of the ``` CampaignsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CampaignsController;
```

#### <a name="get_campaign"></a>![Method: ](https://apidocs.io/img/method.png ".CampaignsController.getCampaign") getCampaign

> Get a campaign by a given slug.


```javascript
function getCampaign(accountSlug, campaignSlug, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| campaignSlug |  ``` Required ```  | The campaign identifier |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var campaignSlug = campaign_slug;

    controller.getCampaign(accountSlug, campaignSlug, function(error, response, context) {

    
	});
```



#### <a name="get_campaigns"></a>![Method: ](https://apidocs.io/img/method.png ".CampaignsController.getCampaigns") getCampaigns

> Get the list of campaings for a given account.


```javascript
function getCampaigns(accountSlug, page, limit, filter, sort, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| page |  ``` Optional ```  | Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result. |
| limit |  ``` Optional ```  | Maximum number of results to return in the response. Default (10), threshold (100) |
| filter |  ``` Optional ```  | Allowed fields: name, description, start_date, end_date, is_active (true\|false), created. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah' |
| sort |  ``` Optional ```  | Allowed fields: campaign_slug, created, start_date, end_date, is_active. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort='last_name\|first_name\|-hire_date' |



#### Example Usage

```javascript

    var accountSlug = account_slug;
    var page = 52;
    var limit = 52;
    var filter = "filter";
    var sort = "sort";

    controller.getCampaigns(accountSlug, page, limit, filter, sort, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)



