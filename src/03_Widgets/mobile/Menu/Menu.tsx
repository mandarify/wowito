/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: Menu

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";
import { useRef, useEffect } from "react";

// ########## ТИПЫ
import type IMenu from "./Menu.types";

// ########## СТИЛИ
import "./Menu.styles.css";

// ########## КОМПОНЕНТЫ
import { NavLink } from "react-router-dom";

// ########## МОДУЛИ
import { UiSimple } from "@shared/01_ui";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const Menu = (props: IMenu): JSX.Element => {

   const menuRef = useRef<HTMLMenuElement>(null);

   useEffect(() => {

      if (menuRef.current) {
         menuRef.current.style.transform = `translateY(0)`;
      }

   }, []);

   return (
      <menu ref={menuRef} id="menu">

         <div className="menu-container">

            <div className="menu-box">

               <div className="menu__list">

                  <div className="menu-section menu-start">

                     <div className="menu-section-list">
                        <div className="menu__item">
                           <NavLink to="/profile" className={({ isActive }) => `menu__link ${isActive ? 'menu__link_active' : ''}`} end>
                              {({ isActive }) => (
                                 <>
                                    <div className="menu__top">
                                       <span className={`icon ${isActive ? 'icon-user' : 'icon-puser'} icon-md`}></span>
                                    </div>
                                    <div className="menu__bottom">
                                       <span className="menu__title _unselect">профиль</span>
                                    </div>
                                 </>
                              )}
                           </NavLink>
                        </div>

                        <div className="menu__item">
                           <NavLink to="/shop" className={({ isActive }) => `menu__link ${isActive ? 'menu__link_active' : ''}`} end>
                              <div className="menu__top">
                                 <span className="icon icon-shop icon-md"></span>
                              </div>
                              <div className="menu__bottom">
                                 <span className="menu__title _unselect">магазин</span>
                              </div>
                           </NavLink>
                        </div>
                     </div>


                  </div>

                  <div className="menu-section menu-middle">

                     <div className="menu__item">
                        <NavLink to="/game" className={({ isActive }) => `menu__link ${isActive ? 'menu__link_active' : ''}`} end>
                           <div className="menu__top">
                              {/* <span className="icon icon-fight icon-lg"></span> */}
                              <UiSimple.IconTgs src="icons/tgs/fight.json"></UiSimple.IconTgs>
                           </div>
                           <div className="menu__bottom">
                              <span className="menu__title _unselect">играть</span>
                           </div>
                        </NavLink>
                     </div>

                  </div>

                  <div className="menu-section menu-end">

                     <div className="menu-section-list">

                        <div className="menu__item">
                           <NavLink to="/inventory" className={({ isActive }) => `menu__link ${isActive ? 'menu__link_active' : ''}`} end>
                              <div className="menu__top">
                                 <span className="icon icon-box icon-md"></span>
                              </div>
                              <div className="menu__bottom">
                                 <span className="menu__title _unselect">ящик</span>
                              </div>
                           </NavLink>
                        </div>

                        <div className="menu__item">
                           <NavLink to="/setting" className={({ isActive }) => `menu__link ${isActive ? 'menu__link_active' : ''}`} end>
                              <div className="menu__top">
                                 <span className="icon icon-menu icon-md"></span>
                              </div>
                              <div className="menu__bottom">
                                 <span className="menu__title _unselect">меню</span>
                              </div>
                           </NavLink>
                        </div>

                     </div>


                  </div>

               </div>

            </div>

         </div>


      </menu>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default Menu;
