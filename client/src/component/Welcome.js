import { useState, useEffect } from "react";
import Axios from "axios";
import "../css/Welcome.css";

import { UpdatLogement } from "./Updatehouse";
import { DeleteLogement } from "./Deletelogement";
import { Newvisit } from "./Newvisite";
import { Ventelogement } from "./Ventelogement";
import { AddGarage } from "./Addgarage";

export const Welcome = () => {
  const [logementList, setLogementList] = useState([]);
  const [garageList, setGarageList] = useState([]);
  const [showform, setShowForm] = useState(false);
  const [showformnew, setShowFormnew] = useState(false);
  const [showformvente, setShowFormVente] = useState(false);
  const [showformgarage, setShowFormGarage] = useState(false);
  const [nomlog, setNomlog] = useState("");
  const [nbpiece, setNbpiece] = useState(0);
  const [etat, setEtat] = useState("");
  const [adresse, setAdresse] = useState("");
  const [prix, setPrix] = useState(0);
  const [dated, setDated] = useState("");
  const [ville, setVille] = useState("");
  const [superficie, setSuperficie] = useState(0);
  const [datevisit, setDatevisit] = useState("");
  const [nompers, setNompers] = useState("");
  const [prenompers, setPrenompers] = useState("");
  const [nomacheteur, setNomacheteur] = useState("");
  const [prenomacheteur, setPrenomacheteur] = useState("");
  const [pourcentage, setPourcentage] = useState(0);
  const [datevente, setDatevente] = useState("");
  const [adressegarage, setAdresseGarage] = useState("");

  const showForm = () => {
    setShowForm(true);
  };

  const showFormnew = () => {
    setShowFormnew(true);
  };

  const showFormVente = () => {
    setShowFormVente(true);
  };

  const showFormGarage = () => {
    setShowFormGarage(true);
  };

  const getLogement = () => {
    Axios.get("http://localhost:8000/getlog")
      .then((response) => {
        setLogementList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getGarage = () => {
    Axios.get("http://localhost:8000/getgarage")
      .then((response) => {
        setGarageList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getLogement();
    getGarage();
  }, []);

  return (
    <div className="welcome">
      <h1> Liste des logements disponibles</h1>

      {logementList.map((val, key) => {
        return (
          <div key={val.Identifiant} className="logement">
            <p>Nom du logement : {val.Nomlog} </p>
            <p>Nombre de pièces :{val.NbPièces}</p>
            <p>Etat du logement : {val.Etat}</p>
            <p>Adresse : {val.Adresse}</p>
            <p>Prix : {val.Prix} euros</p>
            <p>Date disponibilités : {val.DateDispo.substr(0, 10)}</p>
            <p> Ville : {val.Ville}</p>
            <p>Superficie : {val.Superficie} m²</p>
            <p>------------------------------</p>

            <button
              onClick={() => {
                setShowForm(!showform);
              }}
            >
              Cliquez ici pour modifier le logement.
            </button>

            {showform && (
              <div className="UpdateHouse">
                <label> Nom du logement </label>
                <input
                  type="text"
                  defaultValue={val.Nomlog}
                  onChange={(event) => {
                    setNomlog(event.target.value); // set rien du tout
                  }}
                />

                <label> Nombre de pièces </label>
                <input
                  type="number"
                  defaultValue={val.NbPièces}
                  onChange={(event) => {
                    setNbpiece(event.target.value);
                  }}
                />
                <label> Etat </label>
                <input
                  type="text"
                  defaultValue={val.Etat}
                  onChange={(event) => {
                    setEtat(event.target.value);
                  }}
                />
                <label> Adresse </label>
                <input
                  type="text"
                  defaultValue={val.Adresse}
                  onChange={(event) => {
                    setAdresse(event.target.value);
                  }}
                />
                <label> Prix </label>
                <input
                  type="number"
                  defaultValue={val.Prix}
                  onChange={(event) => {
                    setPrix(event.target.value);
                  }}
                />

                <label> Date disponibilités </label>
                <input
                  type="date"
                  defaultValue={val.DateDispo.substr(0, 10)}
                  onChange={(event) => {
                    setDated(event.target.value);
                  }}
                />
                <label> Ville </label>
                <input
                  type="text"
                  defaultValue={val.Ville}
                  onChange={(event) => {
                    setVille(event.target.value);
                  }}
                />
                <label> Superficie </label>
                <input
                  type="number"
                  defaultValue={val.Superficie}
                  onChange={(event) => {
                    setSuperficie(event.target.value);
                  }}
                />

                <button
                  onClick={() => {
                    UpdatLogement(
                      val.Identifiant,
                      nomlog,
                      nbpiece,
                      etat,
                      adresse,
                      prix,
                      dated,
                      ville,
                      superficie
                    );
                  }}
                >
                  <a href="/"> Modifier</a>
                </button>
              </div>
            )}

            <button
              onClick={() => {
                setShowFormnew(!showformnew);
              }}
            >
              Cliquez ici pour une nouvelle visite.
            </button>

            {showformnew && (
              <div className="Newvisit">
                <label> Nom de la personne </label>
                <input
                  type="text"
                  onChange={(event) => {
                    setNompers(event.target.value);
                  }}
                />

                <label> Date de la visite </label>
                <input
                  type="date"
                  onChange={(event) => {
                    setDatevisit(event.target.value);
                  }}
                />

                <label>Prenom de la personne </label>
                <input
                  type="text"
                  onChange={(event) => {
                    setPrenompers(event.target.value);
                  }}
                />

                <button
                  onClick={() => {
                    Newvisit(val.Identifiant, datevisit, nompers, prenompers);
                  }}
                >
                  <a href="/"> Nouvelle visite</a>
                </button>
              </div>
            )}

            <button onClick={() => DeleteLogement(val.Identifiant)}>
              <a href="/">Cliquez ici pour supprimer le logement.</a>
            </button>
            <button
              onClick={() => {
                setShowFormVente(!showformvente);
              }}
            >
              Cliquez ici pour vendre le logement.
            </button>

            {showformvente && (
              <div className="Newachat">
                <label> Nom de l'acheteur </label>
                <input
                  type="text"
                  onChange={(event) => {
                    setNomacheteur(event.target.value);
                  }}
                />

                <label> Date de l'achat </label>
                <input
                  type="date"
                  onChange={(event) => {
                    setDatevente(event.target.value);
                  }}
                />

                <label>Prenom de l'acheteur</label>
                <input
                  type="text"
                  onChange={(event) => {
                    setPrenomacheteur(event.target.value);
                  }}
                />
                <label>
                  Pourcentage du prix de vente (commission pour l'agence) :{" "}
                </label>
                <input
                  type="number"
                  onChange={(event) => {
                    setPourcentage(event.target.value);
                  }}
                />

                <button
                  onClick={() => {
                    Ventelogement(
                      val.Identifiant,
                      nomacheteur,
                      prenomacheteur,
                      datevente,
                      pourcentage
                    );
                  }}
                >
                  <a href="/"> Confirmer achat.</a>
                </button>
              </div>
            )}

            <button
              onClick={() => {
                setShowFormGarage(!showformgarage);
              }}
            >
              Cliquez ici pour ajouter un garage.
            </button>

            {showformgarage && (
              <div className="Newgarage">
                <label> Adresse du garage </label>
                <input
                  type="text"
                  onChange={(event) => {
                    setAdresseGarage(event.target.value);
                  }}
                />

                <button
                  onClick={() => {
                    AddGarage(val.Identifiant, adressegarage);
                  }}
                >
                  <a href="/"> Confirmer l'ajout du garage.</a>
                </button>
              </div>
            )}
          </div>
        );
      })}

      {garageList.map((val, key) => {
        return (
          <div key={val.IdGarage} className="garage">
            <h1> Liste des garages </h1>
            <p>Nom du logement : {val.Nomlog}</p>
            <p>Adresse du garage :{val.Adresse}</p>
            <p>------------------------------</p>
          </div>
        );
      })}

      <button>
        <a href="/logementsell">Cliquez ici pour voir les logements vendus</a>
      </button>

      <button>
        <a href="/create">Cliquez ici pour ajouter un nouveau logement.</a>
      </button>

      <button>
        <a href="/listvisit">Cliquez ici pour voir la liste des visites.</a>
      </button>

      <button>
        <a href="/listprsn">Cliquez ici pour voir la liste des personnes.</a>
      </button>
    </div>
  );
};

export default Welcome;
