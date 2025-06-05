import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <div id='contact' className="w-full mb-20 p-4 sm:p-6">
      {/* Contact Information Section */}
      <div className="flex flex-col lg:flex-row w-full h-full justify-center gap-6 relative">
        <div className="relative bg-gray-800 w-full lg:w-[80%] rounded-2xl border-4 border-[#0A9642] text-white p-4 sm:p-6 space-y-6 min-h-[850px] lg:min-h-fit">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Get in Touch With Us</h2>
          <p className="text-xs sm:text-sm">We're here to help you make the switch to solar – let's connect!</p>

          {/* Phone */}
          <div className="flex items-start space-x-3">
            <div className="bg-green-500 p-2 rounded-full">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div>
              <h6 className="text-xs sm:text-sm font-semibold">Phone</h6>
              <p className="text-xs sm:text-sm">+91 7845276010</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-3">
            <div className="bg-green-500 p-2 rounded-full">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div>
              <h6 className="text-xs sm:text-sm font-semibold">Email</h6>
              <p className="text-xs sm:text-sm">info@ewigenergie.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start space-x-3">
            <div className="bg-green-500 p-2 rounded-full">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div>
              <h6 className="text-xs sm:text-sm font-semibold">Location</h6>
              <div className="mt-2 space-y-2 text-sm">
                <div>
                  <h6 className="text-white font-semibold text-xs sm:text-sm">Register Office</h6>
                  <p className="text-[10px] sm:text-xs">
                    16/32, Mankulam, Devakulam Post, Kanyakumari Dist.<br />
                    Tamilnadu - 629704
                  </p>
                </div>
                <div>
                  <h6 className="text-white font-semibold text-xs sm:text-sm pt-2">Corporate Office</h6>
                  <p className="text-[10px] sm:text-xs">
                    Flat No.F-1, PlotNO.11, Arunachalam Main Road, Ambal<br />
                    Nagar, Porur, Chennai - 600116
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote form - responsive position */}
          <div className="w-full lg:w-[40%] absolute lg:top-0 lg:right-8 py-8 mt-8 bg-[#0A9642] rounded-2xl p-4 sm:p-6">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1">REQUEST A QUOTE</h3>
            <hr className="border-white w-16 mb-4" />
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0A9642]"
                  placeholder="Complete Name *"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0A9642]"
                  placeholder="Email Address *"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0A9642]"
                  placeholder="Phone No *"
                />
              </div>
              <div className="mb-6">
                <textarea
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-2xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0A9642]"
                  placeholder="Tell Us About Your Project / Ideas / Thoughts *"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-500 text-black text-sm sm:text-base font-semibold py-2 sm:py-3 px-5 sm:px-6 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
