import React from "react";

const Form = () => {
  return (
    <div className="text-center p-2 sm:p-5" id="form">
      <div className="max-w-screen-xl max-h-96 mx-auto">
        <h2 className="text-2xl" style={{ marginBottom: "14px" }}>
          Contact
        </h2>
        <div className="px-0 md:px-48">
        <form>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            className="w-5/6 border border-solid border-gray-300 rounded-md mb-6 p-4 text-base"
          />
          <br />
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            className="w-5/6 border border-solid border-gray-300 rounded-md mb-6 p-4 text-base"
          />
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="w-5/6 border border-solid border-gray-300 rounded-md mb-6 p-4 text-base"
          />
          <div>
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-700 hover:border-gray-700 border border-gray-900 text-white px-3 py-2 rounded-md mb-6"
            >
              Submit
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
