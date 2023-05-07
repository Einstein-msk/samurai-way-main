import React from 'react';
import s from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        // делаеем страницу Messages. Она будет состоять из двух div. Первая будет - s.dialogs, а вторая - s.messages.
        // Отобразим их в виде 2х колонок с помощью display: grid в Dialogs.module.css.
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog+" "+ s.active}>
                    {/*два склееных класса, диалог активен (выбран), будет подсвечен золотым цветом. В Dialogs.module.css
                    этот класс будет называться .dialogsItems .active*/}
                    Bogdan
                </div>
                <div className={s.dialog}>
                    Zhenya
                </div>
                <div className={s.dialog}>
                    Egor
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Alexey
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How are you?</div>
                <div className={s.dialog}>What are you doing today?</div>
            </div>

        </div>
    );
};

export default Dialogs;