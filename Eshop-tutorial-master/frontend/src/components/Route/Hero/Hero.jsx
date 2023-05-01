import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat  bg-cover bg-left-bottom ${styles.noramlFlex}`}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#111] font-[600] capitalize`}
        >
          HOME DECORATION
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#333] first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left">
        While designing your home is no doubt exciting, the process can also be overwhelming. Trying to achieve the right balance of form and function has its challenges. Maybe you live in a small space with little room for grand (or security deposit–jeopardizing) gestures. Or perhaps you live in a house that’s replete with spatial quirks you have no idea how to even begin to address. Whatever you’ve got to work with and whatever your style, we’re here to help. In fact, we pored through our archive for the best practical home decor ideas in EVEE's DECOR’s pages. Whether you’re looking to change up your decor style, incorporate chic little touches, or simply find the perfect paint color, designers have ideas for you. Below, we’ve selected 90 of our favorites to inspire you as you curate your dream home.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#ffd] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
