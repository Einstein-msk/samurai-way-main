import React from 'react';
import   './Nav.module.css';
import s from './Nav.module.css' // css модуль описан в уроке 14. (вместо s можно использовать любое название). В Nav.css добавлено слово module для того чтобы классы применялись именно из этого файла.
console.log(s) //посмотреть в консоли обьект s
const Nav = () => {

    return (

            <nav className={s.nav}>
                <div className={s.item}>
                    <a>Profile</a>
                </div>
                <div className={`${s.item} ${s.active}`}>   {/*дополнительное свойство класса*/}
                    <a>Messages</a>
                </div>
                <div className={s.item}>
                    <a>News</a>
                </div>
                <div className={s.item}>
                    <a>Music</a>
                </div>
                <div className={s.item}>
                    <a>Settings</a>
                </div>
            </nav>

    );
};

export default Nav;