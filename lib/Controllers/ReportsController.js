/**
 * GeniusReferralsLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

var _request = require('../Http/Client/RequestClient');
var _configuration = require('../configuration');
var _APIHelper = require('../APIHelper');
var _BaseController = require('./BaseController');


var ReportsController = {

    /**
     * Get referrals summary per referral origin.
     * @param {string} advocateToken    Required parameter: The advocate's token
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getReferralsSummaryPerOrigin: function (advocateToken, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/reports/referrals-summary-per-origin";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "advocate_token": advocateToken
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
        		var errorResponse = _BaseController.validateResponse(_context, "getReferralsSummaryPerOrigin");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getReferralsSummaryPerOrigin");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Get bonuses summary per referral origin.
     * @param {string} advocateToken    Required parameter: The advocate's token
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getBonusesSummaryPerOrigin: function (advocateToken, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/reports/bonuses-summary-per-origin";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "advocate_token": advocateToken
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
        		var errorResponse = _BaseController.validateResponse(_context, "getBonusesSummaryPerOrigin");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getBonusesSummaryPerOrigin");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Get top 10 advocates.
     * @param {string|null} accountSlug    Optional parameter: The account identifier
     * @param {string|null} campaignSlug    Optional parameter: The campaign identifier
     * @param {int|null} limit    Optional parameter: Maximum number of results to return in the response. Default (10)
     * @param {dateTime|null} from    Optional parameter: The datetime were the range of the search starts
     * @param {dateTime|null} to    Optional parameter: The datetime were the range of the search stops
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getTopAdvocates: function (accountSlug, campaignSlug, limit, from, to, callback) {
        //Assign default values
        limit = limit || 10;

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/reports/top-advocates";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "account_slug": accountSlug,
            "campaign_slug": campaignSlug,
            "limit": (null != limit) ? limit : 10,
            "from": from,
            "to": to
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
        		var errorResponse = _BaseController.validateResponse(_context, "getTopAdvocates");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getTopAdvocates");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Get share daily participation.
     * @param {string|null} accountSlug    Optional parameter: The account identifier
     * @param {string|null} campaignSlug    Optional parameter: The campaign identifier
     * @param {string|null} advocateToken    Optional parameter: The advocate's token
     * @param {dateTime|null} from    Optional parameter: The datetime were the range of the search starts
     * @param {dateTime|null} to    Optional parameter: The datetime were the range of the search stops
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getShareDailyParticipation: function (accountSlug, campaignSlug, advocateToken, from, to, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/reports/share-daily-participation";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "account_slug": accountSlug,
            "campaign_slug": campaignSlug,
            "advocate_token": advocateToken,
            "from": from,
            "to": to
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
        		var errorResponse = _BaseController.validateResponse(_context, "getShareDailyParticipation");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getShareDailyParticipation");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Get referral daily participation.
     * @param {string|null} accountSlug    Optional parameter: The account identifier
     * @param {string|null} campaignSlug    Optional parameter: The campaign identifier
     * @param {string|null} advocateToken    Optional parameter: The advocate's token
     * @param {dateTime|null} from    Optional parameter: The datetime were the range of the search starts
     * @param {dateTime|null} to    Optional parameter: The datetime were the range of the search stops
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getReferralDailyParticipation: function (accountSlug, campaignSlug, advocateToken, from, to, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/reports/referral-daily-participation";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "account_slug": accountSlug,
            "campaign_slug": campaignSlug,
            "advocate_token": advocateToken,
            "from": from,
            "to": to
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
        		var errorResponse = _BaseController.validateResponse(_context, "getReferralDailyParticipation");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getReferralDailyParticipation");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Get click daily participation.
     * @param {string|null} accountSlug    Optional parameter: The account identifier
     * @param {string|null} campaignSlug    Optional parameter: The campaign identifier
     * @param {string|null} advocateToken    Optional parameter: The advocate's token
     * @param {dateTime|null} from    Optional parameter: The datetime were the range of the search starts
     * @param {dateTime|null} to    Optional parameter: The datetime were the range of the search stops
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getClickDailyParticipation: function (accountSlug, campaignSlug, advocateToken, from, to, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/reports/click-daily-participation";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "account_slug": accountSlug,
            "campaign_slug": campaignSlug,
            "advocate_token": advocateToken,
            "from": from,
            "to": to
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
        		var errorResponse = _BaseController.validateResponse(_context, "getClickDailyParticipation");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getClickDailyParticipation");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Get bonuses daily given.
     * @param {string|null} accountSlug    Optional parameter: The account identifier
     * @param {string|null} campaignSlug    Optional parameter: The campaign identifier
     * @param {string|null} advocateToken    Optional parameter: The advocate identifier
     * @param {dateTime|null} from    Optional parameter: The datetime were the range of the search starts
     * @param {dateTime|null} to    Optional parameter: The datetime were the range of the search stops
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getBonusesDailyGiven: function (accountSlug, campaignSlug, advocateToken, from, to, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/reports/bonuses-daily-given";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "account_slug": accountSlug,
            "campaign_slug": campaignSlug,
            "advocate_token": advocateToken,
            "from": from,
            "to": to
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
        		var errorResponse = _BaseController.validateResponse(_context, "getBonusesDailyGiven");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null, parsed, _context);
            } else {
                var errorResponse = _BaseController.validateResponse(_context, "getBonusesDailyGiven");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    }

};

module.exports = ReportsController;
