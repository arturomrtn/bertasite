import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-r from-teal-500 to-pink-500 text-white py-12 px-8 flex flex-col items-center pt-[100px]"
    >
      <h2 className="text-4xl font-extrabold mb-6 text-center">Get in Touch!</h2>
      <p className="text-lg mb-10 text-center max-w-2xl">
        We'd love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.
      </p>
      <motion.form
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg text-black"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full border border-pink-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium tex-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full border border-pink-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full border border-pink-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-teal-500 text-white font-bold py-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
      <div className="mt-10 text-center">
        <p className="text-lg">Or reach us directly at:</p>
        <p className="font-medium">@bertastore.com</p>
        <p className="font-medium">+34</p>
      </div>
    </section>
  );
};

export default Contact;
