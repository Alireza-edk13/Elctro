const yup = require("yup");

const removeUserValidator = yup.object().shape({
    id: yup
        .string("شناسه کاربر معتبر نیست")
        .required("شناسه کاربر الزامی است")
        .matches(/^[0-9a-fA-F]{24}$/, "شناسه کاربر معتبر نیست"),
});

const banUserValidator = yup.object().shape({
    id: yup
        .string()
        .required("شناسه کاربر الزامی است")
        .matches(/^[0-9a-fA-F]{24}$/, "شناسه کاربر معتبر نیست"),
});

const editUserValidator = yup.object().shape({
    name: yup
        .string('نام و نام خواندگی نام متعبر است')
        .required("نام و نام خانوادگی الزامی می‌باشد")
        .min(5, "نام و نام خانوادگی نباید کمتر از 5 کاراکتر باشد")
        .max(40, "نام و نام خانوادگی نباید بیشتر از 40 کاراکتر باشد"),
    email: yup
        .string("ایمیل نا متعبر است")
        .email("ایمیل نامعتبر است")
        .required("ایمیل الزامی است"),
    password: yup
        .string("رمز عبور نا متعبر است")
        .max(25, "رمز عبور حداکثر میتواند 25 کارکتر باشد")
        .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
        .required("رمز عبور الزامی می‌باشد"),
    phone: yup
        .string("شماره همراه نا متعبر است")
        .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, "شماره همراه نامتعبر است")
        .required("شماره همراه الزامی است"),
    role: yup
        .string()
        .oneOf(["ADMIN", "USER"], "نقش کاربر باید یکی از مقادیر ADMIN و USER باشد"),
    id: yup
        .string()
        .required("شناسه کاربر الزامی است")
        .matches(/^[0-9a-fA-F]{24}$/, "شناسه کاربر معتبر نیست"),
});

const updateUserValidator = yup.object().shape({
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


const changeUserRoleValidator = yup.object().shape({
    id: yup
        .string()
        .required("شناسه کاربر الزامی است")
        .matches(/^[0-9a-fA-F]{24}$/, "شناسه کاربر معتبر نیست"),
    role: yup
        .string()
        .oneOf(["ADMIN", "USER"], "نقش کاربر باید یکی از مقادیر ADMIN و USER باشد")
        .required("نقش کاربر الزامی است"),
});

module.exports = {
    removeUserValidator,
    banUserValidator,
    editUserValidator,
    updateUserValidator,
    changeUserRoleValidator,
};
