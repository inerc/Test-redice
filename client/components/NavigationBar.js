/**
 * Created by inerc on 23.09.16.
 */

import React from 'react';
import { Link } from 'react-router';

import infoBar from './infoBar';
import InfoBar from './infoBar';
import ButtonBar from './buttonBar';



class NavigationBar extends React.Component {
    render(){
        return (
            <div className="tabs">
                <ul className="tabs--caption">
                    <li className="tabs--caption-home active">
                        <Link to="/" className="tabs--caption-home-icon">Начальная</Link></li>
                    <li className="tabs--caption-sections">
                        <div className="tabs--caption-sections-icon"></div> Разделы</li>
                    <li className="tabs--caption-statistics">
                        <div className="tabs--caption-statistics-icon"></div> Статистика</li>

                    <li className="tabs--caption-statistics">
                        <Link to="/singup" className="tabs--caption-statistics-icon">Sing_up</Link></li>
                    <li className="table--caption-login">
                        <div className="table--caption-login-name-avatar"></div>
                        <div className="table--caption-login-name">
                            <div className="table--caption-login-name-username">Константинопольский</div>
                            <div className="table--caption-login-mail">Konstantin_k@mail.ru</div>
                        </div>
                    </li>
                </ul>
                <InfoBar  />
                <ButtonBar  />

            </div>
        );
    }

}

export default NavigationBar;