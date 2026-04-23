"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/solid";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [numberCopied, setNumberCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true); // Start the spinner/loading state immediately
  
    const data = {
      from: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.status === 200) {
        console.log("Success:", resData);
        setEmailSubmitted(true);
        e.target.reset(); // Clear the form so they know it's gone
      } else {
        // If Resend throws an error, show it!
        alert("Something went wrong, Could not send email!");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Network error. Is your local server running?");
    } finally {
      setIsSending(false); // Stop the loading state
    }
  };

  const handleCopy = () => {
    const phoneNumber = "+27799514260";
    navigator.clipboard.writeText(phoneNumber);
    setNumberCopied(true);
    //alert("Phone number copied to clipboard!"); // Optional: Feedback for the user
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
      <div className="absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="bg-purple-900/20 blur-[100px] rounded-full h-80 w-80"></div>
      </div>

      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-slate-400 mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open. 
          Whether you have a question or just wish to say hi, I will try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/your-username" target="_blank">
            <Image src="/github-icon.svg" alt="Github" width={32} height={32} className="hover:opacity-80 transition-opacity" />
          </Link>
          <Link href="https://www.linkedin.com/in/sphelele-mkhize-3098021b5" target="_blank">
            <Image src="/linkedin-icon.svg" alt="Linkedin" width={32} height={32} className="hover:opacity-80 transition-opacity" />
          </Link>
          <Link href="tel:+27799514260" target="_blank">
            <PhoneIcon className="text-white w-7 h-7 hover:opacity-80 transition-opacity" />
          </Link>
        </div>
        {numberCopied? (
          <div className="bg-green-900/20 border border-green-500/50 p-4 rounded-lg">
            <p className="text-green-500 text-sm font-medium">
              Phone number copied to clipboard!
            </p>
            <button 
              onClick={() => setNumberCopied(false)}
              className="text-xs text-green-400 underline mt-2 cursor-pointer"
              >
              Try Again
            </button>
          </div>
        ) : (
          <div id="phone-copy" className="my-2 text-white cursor-pointer hover:text-gray-300 transition-colors" 
            onClick={handleCopy}
            title="Click to copy"
          >
            Phone <span className="font-medium">+27799514260</span>
          </div>
        )}
      </div>

      <div className="z-10">
        {emailSubmitted ? (
          <div className="bg-green-900/20 border border-green-500/50 p-4 rounded-lg">
            <p className="text-green-500 text-sm font-medium">
              Message received! I&apos;ll get back to you soon.
            </p>
            <button 
              onClick={() => setEmailSubmitted(false)}
              className="text-xs text-green-400 underline mt-2 cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-white/10 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-purple-500 outline-none transition-all"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">Subject</label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-white/10 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-purple-500 outline-none transition-all"
                placeholder="Job Inquiry"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="bg-[#18191E] border border-white/10 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-purple-500 outline-none transition-all resize-none"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className={`bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-5 rounded-lg w-full transition-all ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;