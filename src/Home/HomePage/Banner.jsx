const Banner = () => {
  return (
    <div className=" bg-gradient-to-r from-cyan-800 to-blue-800 w-full">
      <div className="container px-6 py-16  ">
        <div className="items-center lg:flex  max-w-[1200px] max-auto">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-bold text-white lg:text-[42px] space-y-6">
              The Leading Software Company in Bangladesh
              </h1>

              <p className="mt-4 text-white text-2xl font-medium">
                
                Think Software.Think SouthTech
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              src="https://www.southtechgroup.com/wp-content/uploads/2020/03/leading-software-company.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;


