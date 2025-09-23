'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { SignupFormSchema } from '../../lib/schema';
import { PATHS } from '../../lib/urls';

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
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
          <p className="text-gray-600">Sign up to get started</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {fields.map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
                {field.label}
              </label>
              {field.type === 'checkbox' ? (
                <div className="flex items-center">
                  <input
                    {...register(field.id as keyof FormData)}
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">{field.label}</span>
                </div>
              ) : (
                <input
                  {...register(field.id as keyof FormData)}
                  type={field.type}
                  className={inputClass}
                  placeholder={field.placeholder}
                />
              )}
              {errors[field.id as keyof FormData] && (
                <p className="mt-1 text-sm text-red-600">
                  {errors[field.id as keyof FormData]?.message}
                </p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-purple-100 transition-all duration-200 transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link href={PATHS.LOGIN} className="text-purple-600 hover:text-purple-500 font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
