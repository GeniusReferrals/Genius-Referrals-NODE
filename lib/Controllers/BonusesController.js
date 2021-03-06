/**
 * GeniusReferralsLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

var _request = require('../Http/Client/RequestClient');
var _configuration = require('../configuration');
var _APIHelper = require('../APIHelper');
var _BaseController = require('./BaseController');


var BonusesController = {

    /**
     * Get the list of bonuses for a given account.
     * @param {string} accountSlug    Required parameter: The account identifier
     * @param {int|null} page    Optional parameter: Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result.
     * @param {int|null} limit    Optional parameter: Maximum number of results to return in the response. Default (10), threshold (100)
     * @param {string|null} filter    Optional parameter: Allowed fields: name, lastname, email, campaign_slug, from, to, created. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah'
     * @param {string|null} sort    Optional parameter: Allowed fields: name, lastname, email, created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort='last_name\|first_name\|-hire_date'
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getBonuses: function (accountSlug, page, limit, filter, sort, callback) {
        //Assign default values
        page = page || 1;
        limit = limit || 10;

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/accounts/{account_slug}/bonuses";
        
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
        		var errorResponse = _BaseController.validateResponse(_context, "getBonuses");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getBonuses");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Make an attempt to give a bonus for to the advocate's referrer. The system processes the given advocate (referral) and creates a bonus for the advocate's referrer if is needed. All restrictions set on the campaigns for this account will be check out before giving the bonus to the advocate's referrer.
     * @param {string} accountSlug    Required parameter: The account identifier
     * @param {BonusesForm} bonusesForm    Required parameter: The body of the request
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    postBonus: function (accountSlug, bonusesForm, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/accounts/{account_slug}/bonuses";
        
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
        _APIHelper.cleanObject(bonusesForm);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(bonusesForm),
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if (_error) {
        		var errorResponse = _BaseController.validateResponse(_context, "postBonus");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "postBonus");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Check if there is a bonus to be given to the advocate. Allows the clients to check if there is a bonus to be given, it simulates the behaivor of a POST request to /accounts/{account_slug}/bonuses resource. This resource is idempotent.
     * @param {string} accountSlug    Required parameter: The account identifier
     * @param {string} advocateToken    Required parameter: The referral's token. Usually the one that completed the purchase, or trigger an event.
     * @param {string} reference    Required parameter: The reference number for this request. Usually the order_id, payment_id, or timestamp.
     * @param {double} paymentAmount    Required parameter: The payment amount the referrals has made. Required for a percentage based campaign.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {binary}
     */
    getBonusCheckup: function (accountSlug, advocateToken, reference, paymentAmount, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/accounts/{account_slug}/bonuses/checkup";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "account_slug": accountSlug
        });

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "advocate_token": advocateToken,
            "reference": reference,
            "payment_amount": paymentAmount
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
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if (_error) {
        		var errorResponse = _BaseController.validateResponse(_context, "getBonusCheckup");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getBonusCheckup");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Force the system to give a bonus to an advocate. The system will not take into account the restriccions specified on the campaigns.
     * @param {string} accountSlug    Required parameter: The account identifier
     * @param {ForceBonusesForm} bonusForm    Required parameter: The body of the request
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    postForceBonus: function (accountSlug, bonusForm, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/accounts/{account_slug}/bonuses/force";
        
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
        _APIHelper.cleanObject(bonusForm);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(bonusForm),
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if (_error) {
        		var errorResponse = _BaseController.validateResponse(_context, "postForceBonus");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "postForceBonus");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Get a bonus request trace.
     * @param {string} accountSlug    Required parameter: The account identifier
     * @param {int} traceId    Required parameter: The trace id
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getBonusTrace: function (accountSlug, traceId, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/accounts/{account_slug}/bonuses/traces/{trace_id}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "account_slug": accountSlug,
            "trace_id": traceId
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
        		var errorResponse = _BaseController.validateResponse(_context, "getBonusTrace");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getBonusTrace");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Delete a bonus
     * @param {string} accountSlug    Required parameter: The account identifier
     * @param {int} bonusId    Required parameter: The bonus id
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {void}
     */
    deleteBonus: function (accountSlug, bonusId, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/accounts/{account_slug}/bonuses/{bonus_id}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "account_slug": accountSlug,
            "bonus_id": bonusId
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
            method: "DELETE",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if (_error) {
        		var errorResponse = _BaseController.validateResponse(_context, "deleteBonus");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, null, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "deleteBonus");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Get a bonus by a given id.
     * @param {string} accountSlug    Required parameter: The account identifier
     * @param {int} bonusId    Required parameter: The bonus id
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getBonus: function (accountSlug, bonusId, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/accounts/{account_slug}/bonuses/{bonus_id}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "account_slug": accountSlug,
            "bonus_id": bonusId
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
        		var errorResponse = _BaseController.validateResponse(_context, "getBonus");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getBonus");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Get the list of bonuses traces (audit trail). Every time the system tries to give a bonus the an advocate a new trace is created.
     * @param {string} accountSlug    Required parameter: The account identifier
     * @param {int|null} page    Optional parameter: Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result.
     * @param {int|null} limit    Optional parameter: Maximum number of results to return in the response. Default (10), threshold (100)
     * @param {string|null} filter    Optional parameter: Allowed fields: reference, result, bonus_amount, advocate_token, advocate_referrer_token, campaign_slug, from, to, created. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah'
     * @param {string|null} sort    Optional parameter: Allowed fields: created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort='last_name\|first_name\|-hire_date'
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getBonusTraces: function (accountSlug, page, limit, filter, sort, callback) {
        //Assign default values
        page = page || 1;
        limit = limit || 10;

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/accounts/{account_slug}/bonuses/traces";
        
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
        		var errorResponse = _BaseController.validateResponse(_context, "getBonusTraces");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getBonusTraces");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    }

};

module.exports = BonusesController;
