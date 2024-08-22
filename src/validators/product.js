const yup = require("yup");


const fileSiza = 1024 * 1024; // 1MB
const supportedFormats = ['image/jpg', 'image/jpeg', 'image/webp', 'image/png'];



const createProductValidator = yup.object().shape({
    name: yup.string("نام محصول معتبر نیست").required("نام محصول الزامی است").min(5, "نام محصول حداقل باید 5 کارکتر باشد").max(20, "نام حداکثر میتواند 40 کاکتر باشد"),

    shortName: yup.string("نام کوتاه محصول معتبر نیست").required("نام کوتاه محصول الزامی است").min(5, "نام کوتاه محصول حداقل باید 5 کارکتر باشد").max(20, "نام کوتاه حداکثر میتواند 40 کاکتر باشد"),

    brand: yup.string("برند محصول معتبر نیست").required("برند محصول الزامی است").min(3, "برند حداقل باید 3 کارکتر باشد").max(20, "برند حداکثر میتواند 40 کاکتر باشد"),


    orginalPrice: yup.number("قیمت معتبر نیست").required("قیمت محصول الزامی است").min(0, "قیمت نمیتونه منفی باشه"),

    discount: yup
        .number("معتبر نیست")
        .min(0, "تخفیف محصول نمی‌تواند منفی باشد")
        .max(100, "تخفیف محصول نمی‌تواند بیشتر از ۱۰۰ درصد باشد"),



    stock: yup.number("موجودی معتبر نیست").required("موجودی محصول الزامی است").min(0, "موجودی نمیتونه منفی باشد").max(40, "موجودی حداکثر 40 تا باید باشد"),

    cover: yup.mixed()
        .required("کاور محصول الزامی است")
        .test(
            'fileSize',
            'حجم کاور محصول نمیتواند بیشتر از 1 مگابایت باشد',
            value => value && value.size <= fileSiza
        )
        .test(
            'fileFormat', 'فرمت کاور محصول معتبر نیست',
            value => value && supportedFormats.includes(value.type)
        ),

    categoryId: yup
        .string("معتبر نیست")
        .required(" دسته‌بندی الزامی است")
        .matches(/^[0-9a-fA-F]{24}$/, "شناسه دسته‌بندی معتبر نیست"),
});


const removeProductValidator = yup.object().shape({
    params: yup.object().shape({
        id: yup
            .string("شناسه معتبر نیست")
            .required("شناسه دوره الزامی است")
            .matches(/^[0-9a-fA-F]{24}$/, "شناسه دوره معتبر نیست"),
    }),
});


module.exports = {
    createProductValidator,
    removeProductValidator
}