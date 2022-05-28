import Axios from "axios";
import { useState, useEffect } from "react";

import Sidebar from "./sidebar";
import Header from "./Header";

export const Listvisit = () => {
  const [ListVisit, setListVisit] = useState([]);

  Axios.get("http://localhost:8000/listvisit")
    .then((response) => {
      setListVisit(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div className="listvist">
      <Sidebar />
      <Header />
      <h2> Liste des visites</h2>

      {ListVisit.map((val, key) => {
        return (
          <div key={val.Nomlog} className="listvisit">
            <p>Le logement concerné par la visite : {val.Nomlog}</p>
            <p>Nom de la personne : {val.Nom}</p>
            <p>Prenom de la personne: {val.Prenom}</p>
            <p>Date de la visite : {val.DateVisite}</p>
            <p>----------------------------------------</p>
          </div>
        );
      })}

      <button>
        <a href="/"> Retour à la page d'accueil</a>
      </button>
    </div>
  );
};

export default Listvisit;
