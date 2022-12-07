import { Formik, Field, useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

const EditAddress = () => {
  const { t, i18n } = useTranslation();

  const initialValues = {
    country: "",
    city: "",
  };
  const validationSchema = yup.object({
    country: yup.string().required("Country is required"),
    city: yup.string().required("City is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));

    console.log("values:", values);
    resetForm();
  };
  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-12 col-lg-9 form-floating mb-3">
              <Field
                name="country"
                id="country"
                type="text"
                className={`form-control ${
                  formik.touched.country && !formik.errors.country
                    ? "is-valid"
                    : !formik.touched.country
                    ? ""
                    : "is-invalid"
                }`}
                placeholder={t("Country/region")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
              />
              <label
                htmlFor="country"
                className={`${
                  !formik.errors.country ? "text-dark" : "text-danger"
                }`}
              >
                {t("Country/region")}
              </label>
              {formik.touched.country && formik.errors.country ? (
                <div className="invalid-feedback">
                  {t(formik.errors.country)}
                </div>
              ) : null}{" "}
            </div>
            <div className="col-12 col-lg-9 form-floating mb-3">
              <Field
                name="city"
                id="city"
                type="text"
                className={`px-3 form-control ${
                  formik.touched.city && !formik.errors.city
                    ? "is-valid"
                    : !formik.touched.city
                    ? ""
                    : "is-invalid"
                }`}
                placeholder={t("City")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
              <label
                htmlFor="city"
                className={` ${
                  !formik.errors.city ? "text-dark" : "text-danger"
                }`}
              >
                {t("City")}
              </label>
              {formik.touched.city && formik.errors.city ? (
                <div className="invalid-feedback">
                  {t(formik.errors.city)}
                </div>
              ) : null}{" "}
            </div>
          </div>
          <button type="submit" className="btn btn-dark fw-bold mb-4">
            {t("save")}
          </button>
        </form>
      </Formik>{" "}
    </>
  );
};

export default EditAddress;
