import React from 'react'

const About = () => {
  return (
    <section className="py-16 bg-[#f9f2ea] text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">About Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Welcome to GiftGenius! We are dedicated to making gift-giving easier, more fun, and more thoughtful. Our
            carefully curated selection of gifts ensures that you’ll find something special for every occasion, whether
            it’s a birthday, holiday, or a spontaneous act of kindness. With just a few clicks, you can find the perfect
            gift and have it delivered directly to your loved ones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center text-center">
            {/* <img
              src="https://via.placeholder.com/200"
              alt="Gift Selection"
              className="w-48 h-48 object-cover rounded-full mb-6"
            /> */}
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700">
              Our mission is to help you celebrate life’s special moments with a gift that’s as unique and thoughtful
              as the person receiving it. We believe that the right gift can create lasting memories and strengthen
              bonds between people.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            {/* <img
              src="https://via.placeholder.com/200"
              alt="Customer Service"
              className="w-48 h-48 object-cover rounded-full mb-6"
            /> */}
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Customer Care</h3>
            <p className="text-lg text-gray-700">
              Our customer support team is here to ensure that your experience with us is smooth and enjoyable. From
              helping you pick the perfect gift to assisting with any concerns you may have, we are dedicated to
              providing excellent service every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About