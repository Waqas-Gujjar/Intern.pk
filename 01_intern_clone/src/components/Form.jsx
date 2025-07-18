import React, { useState } from "react";

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    phoneNumber: "",
    cnic: "",
    address: "",
    institute: "",
    experience: "",
    projectURL: "",
    heardFrom: "",
    resume: null,
    paymentScreenshot: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 mb-20">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
        Internship Application Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="input" />
        <input type="text" name="fatherName" placeholder="Father Name" onChange={handleChange} required className="input" />
        <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required className="input" />
        <input type="text" name="cnic" placeholder="CNIC No" onChange={handleChange} required className="input" />
        <input type="text" name="address" placeholder="Permanent Address" onChange={handleChange} required className="input" />
        <input type="text" name="institute" placeholder="Institute" onChange={handleChange} required className="input" />
        <input type="text" name="experience" placeholder="Working Experience" onChange={handleChange} className="input" />
        <input type="url" name="projectURL" placeholder="Your Past Project URL" onChange={handleChange} className="input" />
        <input type="text" name="heardFrom" placeholder="Where Did You Hear About Intern.pk" onChange={handleChange} className="input" />

        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
          <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required className="mt-1" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Payment Screenshot</label>
          <input type="file" name="paymentScreenshot" accept="image/*" onChange={handleChange} required className="mt-1" />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
          >
            Submit Application
          </button>
        </div>
      </form>

      {/* Payment Instructions */}
      <div className="mt-10 p-4 border border-blue-300 rounded-md bg-blue-50">
        <h3 className="font-semibold text-blue-700 mb-2">Payment Section | 500 PKR or 5$</h3>
        <ul className="text-sm text-gray-800 space-y-1">
          <li><strong>Meezan Bank:</strong> 99430106993383 (IBAN: PK86MEZN0099430106993383)</li>
          <li><strong>SadaPay:</strong> 03453191638 (IBAN: PK94SADA0000003453191638)</li>
          <li><strong>EasyPaisa:</strong> 03432086595 (MUHAMMAD HAMMAD SHEIKH)</li>
        </ul>
        <p className="mt-3 text-red-600 font-semibold">
          Note: You can enroll in only one internship at a time.
        </p>
      </div>
    </div>
  );
};

// Styling for input fields using Tailwind
// const inputStyle = document.createElement("style");
// inputStyle.innerHTML = 
//   input.input {
//     width: 100%;
//     padding: 0.5rem;
//     border: 1px solid #ccc;
//     border-radius: 0.375rem;
//     outline: none;
//   }
// ;
// document.head.appendChild(inputStyle);

export default InternshipForm;
