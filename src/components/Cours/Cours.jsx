import { FaStar, FaDownload } from "react-icons/fa";
import * as React from "react";
import "./cours.css";
import HeroImg1 from "../../assets/HTML5.png";
import HeroImg2 from "../../assets/HTML6.png";
import Algebre from "../../assets/algebre.png";
import anal from "../../assets/anal.jpg";
import elecanal from "../../assets/elecanal.jpg";
import elecnum from "../../assets/elecnum.jpg";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Input } from "@mui/joy";

const tab = [
  { image: HeroImg1, cours: " Cours HTML5 et CSS3", dif: 1 },
  { image: HeroImg2, cours: " Cours Algorithme ", dif: 3 },
  { image: Algebre, cours: " Cours Algebre ", dif: 2 },
  { image: anal, cours: " Cours Analyse ", dif: 3 },
];

function Cours() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="coursContainer">
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          className="cage"
          data-aos="zoom-in"
          data-aos-delay="30"
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Cours HTML5 et CSS3
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            <img
              src={HeroImg1}
              alt="Description de l'image"
              className="w-[50%] h-[150px] mx-auto rounded-xl shadow-md"
            />
            <br />
            HTML5 et CSS3 ont révolutionné le développement web en offrant de
            nouvelles fonctionnalités et capacités. HTML5 propose une structure
            sémantique avancée pour les pages web, simplifie l'intégration de
            contenu interactif et offre des balises spécifiques pour le contenu
            multimédia et les formulaires. D'autre part, CSS3 introduit des
            fonctionnalités avancées de mise en page et de style, permettant un
            ciblage plus précis des éléments HTML et offrant des options de
            stylisation avancées telles que les dégradés, les ombres, les
            transitions et les animations. En combinant HTML5 et CSS3, les
            développeurs peuvent créer des sites web plus dynamiques,
            accessibles et esthétiques, améliorant ainsi l'expérience
            utilisateur et la performance des sites. Ces normes ouvrent la voie
            à une nouvelle ère du développement web, axée sur l'innovation, la
            créativité et la convivialité.
            <br />
            <br />
            <br />
          </Typography>
          <div className="absolute bottom-4 left-7">
            <button className="bg-green-800 text-white px-4 py-2 mr-2 transition-colors rounded-[5px] duration-300 hover:bg-green-600">
              <FaDownload className="inline-block mr-2" /> Télécharger
            </button>
            <span className="inline-block h-xl w-[170px]"></span>
            <a href="#" className="text-green-800 hover:underline">
              Aller à
            </a>{" "}
            3WSchool
          </div>
        </Sheet>
      </Modal>
      <div className="containt">
        <p1 data-aos="zoom-in" data-aos-delay="180">
          Liste des cours semestre 1 (S1) Pour <span>L1</span>
          <br />
          <br />
        </p1>
        <div className="grid grid-cols-4 gap-10">
          {tab.map((item, index) => {
            return (
              <div
                className="cage"
                data-aos="zoom-in"
                data-aos-delay="180"
                key={index}
              >
                <div
                  className="space-y-4 hover:scale-110 duration-200"
                  onClick={() => setOpen(true)}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-[200px] object-cover rounded-xl shadow-md"
                  />
                  <p className="text-sm text-gray-400 flex items-center gap-2">
                    Dificulter{" "}
                    <span className="flex items-center">
                      {Array.from({ length: item.dif }).map((_, index) => (
                        <FaStar key={index} className="text-green-800" />
                      ))}
                    </span>
                  </p>
                  <p className="text-sm text-gray-400">
                    {item.text}
                    <a href="" className="text-green-800">
                      plus
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <br />

        <p1 data-aos="fade-up" data-aos-delay="300">
          Liste des cours semestre 2 (S2) Pour <span>L1</span>
          <br />
          <br />
        </p1>
        <div className="grid grid-cols-4 gap-10">
          {tab.map((item, index) => {
            return (
              <div
                className="cage"
                data-aos="zoom-in"
                data-aos-delay="180"
                key={index}
              >
                <div
                  className="space-y-4 hover:scale-110 duration-200"
                  onClick={() => setOpen(true)}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-[200px] object-cover rounded-xl shadow-md"
                  />
                  <p className="text-sm text-gray-400 flex items-center gap-2">
                    Dificulter{" "}
                    <span className="flex items-center">
                      {Array.from({ length: item.dif }).map((_, index) => (
                        <FaStar key={index} className="text-green-800" />
                      ))}
                    </span>
                  </p>
                  <p className="text-sm text-gray-400">
                    {item.text}
                    <a href="" className="text-green-800">
                      plus
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cours;
