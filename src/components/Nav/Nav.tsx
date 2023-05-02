import React from 'react';
import   './Nav.module.css';
import s from './Nav.module.css' // css модуль описан в уроке 14. (вместо s можно использовать любое название). В Nav.css добавлено слово module для того чтобы классы применялись именно из этого файла.
console.log(s) //посмотреть в консоли обьект s
const Nav = () => {

    return (

            <nav className={s.nav}>
                <div className={s.item}>
                    {/*точку не ставим перед слешем profile, как в импорте, иначе не будет работать*/}
                    <a href="/profile">Profile</a>
                </div>
                <div className={`${s.item} ${s.active}`}>   {/*дополнительное свойство класса*/}
                    <a href="/dialogs">Messages</a>
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