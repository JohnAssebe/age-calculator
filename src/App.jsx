/* eslint-disable */
import { useFormik } from "formik";
import { useState } from "react";
import DownArrow from "./assets/down.svg";
import { validate } from "./utils/validate";
function App() {
  const [age,setAge]=useState({});
  const formik = useFormik({
    initialValues: {
      day: "",
      month: "",
      year: "",
    },
    validate:validate,
    onSubmit: (values) => {

      var dobConcat=values.month+"-"+values.day+"-"+values.year;

      // date of birth related info
      const dob=new Date(dobConcat);
      const dobYear=dob.getYear();
      const dobMonth=dob.getMonth();
      const dobDay=dob.getDate()

      // current date related info
      const today=new Date();
      const currentYear=today.getYear();
      const currentMonth=today.getMonth();
      const currentDay=today.getDate();
      
      const getYear=currentYear-dobYear;

      if (currentMonth >= dobMonth)
          var getMonth = currentMonth - dobMonth;
      else {
          getYear--;
          var getMonth = 12 + currentMonth - dobMonth;
    }

    if (currentDay >= dobDay)
      var getDay = currentDay - dobDay;
    else {
      getMonth--;
      var getDay = 31 + currentDay - dobDay;

      if (getMonth < 0) {
        getMonth = 11;
        getYear--;
      }
    }

    setAge({
         years:getYear,
         months:getMonth,
         days:getDay
    });
    },
  });

  return (
    <div className="relative w-full min-h-screen bg-lightGrey">
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 px-4 md:px-16 py-6 md:py-8 mx-auto bg-white rounded-br-[60px] md:rounded-br-[120px] rounded-2xl shadow-xl max-w-fit">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex items-start justify-center gap-5 font-poppins">
            <div className="flex flex-col items-start justify-center gap-2">
              <p className={`text-sm uppercase ${(formik.touched.day && formik.errors.day) ? "text-red-500":"text-smokeyGray"}`}>day</p>
              <input
                className={`w-20 px-2 py-4 text-base border rounded-lg outline-none md:w-32 placeholder:text-smokeyGray focus:border-purple focus:placeholder:text-purple ${formik.touched.day && formik.errors.day && "border-red-600 focus:border-red-600 placeholder:text-red-600 focus:placeholder:text-red-500 text-red-500"}`}
                placeholder="DD"
                name="day"
                value={formik.values.day}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.day && formik.errors.day && <p className="text-[10px] text-red-500 font-lightl capitalize">{formik.errors.day}</p>}
            </div>

            <div className="flex flex-col items-start justify-center gap-2">
              <p className={`text-sm uppercase ${(formik.touched.month && formik.errors.month) ? "text-red-500":"text-smokeyGray"}`}>month</p>
              <input
                className={`w-20 px-2 py-4 text-base border rounded-lg outline-none md:w-32 placeholder:text-smokeyGray focus:border-purple focus:placeholder:text-purple ${formik.touched.month && formik.errors.month && "border-red-600 focus:border-red-600 placeholder:text-red-500 focus:placeholder:text-red-500 text-red-500"}`}
                placeholder="MM"
                name="month"
                value={formik.values.month}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.month && formik.errors.month && <p className="text-[10px] text-red-500 font-lightl capitalize">{formik.errors.month}</p>}

            </div>

            <div className="flex flex-col items-start justify-center gap-2">
              <p className={`text-sm uppercase ${(formik.touched.year && formik.errors.year) ? "text-red-500":"text-smokeyGray"}`}>year</p>
              <input
                className={`w-20 px-2 py-4 text-base border rounded-lg outline-none md:w-32 placeholder:text-smokeyGray focus:border-purple focus:placeholder:text-purple ${formik.touched.year && formik.errors.year && "border-red-600 focus:border-red-600 placeholder:text-red-500 focus:placeholder:text-red-500 text-red-500"}`}
                placeholder="YYYY"
                name="year"
                value={formik.values.year}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.year && formik.errors.year && <p className="text-[10px] text-red-500 font-lightl capitalize">{formik.errors.year}</p>}

            </div>
          </div>
          <div className="relative py-12">
            <hr />
            <button
              type="submit"
              className="absolute flex items-center justify-center w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer left-1/2 md:left-[90%] md:-translate-x-0 top-1/2 bg-purple hover:bg-offBlack duration-500"
            >
              <img src={DownArrow} alt="button" />
            </button>
          </div>
        </form>
        <div className="text-4xl italic font-extrabold md:text-6xl">
          <div className="flex items-center justify-start gap-x-2">
            <span className="text-purple duration-500">{age?.years ? age.years: "- -" }</span>
            <p>years</p>
          </div>
          <div className="flex items-center justify-start gap-x-2">
            <span className="text-purple">{age?.months ? age.months: "- -" }</span>
            <p>months</p>
          </div>

          <div className="flex items-center justify-start gap-x-2">
            <span className="text-purple">{age?.days ? age.days: "- -" }</span>
            <p>days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
