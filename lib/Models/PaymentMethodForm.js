
/**
 * GeniusReferralsLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */
var BaseModel = require("./BaseModel");

/**
 * Creates an instance of PaymentMethodForm
 *
 * @constructor
 */
PaymentMethodForm = function (obj) {
    if(!obj) {
        this.advocatePaymentMethod = null;     
        //Append to variable dictionary
        this._variableDict['advocatePaymentMethod'] = 'advocate_payment_method';
    } else {
        this.advocatePaymentMethod = (obj.advocate_payment_method !== undefined && obj.advocate_payment_method !== null)? new PaymentMethod(obj.advocate_payment_method) : null;
        //Append to variable dictionary
        this._variableDict['advocatePaymentMethod'] = 'advocate_payment_method';
    }
};

PaymentMethodForm.prototype = new BaseModel();
PaymentMethodForm.prototype.constructor = PaymentMethodForm;

/**
 * The payment methods wrapper
 *
 * @return {PaymentMethod}
 */
PaymentMethodForm.prototype.getAdvocatePaymentMethod = function() {
    return this.advocatePaymentMethod;
};

/**
 * Setter for AdvocatePaymentMethod
 * 
 * @param {PaymentMethod} value 
 */
PaymentMethodForm.prototype.setAdvocatePaymentMethod = function(value) {
    this.advocatePaymentMethod = value;
};


module.exports = PaymentMethodForm;