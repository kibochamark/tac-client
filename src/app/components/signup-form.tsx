'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { SignupFormSchema } from '../lib/schema';

type FormData = z.infer<typeof SignupFormSchema>;

const fields = [
  { id: 'username', type: 'text', label: 'Username', placeholder: 'Enter your username' }, { id: 'email', type: 'email', label: 'Email', placeholder: 'Enter your email' },
  { id: 'password', type: 'password', label: 'Password', placeholder: 'Enter your password' },
  { id: 'confirmPassword', type: 'password', label: 'Confirm Password', placeholder: 'Confirm your password' },
  { id: 'acceptedTerms', type: 'checkbox', label: 'I agree to the Terms and Conditions', placeholder: '' },
] as const;

const inputClass =
  'w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all duration-200';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(SignupFormSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center p-5">
      <div className="bg-white rounded-3xl p-10 shadow-2xl w-full max-w-md backdrop-blur-sm bg-opacity-95">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {fields.map(({ id, type, label, placeholder }) => (
            <div key={id}>
              {type === 'checkbox' ? (
                <div className="flex items-center">
                  <input
                    {...register(id as keyof FormData)}
                    type="checkbox"
                    id={id}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor={id} className="ml-2 block text-sm text-gray-700">
                    {label}
                  </label>
                </div>
              ) : (
                <>
                  <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-2">
                    {label}
                  </label>
                  <input
                    {...register(id as keyof FormData)}
                    type={type}
                    placeholder={placeholder}
                    className={`${inputClass} ${errors?.[id as keyof FormData]
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                      : ''
                      }`}
                  />
                </>
              )}

              {errors?.[id as keyof FormData]?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[id as keyof FormData]?.message as string}
                </p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3.5 px-4 rounded-xl font-semibold text-base hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transform transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            Sign Up
          </button>

          <div className="text-center pt-4">
            <span className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-purple-600 hover:underline font-semibold">
                Sign in
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
