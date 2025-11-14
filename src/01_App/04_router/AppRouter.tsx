/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: AppRouter

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## КОМПОНЕНТЫ
import { Routes, Route, Navigate } from "react-router-dom";
import PageLayout from "@pages/index";

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const AppRouter = (): JSX.Element => {
   return (
      <Routes>
         <Route path="/" element={<PageLayout />}>

            <Route index element={<Navigate to="/game" replace></Navigate>}></Route>

            <Route path="profile" element={<h1>/profile<br />Профиль.</h1>}></Route>
            <Route path="shop" element={<h1>/shop<br />Магазин.</h1>}></Route>
            <Route path="game" element={<h1>/game<br />Игры.</h1>}></Route>
            <Route path="inventory" element={<h1>/inventory<br />Инвентарь.</h1>}></Route>
            <Route path="setting" element={<h1>/setting<br />Настройки.</h1>}></Route>

            <Route path="*" element={<Navigate to="/404" replace></Navigate>}></Route>
            <Route path="404" element={<h1>/404<br />Страница не найдена.</h1>}></Route>

         </Route>
      </Routes>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default AppRouter;
