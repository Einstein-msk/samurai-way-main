import React from 'react';
import './Nav.module.css';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom"; // css модуль описан в уроке 14. (вместо s можно использовать любое название). В Nav.css добавлено слово module для того чтобы классы применялись именно из этого файла.
console.log(s) //посмотреть в консоли обьект s
const Nav = () => {

    return (

        <nav className={s.nav}>
            <div className={s.item}>
                {/*точку не ставим перед слешем profile, как в импорте, иначе не будет работать. NavLink тег  заменяющий собой тег <a>, для того, чтобы
                страница при переходе  не перезагружалась полностью, а работала как Single Page Application. Аттрибут тега NavLink  activeClassName имеет значение s.activeLink. При нажатии на ссылку
                 она будет золотого цвета, activeClassName специальный атрибут тега NavLink*/}
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>   {/*дополнительное свойство класса*/}
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </nav>

    );
};

export default Nav;