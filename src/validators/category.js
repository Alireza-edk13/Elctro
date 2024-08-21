const yup = require("yup");

const categoryValidator = yup.object().shape({
  title: yup.string("عنوان معتبر نیست").required("وارد کردن عنوان الزامی است").max(20,"عنوان وارد شده حداکثر 20 کارکتر باید باشد"),
});

module.exports = categoryValidator;
