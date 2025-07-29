'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface LoginFormProps {
    onSubmit?: (username: string, password: string, rememberMe: boolean) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.(username, password, rememberMe);
    };

    const inputClass =
        'w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400';

    return (
        <div className=" flex items-center justify-center bg-gray-50 p-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white rounded-2xl shadow-xl hover:shadow-2xl p-8 space-y-6"
            >
                {[
                    { id: 'username', label: 'Username', type: 'text', value: username, onChange: setUsername },
                    { id: 'password', label: 'Password', type: 'password', value: password, onChange: setPassword },
                ].map(({ id, label, type, value, onChange }) => (
                    <div key={id} className="space-y-2">
                        <label htmlFor={id} className="block text-sm font-semibold text-gray-700">
                            {label}
                        </label>
                        <input
                            id={id}
                            type={type}
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                            placeholder={`Enter your ${label.toLowerCase()}`}
                            className={inputClass}
                            required
                        />
                    </div>
                ))}

                <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                        />
                        <span className="text-sm font-semibold text-gray-600">Remember me</span>
                    </label>

                    <button
                        type="button"
                        onClick={() => console.log('Forgot password clicked')}
                        className="text-sm text-purple-600 hover:text-purple-700 hover:underline font-medium transition-colors duration-200"
                    >
                        Forgot password?
                    </button>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium py-3 px-4 rounded-2xl hover:from-purple-600 hover:to-purple-700 focus:ring-4 focus:ring-purple-200 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                    onClick={(e) => {
                        e.preventDefault();
                        router.push('/dashboard');
                    }}
                >
                    Sign In
                </button>
                <div className="text-center pt-4">
                    <span className="text-sm text-gray-600">
                        Don&apos;t have an account?{' '}
                        <Link href="/signup" className="text-purple-600 hover:underline font-semibold">
                            Sign up
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
