/**
 * Created by inerc on 23.09.16.
 */

import React from 'react';
import { Link } from 'react-router';
import InfoBar from './InfoBar';
import ButtonBar from './ButtonBar'

export default () => {
    return (
        <div className="tabs">
            <ul className="tabs--caption">
                <li className="tabs--caption-home active">
                    <div className="tabs--caption-home-icon"></div> Начальная</li>
                <li className="tabs--caption-sections">
                    <div className="tabs--caption-sections-icon"></div> Разделы</li>
                <li className="tabs--caption-statistics">
                    <div className="tabs--caption-statistics-icon"></div> Статистика</li>
                <li className="tabs--caption-statistics">
                    <Link to="/" className="tabs--caption-statistics-icon">Red_Dice</Link></li>
                <li className="tabs--caption-statistics">
                    <Link to="/login" className="tabs--caption-statistics-icon">Login</Link></li>
                <li className="table--caption-login">
                    <div className="table--caption-login-name-avatar"></div>
                    <div className="table--caption-login-name">
                        <div className="table--caption-login-name-username">Константинопольский</div>
                        <div className="table--caption-login-mail">Konstantin_k@mail.ru</div>
                    </div>
                </li>
            </ul>
            <InfoBar/>
            <ButtonBar/>
        </div>
    );
}