/**
  * @module GeniusReferralsLib
  *  
  * The Genius Referrals API
  */

var Configuration = require('./configuration');;
var BaseController = require('./Controllers/BaseController');
var RootsController = require('./Controllers/RootsController');
var AuthenticationsController = require('./Controllers/AuthenticationsController');
var AdvocatesController = require('./Controllers/AdvocatesController');
var AccountsController = require('./Controllers/AccountsController');
var ReportsController = require('./Controllers/ReportsController');
var ReferralsController = require('./Controllers/ReferralsController');
var RedemptionRequestsController = require('./Controllers/RedemptionRequestsController');
var BonusesController = require('./Controllers/BonusesController');
var CampaignsController = require('./Controllers/CampaignsController');
var Advocate = require('./Models/Advocate');
var AdvocateForm = require('./Models/AdvocateForm');
var AdvocatePatchForm = require('./Models/AdvocatePatchForm');
var Bonuses = require('./Models/Bonuses');
var BonusesForm = require('./Models/BonusesForm');
var Bonuses1 = require('./Models/Bonuses1');
var BonusesForm1 = require('./Models/BonusesForm1');
var RedemptionRequest = require('./Models/RedemptionRequest');
var RedemptionRequestForm = require('./Models/RedemptionRequestForm');
var Referral = require('./Models/Referral');
var ReferralForm = require('./Models/ReferralForm');
var APIException = require('./Exceptions/APIException');


function initializer () { }

//Main functional components of GeniusReferralsLib
initializer.Configuration = Configuration;
initializer.BaseController = BaseController;
initializer.RootsController = RootsController;
initializer.AuthenticationsController = AuthenticationsController;
initializer.AdvocatesController = AdvocatesController;
initializer.AccountsController = AccountsController;
initializer.ReportsController = ReportsController;
initializer.ReferralsController = ReferralsController;
initializer.RedemptionRequestsController = RedemptionRequestsController;
initializer.BonusesController = BonusesController;
initializer.CampaignsController = CampaignsController;

//Main Models of GeniusReferralsLib
initializer.Advocate = Advocate;
initializer.AdvocateForm = AdvocateForm;
initializer.AdvocatePatchForm = AdvocatePatchForm;
initializer.Bonuses = Bonuses;
initializer.BonusesForm = BonusesForm;
initializer.Bonuses1 = Bonuses1;
initializer.BonusesForm1 = BonusesForm1;
initializer.RedemptionRequest = RedemptionRequest;
initializer.RedemptionRequestForm = RedemptionRequestForm;
initializer.Referral = Referral;
initializer.ReferralForm = ReferralForm;

//Main Exceptions of GeniusReferralsLib
initializer.APIException = APIException;

module.exports = initializer;
