import { useState, useEffect } from "react";
import Axios from "axios";

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
      <h1> Liste des logements vendus</h1>

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

      <button>
        <a href="/"> Retour à la page d'accueil</a>
      </button>
    </div>
  );
};

export default Logementsell;
