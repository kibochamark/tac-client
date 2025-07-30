'use client';

import React from 'react';

interface DashboardHeaderProps {
  username: string;
  date?: string;
  time?: string;
  description?: string;
}

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  username,
  date,
  time,
  description,
}) => {
  const greeting = `${getGreeting()} ${username}`;

  const currentDate = date || new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const currentTime = time || new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const paragraph =
    description || `Here's what's happening with your patients today`;

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="py-4 sm:py-6">
          <div className="flex items-start justify-between gap-4">
            {/* Left Section */}
            <div className="flex items-start space-x-3 sm:space-x-4 min-w-0 flex-1">
              <div className="min-w-0 flex-1">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1">
                  {greeting}
                </h1>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {paragraph}
                </p>

                {/* Mobile-only quick stats */}
                <div className="mt-3 flex items-center space-x-4 text-xs text-gray-500 sm:hidden">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                    12 Active
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-1"></div>
                    3 Pending
                  </span>
                </div>
              </div>
            </div>

            {/* Right Section - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-right">
                <h3 className="text-sm font-medium text-gray-900">{currentDate}</h3>
                <p className="text-xs text-gray-500">{currentTime}</p>
              </div>

              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold shadow-lg">
                {username.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Border Gradient */}
      <div className="md:hidden h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </>
  );
};

export default DashboardHeader;
