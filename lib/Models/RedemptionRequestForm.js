
/**
 * GeniusReferralsLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */
var BaseModel = require("./BaseModel");

/**
 * Creates an instance of RedemptionRequestForm
 *
 * @constructor
 */
RedemptionRequestForm = function (obj) {
    if(!obj) {
        this.redemptionRequest = null;     
        //Append to variable dictionary
        this._variableDict['redemptionRequest'] = 'redemption_request';
    } else {
        this.redemptionRequest = (obj.redemption_request !== undefined && obj.redemption_request !== null)? new RedemptionRequest(obj.redemption_request) : null;
        //Append to variable dictionary
        this._variableDict['redemptionRequest'] = 'redemption_request';
    }
};

RedemptionRequestForm.prototype = new BaseModel();
RedemptionRequestForm.prototype.constructor = RedemptionRequestForm;

/**
 * The redemption request's wrapper
 *
 * @return {RedemptionRequest}
 */
RedemptionRequestForm.prototype.getRedemptionRequest = function() {
    return this.redemptionRequest;
};

/**
 * Setter for RedemptionRequest
 * 
 * @param {RedemptionRequest} value 
 */
RedemptionRequestForm.prototype.setRedemptionRequest = function(value) {
    this.redemptionRequest = value;
};


module.exports = RedemptionRequestForm;