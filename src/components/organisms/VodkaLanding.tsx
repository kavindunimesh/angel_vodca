import Link from 'next/link';
import Image from 'next/image';

import { FiFacebook } from 'react-icons/fi';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { PiTiktokLogo } from 'react-icons/pi';
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const VodkaLanding = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-[#E1E1E1] text-black">
      {/* Navigation */}
      <nav className="mx-auto relative flex max-w-[1400px] items-center justify-between px-2 ">
        <div className="font-fraunces text-2xl font-bold pt-5 tracking-wider">
          ROCKLAND
        </div>
        <button className="text-2xl transition-colors pt-5 hover:text-gray-600">
          <HiOutlineMenuAlt3 />
        </button>
         {/* Social Links */}
      <div className="absolute hidden lg:flex lg:top-[820px] xl:top-[798px] space-y-4  bottom-12  mb-5 flex-col">
        <Link 
          href="#" 
          className="flex h-10 w-10 items-center transition-colors hover:text-blue-600"
        >
          <FiFacebook size={32} />
        </Link>
        <Link 
          href="#" 
          className="flex h-10 w-10 items-center transition-colors hover:text-pink-600"
        >
          <FaInstagram size={32} />
        </Link>
        <Link 
          href="#" 
          className="flex h-10 w-10 items-center transition-colors hover:text-black"
        >
          <PiTiktokLogo size={32} />
        </Link>
        <Link 
          href="#" 
          className="flex h-10 w-10 items-center transition-colors hover:text-blue-400"
        >
          <FaXTwitter size={32} />
        </Link>
      </div>
      </nav>

      <div className="relative mx-auto max-w-[1150px] lg:min-h-[1000px]">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Background Image */}
          <div className="absolute   left-1/2 top-0 z-50 -translate-x-1/2 font-fraunces">
            <Image
              src="/v2.png"
              alt="Angel Vodka Background"
              width={877}
              height={1018}
              className="object-cover lg:h-screen 3xl:h-[1018px] "
              priority
            />
          </div>
          <div className="absolute   left-1/2 bottom-14 z-50 -translate-x-1/2 font-fraunces">
            <Image
              src="/down.png"
              alt="Angel Vodka Background"
              width={38}
              height={38}
              className="w-[38px] lg:h-[38px]"
              priority
            />
          </div>
          

          {/* Bottle Image */}
          <div className="absolute left-1/2 lg:-mt-20  xl:-mt-32 2xl:-mt-10 flex -translate-x-1/2 ">
            <Image
              src="/vodca1.png"
              alt="Angel Vodka Bottle"
              width={738}
              height={1044}
              className="object-cover lg:w-[738px] lg:h-[900px] xl:w-[738px] xl:h-[1044px]"
              priority
            />
          </div>

          {/* ABV Display */}
          <div className="absolute lg:left-[40%] lg:top-5 xl:left-[34%] xl:top-[-40px]">
            <div className="font-fraunces lg:text-[150px] xl:text-[280px] font-bold text-[#1E1E1E]">
              4
            </div>
          </div>

          <div className="absolute lg:left-[430px] lg:top-[215px] xl:left-[42%] xl:top-[270px]">
            <div className="font-fraunces xl:text-[32px] lg:text-[24px] font-light">
              ABV
            </div>
          </div>

          <div className="absolute flex lg:left-[47%] lg:top-[100px] xl:left-[49%] xl:top-[100px]">
            <span className="font-fraunces ml-10 lg:text-[90px] xl:text-[200px] font-bold">
              0
            </span>
            <span className="font-fraunces lg:text-[28px] xl:text-[48px] mt-1 xl:mt-12 font-bold">
              %
            </span>
          </div>

          {/* Brand Text */}
          <div className="absolute flex lg:gap-0 items-center lg:bottom-[210px] left-1/2 -translate-x-1/2 ">
            <span className="xl:ml-[60px] text-center font-fraunces font-bold lg:text-[128px] text-[#1E1E1E] leading-[157.82px]">
              ANGEL
            
            </span>
            <span 
              className="text-center lg:ml-32 font-bold font-['Fraunces'] lg:text-[128px] lg:leading-[157.82px]"
              style={{WebkitTextStroke: '2.5px #1E1E1E', WebkitTextFillColor: 'transparent'}}
            >
              VODKA
            </span>
          </div>

          <div className="absolute lg:bottom-[170px] lg:left-[140px] xl:left-[228px]">
            <h1 className="mt-8 text-center font-fraunces lg:text-[40px] font-light tracking-widest">
              Triple Filtered
            </h1>
          </div>

          <div className="absolute lg:bottom-[170px] lg:left-[548px] xl:left-[630px]">
            <h1 className="mt-8 lg:ml-8 text-center font-fraunces lg:text-[40px] font-light tracking-widest">
              Luxury Vodka
            </h1>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="relative mb-24 flex h-[90vh] flex-col items-center lg:hidden">
      {/* Background Container */}
      <div className="absolute inset-0 flex flex-col items-center">
        <div className="relative h-full w-full xs:h-[90vh] xs:w-[90vh]">
          <Image
            src="/v2.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-50 object-cover"
            priority
          />
           {/* Vodka Bottle */}
        <div className="absolute top-[10%] xs:top-0 flex w-full justify-center   ">
          <Image
            src="/vodca1.png"
            alt="Angel Vodka Bottle"
            width={738}
            height={1044}
            className="h-[550px] w-[400px] -mt-16 object-cover  xs:w-[650px] xs:h-[650px]"
            priority
          />
        </div>
        </div>
        
       
      </div>

      {/* ABV Numbers */}
      <div className="absolute left-1/2 top-[5%] flex -translate-x-1/2 items-baseline xs:top-[6%] sm:top-0">
        <div className="flex flex-col items-start">
          <span className="font-fraunces mr-6 -mt-10 text-[128px] font-bold xmd:-mt-16 xmd:text-[180px]">4</span>
          <span className="ml-10 -mt-10 text-sm xmd:-mt-16 xmd:ml-14">ABV</span>
        </div>
        
        <div className="flex flex-col items-start">
          <span className="font-fraunces flex text-7xl font-bold mr-4 xmd:text-[100px]">
            0
            <span className="text-xl font-bold xmd:text-2xl">%</span>
          </span>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-0 w-full space-y-2 text-center xs:bottom-12 xmd:bottom-24">
        <div className="grid items-center justify-center ml-2 mt-5 space-x-4 xs:flex xs:gap-10 sm:gap-20 xmd:gap-28">
          <span className="font-bodoni text-5xl font-bold tracking-widest">
            ANGEL
          </span>
          <span 
            className="font-fraunces text-5xl font-bold tracking-widest"
            style={{
              WebkitTextStroke: '1px #1E1E1E',
              WebkitTextFillColor: 'transparent'
            }}
          >
            VODKA
          </span>
        </div>
      </div>
    </div>


        {/* Main Content Grid */}
        <main className="relative  mx-5 grid max-w-[1150px] grid-cols-1 lg:mx-auto md:grid-cols-2 md:gap-10 lg:grid-cols-12 lg:gap-0">    
          
          
          {/* Left Column */}
          <div className="lg:col-span-3 text-black  hidden lg:block space-y-8 pt-20 lg:ml-12 lg:max-w-[188px]">
            <div className="font-fraunces  font-light">
              <p className="text-justify text-base text-black uppercase tracking-wide leading-[19px]">
                Angel Vodka is a premium spirit crafted for those who seek exceptional quality and a touch of elegance in every sip. Distilled with precision and care, it delivers a smooth and refined experience, perfect for any occasion. Let the purity and depth of flavor elevate your senses.
              </p>
              <h2 className="text-2xl mt-5 text-black font-semibold uppercase">Angel Vodka</h2>
              <p className="text-xs text-black uppercase">ENLIGHTENED SPIRITS</p>
              <p className="text-base text-black mt-5 uppercase">
                Angel Vodka: Pure, smooth, enlightened luxury.
              </p>
            </div>
          </div>

          {/* Center Column */}
          <div className="hidden lg:col-span-6 lg:block" />

          {/* Right Column */}
          <div className="font-fraunces hidden lg:block lg:col-span-3 space-y-8 pt-20 lg:ml-12 lg:max-w-[188px]">
            <div className="space-y-2">
              <h2 className="text-2xl text-center md-text-start text-black font-semibold">ANGEL VODKA</h2>
              <p className="grid text-center text-xs text-black">
                ENLIGHTENED <span>SPIRITS</span>
              </p>
              <p className="text-center text-2xl font-normal text-black">1996</p>
            </div>

            <div className="space-y-2">
              <p className="text-center text-sm font-light">PRODUCT OF</p>
              <p className="text-center text-2xl font-normal text-black">SRI LANKA</p>
              <div className="flex justify-between text-sm font-light">
                <span>750 ML</span>
                <span>40% ABV</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-justify text-base text-black font-light uppercase">
                TRIPLE FILTERED WITH CHARCOAL TO ACHIEVE ITS DISTINCT SMOOTHNESS
              </p>
              <p className="text-justify text-base text-black font-light leading-[19px] uppercase">
                THE ANGEL VODKA (ALSO ANGEL BEACH VODKA) IS BREWED LOCALLY TO COMPETE
                WITH THE LIKES OF OTHER INTERNATIONAL BRANDS.
              </p>
            </div>
          </div>
        </main>
      </div>

     
    </div>
  );
};

export default VodkaLanding;
