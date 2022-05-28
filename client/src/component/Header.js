import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "../css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return(
        <div class="container-fluid">
            <div className="Header" class="pb-4 text-center pt-4 bg-secondary rounded">
                <h1 class="text-dark">Site BDD Maison</h1>
            </div>
        </div>

    );
}

export default Header;

