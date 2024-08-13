const yup = require("yup");

//* Register Schema
const registerValidator = yup.object().shape({
    name: yup
        .string()
        .required("نام و نام خانوادگی الزامی می‌باشد")
        .min(5, "نام و نام خانوادگی نباید کمتر از 3 کاراکتر باشد")
        .max(40, "نام و نام خانوادگی نباید بیشتر از 40 کاراکتر باشد"),
    email: yup
        .string()
        .email("ایمیل نامعتبر است")
        .required("ایمیل الزامی می‌باشد"),
    phone: yup
        .string()
        // .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
        .required("شماره همراه الزامی است"),
    password: yup
        .string()
        .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
        .required("رمز عبور الزامی می‌باشد"),

});

//* Login Schema
const loginValidator = yup.object().shape({
    email: yup.string().email("ایمیل نامعتبر است").required(" شناسه کاربری یا ایمیل الزامی است"),
    password: yup.string().required(" کلمه عبور الزامی است"),
});

module.exports = {
    registerValidator,
    loginValidator,
};
