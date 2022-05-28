import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "../css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default props => {
  return (
    <Menu>
        <h1 className="menu-title">Menu de navigation</h1>
        <a className="menu-item" href="/">
            Accueil
        </a>
        <a className="menu-item" href="/logementsell">
            Les logements vendus
        </a>

        <a className="menu-item" href="/create">
            Ajouter un nouveau logement
        </a>
        <a className="menu-item" href="/listvisit">
            Liste des visites
        </a>
        <a className="menu-item" href="/listprsn">
            Liste des personnes
        </a>
    </Menu>
  );
};