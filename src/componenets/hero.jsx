/** @format */
import "./../styles/hero.css";

function Hero() {
  return (
    <div className='border-b-2 border-opacity-20 border-yellow-600'>
      <div className='hero flex flex-col md:flex-row py-20 md:py-40 text-gray-800'>
        <div className='md:w-4/6 px-5 self-center'>
          <h1 className='text-4xl md:text-7xl font-bold pb-6 md:pb-10'>
            When <span className='highlight relative z-10'>innovation</span>{" "}
            meets <span className='highlight relative z-10'>simplicity</span>.
          </h1>
          <p className='text-xl md:text-2xl text-gray-700'>
            Elevating your financial journey with streamlined solutions for a
            more straightforward and enriching experience.
          </p>
        </div>
        <div className='md:w-2/6 mt-6 md:mt-0'>
          <img
            className='mx-auto md:mx-0 w-full md:w-auto'
            // src='https://cdni.iconscout.com/illustration/premium/thumb/business-startup-3247196-2713128.png'
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F355-3556045_https-www-mycaptain-in-workshop-entrepreneurship-png-clipart.png&f=1&nofb=1&ipt=60e7b92884506657fb5ea9fa4e71a29adf93f56a2d5c57d6a6e9a7732ea27839&ipo=images'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
