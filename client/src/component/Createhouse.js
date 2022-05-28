import { useState } from "react";
import Axios from "axios";

import "../css/Createhouse.css";

import Header from "./Header";
import Sidebar from "./sidebar";
import "../css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Createhouse = () => {
  const [nomlog, setNomlog] = useState("");
  const [nbpiece, setNbpiece] = useState(0);
  const [etat, setEtat] = useState("");
  const [adresse, setAdresse] = useState("");
  const [prix, setPrix] = useState(0);
  const [dated, setDated] = useState("");
  const [ville, setVille] = useState("");
  const [superficie, setSuperficie] = useState(0);

  const addLogement = () => {
    Axios.post("http://localhost:8000/createlog", {
      nomlog: nomlog,
      nbpiece: nbpiece,
      etat: etat,
      adresse: adresse,
      prix: prix,
      dated: dated,
      ville: ville,
      superficie: superficie,
      // superficie a gauche c est le keyname et a gauche c est la value
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <div className="createHouse">
      <Sidebar />
      <Header />
      <h2>Ajouter un nouveau logement</h2>
      <div class="row">
      <form class="mx-auto ">
        <label> Nom du logement </label>
        <input
          type="text"
          onChange={(event) => {
            setNomlog(event.target.value);
          }}
          required
        />
        <label> Nombre de pièces </label>
        <input
          type="number"
          onChange={(event) => {
            setNbpiece(event.target.value);
          }}
          required
        />
        <label> Etat </label>
        <input
          type="text"
          onChange={(event) => {
            setEtat(event.target.value);
          }}
          required
        />
        <label> Adresse </label>
        <input
          type="text"
          onChange={(event) => {
            setAdresse(event.target.value);
          }}
          required
        />
        <label> Prix </label>
        <input
          type="number"
          onChange={(event) => {
            setPrix(event.target.value);
          }}
          required
        />
        <label> Date disponibilités </label>
        <input
          type="date"
          onChange={(event) => {
            setDated(event.target.value);
          }}
        />
        <label> Ville </label>
        <input
          type="text"
          onChange={(event) => {
            setVille(event.target.value);
          }}
          required
        />
        <label> Superficie </label>
        <input
          type="number"
          onChange={(event) => {
            setSuperficie(event.target.value);
          }}
          required
        />

        <button onClick={addLogement} type="button" class="btn btn-secondary text-light mt-2 mb-2">
          <a href="/" class="text-decoration-none text-white">Ajouter le nouveau logement à la liste</a>
        </button>
      </form>
      </div>
      <button type="button" class="btn btn-secondary text-white white mb-4">
        <a href="/" class="text-decoration-none text-white"> Retour à la page d'accueil</a>
      </button>
    </div>
  );
};

export default Createhouse;
