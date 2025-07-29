
const DashboardHeader = () => {

  return (
    <div className="bg-white/80 backdrop-blur-xl border-b border-gray-100 top-0 z-40">

      
      <div className="px-4 sm:px-6 lg:px-8">

        {/* Main Header */}
        <div className="py-4 sm:py-6">
          <div className="flex items-start justify-between gap-4">
            {/* Left Section */}
            <div className="flex items-start space-x-3 sm:space-x-4 min-w-0 flex-1">

              <div className="min-w-0 flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Good evening, Sarah
                  </h1>
                  <span className="text-xl sm:text-2xl">👋</span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Here&apos;s what&apos;s happening with your patients today
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
                <p className="text-sm font-medium text-gray-900">Friday, July 25</p>
                <p className="text-xs text-gray-500">2:34 PM</p>
              </div>

              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold shadow-lg">
                S
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Border Gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </div>
  );
};

export default DashboardHeader;