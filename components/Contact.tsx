import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Define the schema using Zod for form validation
const schema = z.object({
  name: z.string().min(2, { message: 'Name should be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(10, { message: 'Message should be at least 10 characters' }),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  
  return (
    <div className="max-w-5xl mx-auto p-6 rounded-lg shadow-lg">
        <h2 className="text-6xl font-bold mb-12 text-blue-400 [text-shadow:_0_0_10px_rgb(59_130_246_/_50%)]">
        Contact
      </h2>
      <form action="mailto:ayaanrk132@gmail.com" className="space-y-6">

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            {...register('message')}
            placeholder="Your message"
            rows={6}
            className={`w-full p-3 bg-transparent border rounded-md ${errors.message ? 'border-red-500' : ' border-blue-400'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
        </div>

        <button
  type="submit"
  className="w-full py-3 text-white border border-blue-400 rounded-md hover:bg-blue-400 hover:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 ease-in-out"
>
  Send Message
</button>


      </form>
    </div>
  );
};

export default ContactForm;
