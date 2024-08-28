const yup = require("yup");

const wishlistValidator = yup.object().shape({
    id: yup
        .string()
        .required("شناسه دوره الزامی است")
        .matches(/^[0-9a-fA-F]{24}$/, "شناسه دوره معتبر نیست"),
});

module.exports = {
    wishlistValidator,
}