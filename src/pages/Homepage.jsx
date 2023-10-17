function Homepage() {
  return (
    <>
      <div className="fixed navbar bg-white z-40 w-full">
        <Navbar />
      </div>

      {/* home page */}
      <div
        className="px-12 gap-44 items-center flex justify-center h-screen w-full home"
        style={{
          background: `url('https://i.imgur.com/JU20mGy.png')`, // Updated with the correct image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="pl-20">
          <h1 className="text-6xl w-3/5 pr-20 text-[#24387a] font-semibold">
            Your Help Matters,
            <br />
            No Matter How Big Or Small.
          </h1>
          {/* Rest of your content */}
        </div>
        <div className="h-96 sideimg w-96 overflow-hidden border-8 border-black rounded-full">
          {/* Your image or content */}
        </div>
      </div>

      {/* Continue with the rest of your code, including the "about us," "Program To Empower Others," and other sections. */

      <div>
        <Tshirt />
      </div>

      <div>
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
