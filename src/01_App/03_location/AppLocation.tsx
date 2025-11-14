/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: AppLocation

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const AppLocation = (props: { children: React.ReactNode }): React.ReactNode => {

   const location = useLocation();

   useEffect(() => {

      console.log(`Path: %c${location.pathname}`, `color: ${location.pathname === '/404' ? 'red' : 'green'}`);

      scrollTo({ top: 0 });

   }, [location]);

   return props.children;
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default AppLocation;
