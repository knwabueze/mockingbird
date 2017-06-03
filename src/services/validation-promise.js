import Validator from 'validatorjs'
import _ from 'lodash'

export default (rules, value) => {
    return new Promise((resolve, reject) => {
        const validator = new Validator(value, rules);

        if (validator.passes()) {
            resolve();
        } else {
            reject(validator.errors.all())
        }
    })
}