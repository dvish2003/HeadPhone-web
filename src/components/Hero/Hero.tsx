import { sub } from "framer-motion/client";
import HeadPhone1 from "../../assets/headphone.png";
import HeadPhone2 from "../../assets/headphone2.png";
import HeadPhone3 from "../../assets/headphone3.png";
import HeadPhone4 from "../../assets/headphone4.png";
import { useState } from "react";

const headPhoneData = [
  {
  id:1,
  image:HeadPhone1,
  title:"Headphone Wireless",
  subtitle:"Experience the freedom of wireless sound with our latest headphones.",
  price: "$199.99",
  modal:'Modal Beown',
  bgColor : '#8b5958'

},
  {
  id:2,
  image:HeadPhone2,
  title:"Headphone Wired",
  subtitle:"Enjoy high-quality sound with our premium wired headphones.",
  price: "$149.99",
  modal:'Modal Beown',
  bgColor : '#8b5958'
},
{
  id:3,
  image:HeadPhone3,
  title:"Headphone Noise Cancelling",
  subtitle:"Immerse yourself in music with our noise-cancelling headphones.",
  price: "$249.99",   
  modal:'Modal Beown',
  bgColor : '#8b5958'
},
{
  id:4,
  image:HeadPhone4,
  title:"Headphone Sport",
  subtitle:"Stay active with our sport headphones designed for comfort and durability.",
  price: "$179.99",
  modal:'Modal Beown',
  bgColor : '#8b5958' 
}
]

function Hero() {

  const [active,setActive] = useState(headPhoneData[0]);
  return (
    <section className="bg-[#151616] text-white">
      <div className="grid max-w-screen-xl grid-cols-1 px-4 mx-auto sm:px-8 lg:px-16 xl:px-20 md:drid-cols-2 min-h-[700px]">
        {/* HeadPhone info */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              <h1 className="text-3xl font-bold lg:text-6xl">{active.title}</h1>
          <p className="text-sm leading-loose text-white/80">
            {active.subtitle}
          </p>
          <button  style = {{
            backgroundColor : active.bgColor,
          }}className="inline-block px-4 py-2 font-normal rounded-sm">
            Buy and Listen
          </button>

          {/* head phone list separator */}
          <div className="flex items-center justify-center gap-4 !mt-24  md:justify-start">
            <div className="w-20 h-[1px] bg-white"></div>
            <p className="text-sm uppercase">Top Headphone for you</p>
            <div className="w-20 h-[1px] bg-white"></div>
          </div>

          {/* headphone list switch */}
          
            </div>
          </div>
          
        {/* hero image */}

        {/*  */}
      </div>
    </section>
  );
}

export default Hero;
