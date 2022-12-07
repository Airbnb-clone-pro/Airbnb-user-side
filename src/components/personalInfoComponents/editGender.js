import { useState } from "react";
import { useTranslation } from "react-i18next";

const EditGender = () => {
  const { t, i18n } = useTranslation();
  const [gender, setGender] = useState("Male");
  const handleChange = (event) => {
    setGender(event.target.value);
    console.log(gender);
  };
  const handleSubmit = (event) => {
    console.log(gender);
    alert("Your favorite flavor is: " + gender);
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <select
            value={gender}
            className="form-select"
            id="floatingSelect"
            onChange={handleChange}
            aria-label="Default select example"
          >
            <option value="Male">{t("Male")}</option>
            <option value="Female">{t("Female")}</option>
          </select>
          <label htmlFor="floatingSelect">{t("Gender")}</label>
          <input
            type="submit"
            value={t("save")}
            className="btn btn-dark fw-bold my-4"
          />
        </div>
      </form>
    </>
  );
};

export default EditGender;
