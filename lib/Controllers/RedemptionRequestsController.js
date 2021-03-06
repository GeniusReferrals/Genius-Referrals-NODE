/**
 * GeniusReferralsLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

var _request = require('../Http/Client/RequestClient');
var _configuration = require('../configuration');
var _APIHelper = require('../APIHelper');
var _BaseController = require('./BaseController');


var RedemptionRequestsController = {

    /**
     * Get a redemption request status.
     * @param {string} redemptionRequestStatusSlug    Required parameter: The redemption request status identifier
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getRedemptionRequestStatus: function (redemptionRequestStatusSlug, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/utilities/redemption-request-statuses/{redemption_request_status_slug}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "redemption_request_status_slug": redemptionRequestStatusSlug
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "Content-Type": _configuration.contentType,
            "X-Auth-Token": _configuration.xAuthToken
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if (_error) {
        		var errorResponse = _BaseController.validateResponse(_context, "getRedemptionRequestStatus");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getRedemptionRequestStatus");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Get redemption request statuses.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getRedemptionRequestStatuses: function (callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/utilities/redemption-request-statuses";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "Content-Type": _configuration.contentType,
            "X-Auth-Token": _configuration.xAuthToken
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if (_error) {
        		var errorResponse = _BaseController.validateResponse(_context, "getRedemptionRequestStatuses");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getRedemptionRequestStatuses");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Get a redemption request action.
     * @param {string} redemptionRequestActionSlug    Required parameter: The redemption request action identifier
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getRedemptionRequestAction: function (redemptionRequestActionSlug, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/utilities/redemption-request-actions/{redemption_request_action_slug}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "redemption_request_action_slug": redemptionRequestActionSlug
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "Content-Type": _configuration.contentType,
            "X-Auth-Token": _configuration.xAuthToken
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if (_error) {
        		var errorResponse = _BaseController.validateResponse(_context, "getRedemptionRequestAction");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getRedemptionRequestAction");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Get redemption request actions.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getRedemptionRequestActions: function (callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/utilities/redemption-request-actions";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "Content-Type": _configuration.contentType,
            "X-Auth-Token": _configuration.xAuthToken
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if (_error) {
        		var errorResponse = _BaseController.validateResponse(_context, "getRedemptionRequestActions");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getRedemptionRequestActions");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Redeem a redemption request. After the redemption request is created it needs to be redeemed. This will deduct the amount of the advocate unclaimed balance and move the request to the completed state.
     * @param {string} accountSlug    Required parameter: The account identifier
     * @param {int} redemptionRequestId    Required parameter: The redemption request id
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {void}
     */
    patchRedemptionRequest: function (accountSlug, redemptionRequestId, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/accounts/{account_slug}/redemption-requests/{redemption_request_id}/redemption";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "account_slug": accountSlug,
            "redemption_request_id": redemptionRequestId
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "Content-Type": _configuration.contentType,
            "X-Auth-Token": _configuration.xAuthToken
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "PATCH",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if (_error) {
        		var errorResponse = _BaseController.validateResponse(_context, "patchRedemptionRequest");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, null, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "patchRedemptionRequest");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Create a redemption request.
     * @param {string} accountSlug    Required parameter: The account identifier
     * @param {RedemptionRequestForm} redemptionRequestForm    Required parameter: The body of the request
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    postRedemptionRequest: function (accountSlug, redemptionRequestForm, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/accounts/{account_slug}/redemption-requests";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "account_slug": accountSlug
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "Content-Type": _configuration.contentType,
            "X-Auth-Token": _configuration.xAuthToken
        };

        //Remove null values
        _APIHelper.cleanObject(redemptionRequestForm);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(redemptionRequestForm),
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if (_error) {
        		var errorResponse = _BaseController.validateResponse(_context, "postRedemptionRequest");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "postRedemptionRequest");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Get a redemption request by a given id.
     * @param {string} accountSlug    Required parameter: The account identifier
     * @param {string} redemptionRequestId    Required parameter: The redemption request identifier
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getRedemptionRequest: function (accountSlug, redemptionRequestId, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/accounts/{account_slug}/redemption-requests/{redemption_request_id}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "account_slug": accountSlug,
            "redemption_request_id": redemptionRequestId
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "Content-Type": _configuration.contentType,
            "X-Auth-Token": _configuration.xAuthToken
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if (_error) {
        		var errorResponse = _BaseController.validateResponse(_context, "getRedemptionRequest");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getRedemptionRequest");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Get the list of redemption requests.
     * @param {string} accountSlug    Required parameter: The account identifier
     * @param {int|null} page    Optional parameter: Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result.
     * @param {int|null} limit    Optional parameter: Maximum number of results to return in the response. Default (10), threshold (100)
     * @param {string|null} filter    Optional parameter: Allowed fields: redemption_request_id, name, lastname, email, request_status_slug, request_action_slug, from, to, created. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah'
     * @param {string|null} sort    Optional parameter: Allowed fields: name, lastname, email, created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort='last_name\|first_name\|-hire_date'
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getRedemptionRequests: function (accountSlug, page, limit, filter, sort, callback) {
        //Assign default values
        page = page || 1;
        limit = limit || 10;

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/accounts/{account_slug}/redemption-requests";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "account_slug": accountSlug
        });

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "page": (null != page) ? page : 1,
            "limit": (null != limit) ? limit : 10,
            "filter": filter,
            "sort": sort
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "Content-Type": _configuration.contentType,
            "X-Auth-Token": _configuration.xAuthToken
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if (_error) {
        		var errorResponse = _BaseController.validateResponse(_context, "getRedemptionRequests");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getRedemptionRequests");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    }

};

module.exports = RedemptionRequestsController;
