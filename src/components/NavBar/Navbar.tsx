import { MdMenu } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower";
import {motion} from "framer-motion";

interface NavbarObject {
  id: number;
  title: string;
  link: string;
}

export default function Navbar() {
  const Navbar: NavbarObject[] = [
    {
      id: 1,
      title: "Home",
      link: "#",
    },
    {
      id: 2,
      title: "Categories",
      link: "#",
    },
    {
      id: 3,
      title: "Blog",
      link: "#",
    },
    {
      id: 4,
      title: "About",
      link: "#",
    },
    {
      id: 5,
      title: "Contact",
      link: "#",
    },
  ];

  return (
    <>
      <div className="py-8 text-white bg-[#151616]">
        <motion.nav 
        initial = {{opacity:0}}
        animate = {{opacity:1}}
        transition = {{duration:1 , delay:0.5}}
        className="flex items-center justify-between max-w-screen-xl px-4 mx-auto sm:px-8 lg:px-16 xl:px-20">
          {/* logo section */}
          <div>
            <a href="#" className="text-xl font-bold uppercase">
              Playing /{" "}
              <span className="font-extralight text-white/70">Market</span>
            </a>
          </div>
          {/* menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {Navbar.map((item) => (
                <li key={item.id}>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 999,
                      followSpeed: 1.5,
                      scale: 5,
                      mixBlendMode: "difference",
                    }}
                  >
                    <a
                      href={item.link}
                      className="inline-block py-2 px-4 uppercase hover:bg-white hover:text-[#151616] transition rounded-2xl"
                    >
                      {item.title}
                    </a>
                  </UpdateFollower>
                </li>
              ))}
              <div>
                 <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 999,
                      followSpeed: 1.5,
                      scale: 5,
                      mixBlendMode: "difference",
                    }}
                    >
                <button className="text-xl ps-14">
                    <SlEarphones />
                </button>
                </UpdateFollower>
              </div>
            </ul>
          </div>
          {/* mobile section */}
          <div className="md:hidden">
            <MdMenu className="text-4xl" />
          </div>
        </motion.nav>
      </div>
    </>
  );
}
