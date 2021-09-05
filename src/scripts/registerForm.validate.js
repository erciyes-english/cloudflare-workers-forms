"use strict";module.exports = validate11;module.exports.default = validate11;const schema12 = {"type":"object","properties":{"course":{"type":"string","maxLength":100},"fname":{"type":"string","minLength":2,"maxLength":50},"lname":{"type":"string","minLength":2,"maxLength":50},"email":{"type":"string","format":"email","maxLength":200},"phone":{"type":"string","format":"tel","maxLength":200},"address1":{"type":"string","maxLength":200},"address2":{"type":"string","maxLength":200},"city":{"type":"string","maxLength":50},"province":{"type":"string","maxLength":50},"installments":{"type":"string","maxLength":100},"groupDiscount":{"enum":["true","false"]},"otherDiscount":{"enum":["true","false"]},"gdpr":{"const":"true"}},"required":["course","fname","lname","email","phone","address1","city","province","installments","gdpr"],"additionalProperties":false};const func11 = Object.prototype.hasOwnProperty;const func4 = require("ajv/dist/runtime/ucs2length").default;const func0 = require("ajv/dist/runtime/equal").default;const formats0 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;const formats2 = require("../lib/my-formats").tel;function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((((((((((data.course === undefined) && (missing0 = "course")) || ((data.fname === undefined) && (missing0 = "fname"))) || ((data.lname === undefined) && (missing0 = "lname"))) || ((data.email === undefined) && (missing0 = "email"))) || ((data.phone === undefined) && (missing0 = "phone"))) || ((data.address1 === undefined) && (missing0 = "address1"))) || ((data.city === undefined) && (missing0 = "city"))) || ((data.province === undefined) && (missing0 = "province"))) || ((data.installments === undefined) && (missing0 = "installments"))) || ((data.gdpr === undefined) && (missing0 = "gdpr"))){validate11.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs1 = errors;for(const key0 in data){if(!(func11.call(schema12.properties, key0))){validate11.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.course !== undefined){let data0 = data.course;const _errs2 = errors;if(errors === _errs2){if(typeof data0 === "string"){if(func4(data0) > 100){validate11.errors = [{instancePath:instancePath+"/course",schemaPath:"#/properties/course/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/course",schemaPath:"#/properties/course/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.fname !== undefined){let data1 = data.fname;const _errs4 = errors;if(errors === _errs4){if(typeof data1 === "string"){if(func4(data1) > 50){validate11.errors = [{instancePath:instancePath+"/fname",schemaPath:"#/properties/fname/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters"}];return false;}else {if(func4(data1) < 2){validate11.errors = [{instancePath:instancePath+"/fname",schemaPath:"#/properties/fname/minLength",keyword:"minLength",params:{limit: 2},message:"must NOT have fewer than 2 characters"}];return false;}}}else {validate11.errors = [{instancePath:instancePath+"/fname",schemaPath:"#/properties/fname/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.lname !== undefined){let data2 = data.lname;const _errs6 = errors;if(errors === _errs6){if(typeof data2 === "string"){if(func4(data2) > 50){validate11.errors = [{instancePath:instancePath+"/lname",schemaPath:"#/properties/lname/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters"}];return false;}else {if(func4(data2) < 2){validate11.errors = [{instancePath:instancePath+"/lname",schemaPath:"#/properties/lname/minLength",keyword:"minLength",params:{limit: 2},message:"must NOT have fewer than 2 characters"}];return false;}}}else {validate11.errors = [{instancePath:instancePath+"/lname",schemaPath:"#/properties/lname/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.email !== undefined){let data3 = data.email;const _errs8 = errors;if(errors === _errs8){if(errors === _errs8){if(typeof data3 === "string"){if(func4(data3) > 200){validate11.errors = [{instancePath:instancePath+"/email",schemaPath:"#/properties/email/maxLength",keyword:"maxLength",params:{limit: 200},message:"must NOT have more than 200 characters"}];return false;}else {if(!(formats0.test(data3))){validate11.errors = [{instancePath:instancePath+"/email",schemaPath:"#/properties/email/format",keyword:"format",params:{format: "email"},message:"must match format \""+"email"+"\""}];return false;}}}else {validate11.errors = [{instancePath:instancePath+"/email",schemaPath:"#/properties/email/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.phone !== undefined){let data4 = data.phone;const _errs10 = errors;if(errors === _errs10){if(errors === _errs10){if(typeof data4 === "string"){if(func4(data4) > 200){validate11.errors = [{instancePath:instancePath+"/phone",schemaPath:"#/properties/phone/maxLength",keyword:"maxLength",params:{limit: 200},message:"must NOT have more than 200 characters"}];return false;}else {if(!(formats2(data4))){validate11.errors = [{instancePath:instancePath+"/phone",schemaPath:"#/properties/phone/format",keyword:"format",params:{format: "tel"},message:"must match format \""+"tel"+"\""}];return false;}}}else {validate11.errors = [{instancePath:instancePath+"/phone",schemaPath:"#/properties/phone/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.address1 !== undefined){let data5 = data.address1;const _errs12 = errors;if(errors === _errs12){if(typeof data5 === "string"){if(func4(data5) > 200){validate11.errors = [{instancePath:instancePath+"/address1",schemaPath:"#/properties/address1/maxLength",keyword:"maxLength",params:{limit: 200},message:"must NOT have more than 200 characters"}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/address1",schemaPath:"#/properties/address1/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.address2 !== undefined){let data6 = data.address2;const _errs14 = errors;if(errors === _errs14){if(typeof data6 === "string"){if(func4(data6) > 200){validate11.errors = [{instancePath:instancePath+"/address2",schemaPath:"#/properties/address2/maxLength",keyword:"maxLength",params:{limit: 200},message:"must NOT have more than 200 characters"}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/address2",schemaPath:"#/properties/address2/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.city !== undefined){let data7 = data.city;const _errs16 = errors;if(errors === _errs16){if(typeof data7 === "string"){if(func4(data7) > 50){validate11.errors = [{instancePath:instancePath+"/city",schemaPath:"#/properties/city/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters"}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/city",schemaPath:"#/properties/city/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid0 = _errs16 === errors;}else {var valid0 = true;}if(valid0){if(data.province !== undefined){let data8 = data.province;const _errs18 = errors;if(errors === _errs18){if(typeof data8 === "string"){if(func4(data8) > 50){validate11.errors = [{instancePath:instancePath+"/province",schemaPath:"#/properties/province/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters"}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/province",schemaPath:"#/properties/province/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.installments !== undefined){let data9 = data.installments;const _errs20 = errors;if(errors === _errs20){if(typeof data9 === "string"){if(func4(data9) > 100){validate11.errors = [{instancePath:instancePath+"/installments",schemaPath:"#/properties/installments/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/installments",schemaPath:"#/properties/installments/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid0 = _errs20 === errors;}else {var valid0 = true;}if(valid0){if(data.groupDiscount !== undefined){let data10 = data.groupDiscount;const _errs22 = errors;if(!((data10 === "true") || (data10 === "false"))){validate11.errors = [{instancePath:instancePath+"/groupDiscount",schemaPath:"#/properties/groupDiscount/enum",keyword:"enum",params:{allowedValues: schema12.properties.groupDiscount.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs22 === errors;}else {var valid0 = true;}if(valid0){if(data.otherDiscount !== undefined){let data11 = data.otherDiscount;const _errs23 = errors;if(!((data11 === "true") || (data11 === "false"))){validate11.errors = [{instancePath:instancePath+"/otherDiscount",schemaPath:"#/properties/otherDiscount/enum",keyword:"enum",params:{allowedValues: schema12.properties.otherDiscount.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs23 === errors;}else {var valid0 = true;}if(valid0){if(data.gdpr !== undefined){const _errs24 = errors;if("true" !== data.gdpr){validate11.errors = [{instancePath:instancePath+"/gdpr",schemaPath:"#/properties/gdpr/const",keyword:"const",params:{allowedValue: "true"},message:"must be equal to constant"}];return false;}var valid0 = _errs24 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}