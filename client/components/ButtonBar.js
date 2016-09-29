/**
 * Created by inerc on 29.09.16.
 */
import React from "react"

class buttonBar extends React.Component {
    render(){
        return (
            <div className="tabs--content-background">
                <div className="tabs--content-buttons-left">
                    <button className="tabs--content-buttons-save">
                        <div className="tabs--content-buttons-save-img"></div>
                        Сохранить
                    </button>
                    <button className="tabs--content-buttons-sent">
                        <div className="tabs--content-buttons-sent-img"></div>
                        Отправить
                    </button>
                    <button className="tabs--content-buttons-return">
                        <div className="tabs--content-buttons-return-img"></div>
                        Вернуть
                    </button>
                </div>
                <div className="tabs--content-buttons-right">
                    <button className="tabs--content-buttons-restore">
                        <div className="tabs--content-buttons-restore-img"></div> Восстановить</button>
                    <button className="tabs--content-buttons-collapse-expande">
                        <div className="tabs--content-buttons-collapse-img"></div>
                        <div className="tabs--content-buttons-expande-img"></div>
                        Свернуть / развернуть КОСГУ</button>
                    <button className="tabs--content-buttons-excel">
                        <div className="tabs--content-buttons-excel-img"></div> Excel</button>
                </div>
                <div className="delimiter--line"></div>

                <h1>Ho</h1>
            </div>
        );
    }

}

export default buttonBar;