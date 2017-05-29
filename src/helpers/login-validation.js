import { default as Validator } from 'validatorjs'

export const rules = {
    email: 'required|email',
    password: 'required|between:6,18|alpha_num'
}

export default value => {
    return new Promise((resolve, reject) => {
        const validator = new Validator(value, rules);

        if (validator.passes()) {
            resolve();
        } else {
            reject(validator.errors.all());
        }
    })
};