"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateContact = validateContact;
function validateContact(data) {
    const errors = [];
    if (!data.name || data.name.trim().length < 2) {
        errors.push("Name is required");
    }
    if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
        errors.push("Valid email is required");
    }
    if (!data.company || data.company.trim().length < 2) {
        errors.push("Company is required");
    }
    // message es opcional
    return errors;
}
//# sourceMappingURL=validator.js.map