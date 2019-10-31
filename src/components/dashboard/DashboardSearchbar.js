import React from 'react';
import '../layout/Layout.scss';

const DashboardShearchbar = () => {
    return (
        <div className="notification">
            <h1 className="title is-3">Rechercher une promotion</h1>
            <div className="selectpromsearchbar">
                <div className="select is-rounded is-medium">
                    <select id="country">
                        <option value="Pays">Pays</option>
                        <option value="France">France</option>
                        <option value="Maroc">Lille</option>
                        <option value="Canada">Nantes</option>
                        <option value="Asie">Bordeaux</option>
                    </select>
                </div>
                <div className="select is-rounded is-medium">
                    <select id="town">
                        <option value="Ville">Ville</option>
                        <optgroup label="France">
                            <option value="Paris">Paris</option>
                            <option value="Lille">Lille</option>
                            <option value="Nantes">Nantes</option>
                            <option value="Bordeaux">Bordeaux</option>
                        </optgroup>
                        <optgroup label="Maroc">
                            <option value="Casablanca">Casablanca</option>
                        </optgroup>
                        <optgroup label="Canada">
                            <option>Montréal</option>
                        </optgroup>
                        <optgroup label="Asie">
                            <option>Singapour</option>
                        </optgroup>
                    </select>
                </div>
                <div className="select is-rounded is-medium">
                    <select id="promNumber">
                        <option value="Promo">Promo</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                    </select>
                </div>
                <div className="select is-rounded is-medium">
                    <select id="title">
                        <option value="Intitulé">Intitulé</option>
                        <option>Consultant JS</option>
                        <option>Consultant Java</option>
                        <option>Consultant DevOps</option>
                    </select>
                </div>
                <div className="select is-rounded is-medium">
                    <select id="dates">
                        <option value="Dates">Dates</option>
                        <option>06/10/19-06/01/20</option>
                        <option>06/10/19-06/01/20</option>
                        <option>06/10/19-06/01/20</option>
                    </select>
                </div>
                <input className="button" type="submit" value="Rechercher"></input>
            </div>
        </div>
    );
};

export default DashboardShearchbar;
