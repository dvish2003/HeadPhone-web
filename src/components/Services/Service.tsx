import Icon1 from "../../assets/icons/obj1.png";
import Icon2 from "../../assets/icons/obj2.png";
import Icon3 from "../../assets/icons/obj3.png";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Security",
    desc: "Our advanced security solutions ensure maximum protection for your property and peace of mind.",
    icon: Icon1,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Guarantee",
    desc: "We stand by our services with a 100% satisfaction guarantee, ensuring you get the results you expect.",
    icon: Icon2,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Affordability",
    desc: "High-quality protection at budget-friendly rates, giving you the best value for your investment.",
    icon: Icon3,
    delay: 0.6,
  },
];

export default function Service() {
  return (
    <section className="py-8 bg-gray-100 font-popins">
      <div className="px-4 mx-auto sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-14">
        <h1 className="pb-10 text-3xl font-bold text-center">Our Services</h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ServicesData.map((data) => (
            <UpdateFollower key={data.id}
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 0.5,
                scale: 5,
                rotate: -720,
                mixBlendMode: "difference",
                backgroundElement:(
                    <div>
                        <img src={data.icon} alt="" />
                    </div>
                )
              }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: data.delay, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
                className="p-6 text-center transition bg-white shadow-lg cursor-pointer rounded-2xl hover:shadow-xl"
              >
                <img
                  src={data.icon}
                  alt={data.title}
                  className="object-contain w-16 h-16 mx-auto mb-4"
                />
                <h2 className="mb-2 text-xl font-bold">{data.title}</h2>
                <p className="text-sm text-gray-600">{data.desc}</p>
              </motion.div>
            </UpdateFollower>
          ))}
        </div>
      </div>
    </section>
  );
}
