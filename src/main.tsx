/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: MAIN

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// ########## ТИПЫ

// ########## СТИЛИ
import "@styles/style.css";

// ########## КОМПОНЕНТЫ
import App from '@app/App.tsx';
import { UiComplex } from '@shared/01_ui';

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


/* Задний фон приложения. */
const backdrop = document.getElementById('backdrop')!;

/* Вход в приложение. */
const wrapper = document.getElementById('wrapper')!;


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


createRoot(backdrop).render(<UiComplex.GridChess />);

createRoot(wrapper).render(
   <StrictMode>
      <App />
   </StrictMode>,
);


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

// const tg = (window as any).Telegram;
// console.log(tg.WebApp.initData);
