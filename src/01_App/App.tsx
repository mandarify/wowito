/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: App

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ
import { BrowserRouter } from "react-router-dom";
import AppLocation from "./03_location/AppLocation";
import AppRouter from "./04_router/AppRouter";
import { Menu } from "@widgets/mobile";

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const App = (): JSX.Element => {
   return (
      <BrowserRouter>
         <AppLocation>

            <AppRouter />

            <Menu />

         </AppLocation>
      </BrowserRouter>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default App;
