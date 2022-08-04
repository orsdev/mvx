const Header = () => {
  return (
    <header className="home__header">
      <h1 className="text-2xl xs:text-3xl base:text-4xl sm:text-5xl md:text-6xl font-catalina">
        Access <span>Fast Finance</span>
        <span className="block my-2">
          and <span className="text-secondary">Easy Shipping</span>
        </span>
        <span className="block">Around The World</span>
      </h1>
      <p className="text-[14.2px] leading-6 mt-9 max-w-[600px]">
        MVX offers you freight financing, frieght tracking, door to door
        shipping and more, all at the tip of your fingers. We eliminate the
        headache of global shipping for you.
      </p>

      <div className="mt-14 text-white relative">
        <button
          type="button"
          className="mr-3 mb-2 base:mr-10 transition ease-in-out bg-secondary hover:bg-orange-400 rounded-md px-5 py-3 font-montLight"
        >
          Move Cargo
        </button>
        <button
          type="button"
          className="mb-2 transition ease-in-out text-primary hover:text-blue-500 font-montSemiBold"
        >
          Get Financed
          <span className="text-[25px] inline-block ml-1 relative top-[1.5px]">
            &#8250;
          </span>
        </button>

        <div className="hidden sm:block absolute right-0 md:right-14 -top-10">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/arrow-down.png"}
            alt="Scroll Down Arrow"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
