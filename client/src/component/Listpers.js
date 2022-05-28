import Axios from "axios";
import { useState, useEffect } from "react";

import Sidebar from "./sidebar";
import Header from "./Header";

export const Listpers = () => {
  const [ListPersonne, setListPersonne] = useState([]);

  const Listperso = () => {
    Axios.get("http://localhost:8000/getlistpers")
      .then((response) => {
        setListPersonne(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    Listperso();
  }, []);

  return (
    <div className="logementsell">
      <Sidebar />
      <Header />
      <h2> Liste des personnes</h2>

      {ListPersonne.map((val, key) => {
        return (
          <div key={val.Nom} className="listperso">
            <p>Nom de la personne : {val.Nom}</p>
            <p>Prenom de la personne: {val.Prenom}</p>
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
export default Listpers;
