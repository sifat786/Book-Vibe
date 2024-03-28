import boy from "../../assets/images/boy.png";

const Contact = () => {
  return (
    <div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800 items-center">
        <div className="flex flex-col justify-between items">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
             Wanna Publish your Book?
            </h2>
            <div className="text-gray-600 pt-4">
            If you are ready to publish your book on our website, fill out the required fields and send us an email. We will be in touch with you shortly. Include a brief summary of your book in the message section. We look forward to hearing from you!
            </div>
          </div>
          <img src={boy} alt="" className=" h-52 md:h-64" />
        </div>
        <htmlForm noValidate="" className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded bg-gray-100 border-2 border-gray-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded bg-gray-100 border-2 border-gray-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded bg-gray-100 border-2 border-gray-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-default-600 text-gray-50"
          >
            Send Message
          </button>
        </htmlForm>
      </div>
    </div>
  );
};

export default Contact;
