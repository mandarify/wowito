/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: GridChess

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";
import { useEffect, useRef, useState } from "react";

// ########## ТИПЫ

import type IGridChess from "./GridChess.types";

// ########## СТИЛИ

import "./GridChess.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const PATTERN_SIZE = 82;


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const GridChess = (props: IGridChess): JSX.Element => {

   const cheassBlackRef = useRef<SVGGElement>(null);
   const cheassWhiteRef = useRef<SVGGElement>(null);

   const chessBoardRef = useRef<SVGSVGElement>(null);

   const [width, setWidth] = useState(window.innerWidth);

   useEffect(() => {

      /* Изменение размеров сетки. */
      const handleResize = () => {
         const newWidth = window.innerWidth;
         setWidth(newWidth);
         if (!chessBoardRef.current) return;
         /* Вычислить ближайшую ширину кратную размеру паттерна (81). */
         const adjustedWidth = Math.ceil(newWidth / PATTERN_SIZE) * PATTERN_SIZE;
         chessBoardRef.current.setAttribute("width", `${adjustedWidth}px`);
         /* Вычислить сдвиг для центрирования */
         const offset = (adjustedWidth - newWidth) / 2;
         chessBoardRef.current.style.transform = `translateX(-${offset}px)`;
      };

      const initChess = () => {
         if (!cheassBlackRef.current || !cheassWhiteRef.current) return;
         cheassBlackRef.current.style.opacity = '1';
         cheassWhiteRef.current.style.opacity = '1';
      };

      handleResize();
      initChess();

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);

   }, []);

   return (
      <>
         <svg ref={chessBoardRef} id="chessboard" xmlns="http://www.w3.org/2000/svg">

            <defs>

               <filter id="overlayBlack">
                  <feFlood floodColor="#000000" floodOpacity="1" result="color" />
                  <feComposite in="color" in2="SourceAlpha" operator="in" />
               </filter>

               <filter id="innerBlur" x="0" y="0" width="100%" height="100%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
                  <feComposite in="blur" in2="SourceGraphic" operator="in" />
               </filter>

               <clipPath id="clipChess">
                  <rect width="40" height="40" rx="1" ry="1" />
               </clipPath>

               <mask id="gradientMask">
                  <radialGradient id="radial" cx="50%" cy="60%" r="40%">
                     <stop offset="50%" stopColor="white" stopOpacity="0" />
                     <stop offset="100%" stopColor="white" stopOpacity="0.6" />
                  </radialGradient>
                  <rect x="5" y="5" width="30" height="30" fill="url(#radial)" />
               </mask>

               <g ref={cheassBlackRef} id="chessBlack" className="chessItem" transform="scale(0.98)" opacity="0" clipPath="url(#clipChess)">
                  <rect width="40" height="40" rx="1" ry="1" fill="#48327A"></rect>
                  <rect x="0.5" y="0.5" width="39" height="39" rx="1" ry="1" fill="transparent" stroke="white" strokeWidth="1" strokeOpacity="0.1" filter="blur(1px)"></rect>
                  <image className="img-pattern" href="/imgs/anubis.webp" x="5" y="5" width="30" height="30" filter="url(#overlayBlack)" />
                  <image className="img-pattern-stoke" href="/imgs/anubis.webp" x="5" y="5" width="30" height="30" filter="url(#overlayBlack)" mask="url(#gradientMask)" />
               </g>

               <g ref={cheassWhiteRef} id="chessWhite" className="chessItem" transform="scale(0.98)" opacity="0" clipPath="url(#clipChess)">
                  <rect width="40" height="40" rx="1" ry="1" fill="#543F84"></rect>
                  <rect x="0.5" y="0.5" width="39" height="39" rx="1" ry="1" fill="transparent" stroke="white" strokeWidth="1" strokeOpacity="0.1" filter="blur(1px)"></rect>
                  <image className="img-pattern" href="/imgs/cherry.webp" x="5" y="5" width="30" height="30" filter="url(#overlayBlack)" />
                  <image className="img-pattern-stoke" href="/imgs/cherry.webp" x="5" y="5" width="30" height="30" filter="url(#overlayBlack)" mask="url(#gradientMask)" />
               </g>

               <pattern id="chessPattern" width="82" height="82" patternUnits="userSpaceOnUse">
                  <use href="#chessBlack" x="0" y="0" />
                  <use href="#chessWhite" x="41" y="0" />
                  <use href="#chessWhite" x="0" y="41" />
                  <use href="#chessBlack" x="41" y="41" />
               </pattern>

            </defs>

            <rect width="100%" height="100%" fill="url(#chessPattern)"></rect>

         </svg>

         <div id="backdropGradient"></div>
      </>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default GridChess;
