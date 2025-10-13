import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false); // reset previous success (if any)

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xanjlepk", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        form.reset(); // clear input fields after success
      } else {
        const data = await res.json();
        alert(data.message || "Failed to send message.");
      }
    } catch (error) {
      alert("Something went wrong. Please check your internet connection.");
      console.error("Form error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccess(false);
  };

  return (
    <section
      id="Contact"
      className="flex justify-center items-center bg-white dark:bg-popover px-6 min-h-[80vh] text-black dark:text-white transition-colors duration-300"
    >
      <div className="mx-auto w-full max-w-4xl">
        {success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-gradient-to-br from-white dark:from-black via-white dark:via-black to-white dark:to-black shadow-xl p-10 border dark:border-white border-black rounded-2xl text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              className="mb-4 text-black dark:text-white text-5xl md:text-6xl"
            >
              ✅
            </motion.div>

            <h2 className="mb-3 font-extrabold text-black dark:text-white text-3xl md:text-4xl">
              Message Sent Successfully!
            </h2>

            <p className="mx-auto mb-6 max-w-xl text-black text-md dark:text-white md:text-lg">
              Thank you for getting in touch. I appreciate your message and will get back to you as
              soon as possible.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReset}
              className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 shadow-lg mt-4 px-6 py-3 rounded-md font-semibold text-white dark:text-black transition-all cursor-pointer"
            >
              Send Another Message
            </motion.button>
          </motion.div>
        ) : (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                duration: 1,
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="mb-12 font-bold text-4xl md:text-5xl text-center"
            >
              Contact Me
            </motion.h2>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-5 bg-gray-100 dark:bg-white/5 shadow-lg p-6 border border-gray-200 dark:border-white/10 rounded-xl transition-colors duration-300"
            >
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="bg-gray-100 dark:bg-white/5 p-3 border border-gray-900 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-200 w-full text-black dark:text-white"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    className="bg-gray-100 dark:bg-white/5 p-3 border border-gray-900 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-200 w-full text-black dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Your message"
                  className="bg-gray-100 dark:bg-white/5 p-3 border border-gray-900 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-200 w-full text-black dark:text-white resize-none"
                ></textarea>
              </div>
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`shadow-md px-8 py-3 cursor-pointer rounded-md font-medium text-white dark:text-black transition duration-300 ${
                    loading
                      ? "bg-gray-400 dark:bg-gray-600"
                      : "bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </motion.form>
          </>
        )}
      </div>
    </section>
  );
};

export default Contact;
