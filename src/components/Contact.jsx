import React from 'react';
import imghero from '/imghero.webp';
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    try {
      await emailjs.send(
        'service_vh9ya6e',
        'template_0tgw5d7',
        templateParams,
        'odHOQnBWqTkKhgeCh'
      );
      toast.success("Your message has been sent");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <section id="contact" data-aos="fade-up" data-aos-delay="300" className='min-h-screen overflow-hidden justify-center flex items-center p-6 mt-10 relative'>
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative">
        <aside className='w-full md:w-1/2 relative flex flex-col items-center'>
          {/* Gradient Circle */}
          <div className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px]
              sm:w-[300px] h-[400px] sm:h-[400px] rounded-full bg-gradient-to-r
              from-[#6d2897] via-[#8e6cf5]
              to-[#bb61c5] shadow-[0_0_70px_rgba(182,0,182,0.7)]'></div>

          {/* Hero Image */}
          <img
            src={imghero}
            alt="contact_illustration"
            className='h-[250px] sm:h-[400px] md:h-[485px] w-[300px] sm:w-[480px] object-cover
            rounded-t-lg md:rounded-r-lg relative z-10'
          />
        </aside>

        {/* Contact Form */}
        <section className='p-8 w-full md:w-1/2'>
          <header className='mb-6'>
            <h2 className='text-4xl font-bold text-center text-white'>Contact Us</h2>
          </header>
          <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name" className='block text-gray-300 font-medium mb-2'>Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder='Your name'
                className='w-full px-4 py-4 text-white bg-gray-800 rounded-lg focus:outline-none'
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-red-400">This field is required</span>}
            </div>
            <div>
              <label htmlFor="email" className='block text-gray-300 font-medium mb-2'>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder='Your Email'
                className='w-full px-4 py-4 text-white bg-gray-800 rounded-lg focus:outline-none'
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-400">This field is required</span>}
            </div>
            <div>
              <label htmlFor="message" className='block text-gray-300 font-medium mb-2'>Message</label>
              <textarea
                name="message"
                id="message"
                placeholder='Your Message'
                className='w-full px-4 py-4 text-white bg-gray-800 rounded-lg focus:outline-none'
                {...register("message", { required: true })}
              />
              {errors.message && <span className="text-red-400">This field is required</span>}
            </div>
            <button
              type="submit"  // <-- Added this line
              className='w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg'
            >
              Send Message
            </button>
          </form>
        </section>
      </article>
    </section>
  );
}

export default Contact;
