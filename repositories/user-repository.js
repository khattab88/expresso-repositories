/* eslint-disable prefer-destructuring */
/* eslint-disable one-var */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable prettier/prettier */
const { User } = require('expresso-models');
const Repository = require("./repository");

class UserRepository extends Repository {
    constructor() { 
        super(User); 
    }

    async getByEmail(email) {
        try {
            const user = await User.findOne({ email: email }).select("+password");
            return user;
        } catch (err) {
            throw new Error(err);
        }
    }
    
    async getAdminByEmail(email) {
        try {
            const admin = await User.findOne({ email: email, role: 'admin' }).select("+password");
            return admin;
        } catch (err) {
            throw new Error(err);
        }
    }

    async getByFieldValue(fieldValue) {
        try {
            const user = await User.findOne(fieldValue).select("+password");
            return user;
        } catch (err) {
            throw new Error(err);
        }
    }
}

module.exports = new UserRepository();