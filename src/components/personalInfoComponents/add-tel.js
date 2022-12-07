import { Formik, Field, useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

const AddTel = () => {
  const { t, i18n } = useTranslation();

  const initialValues = {
    tel: "",
  };
  const validationSchema = yup.object({
    tel: yup.number().required("Phone number is required"),
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
                name="tel"
                id="tel"
                type="tel"
                className={`form-control ${
                  formik.touched.tel && !formik.errors.tel
                    ? "is-valid"
                    : !formik.touched.tel
                    ? ""
                    : "is-invalid"
                }`}
                placeholder={t("Phone numbers")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.tel}
              />
              <label
                htmlFor="tel"
                className={`${
                  !formik.errors.tel ? "text-dark" : "text-danger"
                }`}
              >
                {t("Phone numbers")}
              </label>
              {formik.touched.tel && formik.errors.tel ? (
                <div className="invalid-feedback">{t(formik.errors.tel)}</div>
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

export default AddTel;
