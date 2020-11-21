import React from 'react';
import {Link} from 'react-router-dom';
import type {ErrorPageProps} from './types';
import './error.scss';

export const ErrorPage = ({type}: ErrorPageProps): JSX.Element => {
    let errorTxt = '';
    switch (type) {
        case '404':
            errorTxt = 'Ничего не найдено';
            break;
        case '409':
            errorTxt = 'У вас нет доступа';
            break;
        case '500':
            errorTxt = 'Уппс, у нас произошла ошибка';
            break;
        default:
            errorTxt = 'Что-то пошло не так!';
    }

    return (
        <main className="error">
            <div className="error__inner">
                <div className="error__header">
                    <h1 className="error__header-front">{type}</h1>
                    <span className="error__header-back">{type}</span>
                </div>
                <div className="error__cnt">
                    {errorTxt}
                    <div className="mt-2" />
                    <div>Мы скоро всё исправим.</div>
                    <div>А пока можно начать с самого начала.</div>
                    <div className="mt-5" />
                    <Link to="/" className="link">
                        На старт
                    </Link>
                </div>
            </div>
        </main>
    );
};
