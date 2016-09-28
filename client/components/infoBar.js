/**
 * Created by inerc on 28.09.16.
 */

import React from 'react';

class infoBar extends React.Component {

    render(){
        return (
            <div className="tabs--content-projectcosts">
                <div className="tabs--content-projectcosts-enters">
                    <div className="tabs--content-projectcosts-text">Ввод проекта расходов УПФР и ОПФР на себя</div>
                    <div className="container"></div>
                    <div className="tabs--content-projectcosts-enters">
                        Вводит:
                        <div className="tabs--content-projectcosts-enters-kemerev">ОПФР по Кемеровской области</div>
                    </div>
                    <div className="tabs--content-projectcosts-enters">
                        Согласовывает:
                        <div className="tabs--content-projectcosts-enters-kemerev"> Куратор ОПФР для ТО 52000 (ОПФР по Кемеровской области)</div>
                    </div>
                </div>
                <div className="tabs--content-projectcosts-instructions-container">
                    <button className="tabs--content-projectcosts-instructions-btn"></button>
                    <div className="tabs--content-projectcosts-instructions">
                        Инструкция по расчету проекта расходов
                    </div>
                </div>
                <div className="tabs--content-save-data">Данные сохранены. Восстановить прежние значения</div>
            </div>

        );

    }

}


export default infoBar;