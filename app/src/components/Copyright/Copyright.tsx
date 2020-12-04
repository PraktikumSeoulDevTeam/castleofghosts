import React from 'react';
import './Copyright.scss';

export function Copyright(): JSX.Element {
    return (
        <div className="copyright">
            <div className="copyright__title">Created by:</div>
            <div className="copyright__names mt-4">
                <div className="copyright__name px-4">
                    Tema
                    <div className="copyright__icon copyright__icon_tema mt-1" />
                </div>
                <div className="copyright__name px-4">
                    Nikita
                    <div className="copyright__icon copyright__icon_nikita mt-1" />
                </div>
                <div className="copyright__name px-4">
                    Dima
                    <div className="copyright__icon copyright__icon_dima mt-1" />
                </div>
                <div className="copyright__name px-4">
                    Jenya
                    <div className="copyright__icon copyright__icon_jenya mt-1" />
                </div>
            </div>
        </div>
    );
}
