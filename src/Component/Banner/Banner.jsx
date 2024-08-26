import bannerImg from "../../assets/banner1.jpeg";
function Banner() {
  return (
    <div className="w-full h-[25rem] relative">
      <img src={bannerImg} alt="img" className="w-full h-full" />
      <div className="absolute top-20 left-0 right-0  mx-auto w-[25rem]">
        <div className="font-semiBold text-5xl text-center text-white mb-4">
          Crypto Tracker
        </div>
        <div className="text-xl text-white text-center">
          Get all info regarding cryptocurrencies
        </div>
      </div>
    </div>
  );
}

export default Banner;
