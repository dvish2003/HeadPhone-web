import HeadPhone1 from "../../assets/headphone.png";
import HeadPhone2 from "../../assets/headphone2.png";
import HeadPhone3 from "../../assets/headphone3.png";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { easeInOut, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const fadeUp = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: easeInOut,
      },
      exit: {
        opacity: 0,
        y: 50,
        scale: 0.5,
        transition: {
          duration: 0.5,
          ease: easeInOut,
        },
      },
    },
  };
};

const headPhoneData = [
  {
    id: 1,
    image: HeadPhone1,
    title: "Headphone Wireless",
    subtitle:
      "Experience the freedom of wireless sound with our latest headphones.",
    price: "$199.99",
    modal: "Modal Beown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: HeadPhone2,
    title: "Headphone Wired",
    subtitle: "Enjoy high-quality sound with our premium wired headphones.",
    price: "$149.99",
    modal: "lim Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: HeadPhone3,
    title: "Headphone Noise Cancelling",
    subtitle: "Immerse yourself in music with our noise-cancelling headphones.",
    price: "$249.99",
    modal: "Ocean blue",
    bgColor: "#5d818c",
  },
];

function Hero() {
  const [active, setActive] = useState(headPhoneData[0]);

  const handleHeadPhoneChange = (data: unknown) => {
    setActive(data as (typeof headPhoneData)[0]);
  };

  return (
    <section className="bg-[#151616] text-white">
      <div className="grid max-w-screen-xl grid-cols-1 px-4 mx-auto sm:px-8 lg:px-16 xl:px-20 md:grid-cols-2 min-h-[700px]">
        {/* HeadPhone info */}
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
          <div className="space-y-5 text-center md:text-left">
            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 9999,
                  followSpeed: 0.5,
                  scale: 10,
                  rotate: -720,
                  mixBlendMode: "difference",
                }}
              >
                <motion.h1
                  key={active.id}
                  variants={fadeUp(0.2)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-3xl font-bold lg:text-6xl"
                >
                  {active.title}
                </motion.h1>
              </UpdateFollower>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={active.id}
                variants={fadeUp(0.4)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-sm leading-loose text-white/80"
              >
                {active.subtitle}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: active.bgColor,
                  zIndex: 9999,
                  followSpeed: 0.5,
                  scale: 6,
                  rotate: -720,

                  mixBlendMode: "difference",
                  backgroundElement: (
                    <div>
                      <img src={active.image} alt="" />
                    </div>
                  ),
                }}
              >
                <motion.button
                  key={active.id}
                  variants={fadeUp(0.6)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  style={{
                    backgroundColor: active.bgColor,
                  }}
                  className="inline-block px-4 py-2 font-normal rounded-sm"
                >
                  Buy and Listen
                </motion.button>
              </UpdateFollower>
            </AnimatePresence>

            {/* head phone list separator */}
            <div className="flex items-center justify-center gap-4 !mt-24  md:justify-start">
              <div className="w-20 h-[1px] bg-white"></div>
              <p className="text-sm uppercase">Top Headphone for you</p>
              <div className="w-20 h-[1px] bg-white"></div>
            </div>

            {/* headphone list switch */}
            <div className="grid grid-cols-3 gap-10">
              {headPhoneData.map((item) => {
                return (
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: item.bgColor,
                      zIndex: 9999,
                      followSpeed: 0.5,
                      scale: 6,
                      text: "View Details",
                      textFontSize: "3px",

                      mixBlendMode: "difference",
                      }}
                  >
                    <div
                      key={item.id}
                      onClick={() => handleHeadPhoneChange(item)}
                      className="grid grid-cols-2 cursor-pointer place-items-center"
                    >
                      <div>
                        <img src={item.image} alt="" className="w-[200px]" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-base font-bold">{item.price}</p>
                        <p className="text-xs font-normal text-nowrap">
                          {item.modal}
                        </p>
                      </div>
                    </div>
                  </UpdateFollower>
                );
              })}
            </div>
          </div>
        </div>
        {/* hero image */}{" "}
        <div className="flex flex-col items-center justify-end">
          <AnimatePresence mode="wait">
            <motion.img
              key={active.id}
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 100,
                transition: { duration: 0.2, delay: 0.2 },
              }}
              src={active.image}
              alt=""
              className="w-[300px] md:w-[400px] xl:w-[550px]"
            />
          </AnimatePresence>
        </div>
        {/* Whatsapp icon */}
        <div className="fixed text-3xl text-white bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
          <a href="">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
