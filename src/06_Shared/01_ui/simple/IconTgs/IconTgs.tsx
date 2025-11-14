/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: IconTgs

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";
import { useEffect, useRef } from "react";

// ########## ТИПЫ
import type IIconTgs from "./IconTgs.types";

// ########## СТИЛИ
import "./IconTgs.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import lottie from "lottie-web";
import type { AnimationItem } from "lottie-web";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const IconTgs = ({ src }: IIconTgs): JSX.Element => {

   const containerRef = useRef<HTMLDivElement>(null);
   const animationRef = useRef<AnimationItem | null>(null);

   useEffect(() => {
      if (!containerRef.current) return;

      const anim = lottie.loadAnimation({
         container: containerRef.current,
         renderer: "svg",
         loop: false,
         autoplay: false,
         path: src,
      });

      animationRef.current = anim;

      return () => anim.destroy();
   }, [src]);

   const handleClick = () => {
      const anim = animationRef.current;
      if (!anim) return;

      anim.stop();
      anim.play();
   };

   return (
      <div className="icon-tgs" ref={containerRef} onClick={handleClick} />
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default IconTgs;
