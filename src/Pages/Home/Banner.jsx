const Banner = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center  h-[260px] sm:h-[350px] md:h-[600px] bg-cover"
      style={{ backgroundImage: "url(https://i.ibb.co/Kb9fG1f/bb.jpg)" }}
    >
      <img
        data-aos="zoom-in"
        data-aos-duration="3000"
        className="w-16 lg:w-18 border-2 border-white hover:scale-105 rounded-full"
        src="logoTT.png"
        alt=""
      />
      <p
        data-aos="fade-right"
        data-aos-duration="3000"
        className=" text-white mt-6 text-2xl md:text-3xl lg:text-5xl font-bold pr-10 md:pr-20"
      >
        Time
      </p>
      <p
        data-aos="fade-left"
        data-aos-duration="3000"
        className=" text-amber-300 mb-6 text-2xl md:text-3xl lg:text-5xl font-bold pl-10 md:pl-20"
      >
        Twist
      </p>
      <p
        data-aos="zoom-in"
        data-aos-duration="3000"
        className="text-white text-sm md:text-base lg:text-lg uppercase"
      >
        Twist Your Time, Track Your Success!
      </p>
    </div>
  );
};

export default Banner;
