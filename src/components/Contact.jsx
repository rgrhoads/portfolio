import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto px-6 py-20 mt-4">
      <h1 className="text-4xl font-bold text-center text-[#4A7090] p-4 m-4">Contact Me</h1>
      <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow p-6 min-w-[320px] max-w-4xl mx-auto">
        <form
          action="https://getform.io/f/6c232097-9882-486c-8945-e9337f26bf9d"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="uppercase text-sm font-semibold text-[#3A6080] py-2">Name</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm font-semibold text-[#3A6080] py-2">
                Phone Number
              </label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="phone"
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm font-semibold text-[#3A6080] py-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm font-semibold text-[#3A6080] py-2">Subject</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="subject"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm font-semibold text-[#3A6080] py-2">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300 "
              rows="20"
              name="message"
            />
          </div>
          <button className="bg-[#4A7090] text-white mt-4 w-full p-4 rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
