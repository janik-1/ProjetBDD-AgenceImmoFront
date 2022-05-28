import { useState, useEffect } from "react";
import Axios from "axios";

import "../css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from "./sidebar";
import Header from "./Header";

export const Logementsell = () => {
  const [logementListVendu, setLogementListVendu] = useState([]);

  const Logsell = () => {
    Axios.get("http://localhost:8000/getlogvendus")
      .then((response) => {
        setLogementListVendu(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    Logsell();
  }, []);

  return (
    <div className="logementsell">
      <Sidebar />
      <Header />
      <h2> Liste des logements vendus</h2>

      {logementListVendu.map((val, key) => {
        return (
          <div key={val.Identifiant} className="logementsell">
            <p>Nom du logement : {val.Nomlog}</p>
            <p>Nombre de pièces :{val.NbPièces}</p>
            <p>Etat du logement : {val.Etat}</p>
            <p>Adresse : {val.Adresse}</p>
            <p>Prix : {val.Prix} euros</p>
            <p>Date disponibilités : {val.DateDispo.substr(0, 10)}</p>
            <p> Ville : {val.Ville}</p>
            <p> Superficie : {val.Superficie} m².</p>
            <p>
              Commission touché par l'agence :{" "}
              {1000 + val.Prix * (val.PourcentagePrixVente / 100)} euros.
            </p>
            <p>
              Le montant total :{" "}
              {val.Prix + 1000 + val.Prix * (val.PourcentagePrixVente / 100)}{" "}
              euros.
            </p>
            <p>La date de vente : {val.DateVente.substr(0, 10)} </p>
            <p>Acheté par : {val.Nom + " " + val.Prenom} </p>
            <p>----------------------------------------------------</p>
          </div>
        );
      })}

      <button type="button" class="btn btn-secondary text-white white">
        <a href="/" class="text-white text-decoration-none"> Retour à la page d'accueil</a>
      </button>
    </div>
  );
};

export default Logementsell;
