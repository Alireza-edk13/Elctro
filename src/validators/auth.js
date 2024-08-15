const yup = require("yup");
// import * as yup from "yup";



//* Register Schema
const registerValidator = yup.object().shape({
    name: yup
        .string('نام و نام خواندگی نام متعبر است')
        .required("نام و نام خانوادگی الزامی می‌باشد")
        .min(5, "نام و نام خانوادگی نباید کمتر از 5 کاراکتر باشد")
        .max(40, "نام و نام خانوادگی نباید بیشتر از 40 کاراکتر باشد"),
    email: yup
        .string("ایمیل نا متعبر است")
        .email("ایمیل نامعتبر است")
        .required("ایمیل الزامی است"),
    phone: yup
        .string("شماره همراه نا متعبر است")
        .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, "شماره همراه نامتعبر است")
        .required("شماره همراه الزامی است"),
    password: yup
        .string("رمز عبور نا متعبر است")
        .max(25, "رمز عبور حداکثر میتواند 25 کارکتر باشد")
        .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
        .required("رمز عبور الزامی می‌باشد"),

});

//* Login Schema
const loginValidator = yup.object().shape({
    phone: yup
        .string("شماره همراه نا متعبر است")
        .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, "شماره همراه نامتعبر است")
        .required("شماره همراه الزامی است"),
    password: yup
        .string("رمز عبور نا متعبر است")
        .max(25, "رمز عبور حداکثر میتواند 25 کارکتر باشد")
        .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
        .required(" رمز عبور الزامی است"),
});

module.exports = {
    registerValidator,
    loginValidator,
};
