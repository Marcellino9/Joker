import { Fab, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import { Avatar, Button, Input, Modal, Stack } from "@mui/joy";
import TextInsert from "./TextInsert";
import { Backup } from "@mui/icons-material";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
function AddActu({ fetchActu }) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("NO selecte file");
  const [vraiFile, setVraiFile] = useState(null);
  const [FormulaireData, setFormulaireData] = useState({
    idEtudiant: "65e821e36099a04b7663825f",
    text: "",
    image: "",
  });

  const handleClose = () => {
    setOpen(!open);
  };
  const totalitedesdonnee = async (image, envoyeData) => {
    const formData = new FormData();
    formData.append("image", image);

    for (const key in envoyeData) {
      formData.append(key, envoyeData[key]);
    }
    try {
      await axios.post("http://localhost:3500/api/actu", formData);
      fetchActu();
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const ImageData = new FormData();
    ImageData.append("file", vraiFile);

    const envoyeData = {
      ...FormulaireData,
    };
    const image = ImageData.get("file");
    try {
      await totalitedesdonnee(image, envoyeData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setFormulaireData((prevState) => ({ ...prevState, text: e.target.value }));
  };
  return (
    <div style={{ marginBottom: "10px" }}>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Stack direction="row">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "2px dashed #1475cf",
                height: "200px",
                width: "30%",
                cursor: "pointer",
                borderRadius: "10%",
              }}
              onClick={() => document.querySelector(".input-file").click()}
            >
              <input
                id="file"
                type="file"
                className="input-file"
                hidden
                onChange={({ target: { files } }) => {
                  if (files?.length > 0) {
                    const selectedFile = files[0];

                    const validImageExtensions = ["jpg", "jpeg", "png", "gif"];
                    const fileExtension = selectedFile.name
                      .split(".")
                      .pop()
                      .toLowerCase();

                    if (validImageExtensions.includes(fileExtension)) {
                      setFileName(selectedFile.name);
                      setImage(URL.createObjectURL(selectedFile));
                      setVraiFile(selectedFile);
                    } else {
                      console.log(
                        "Fichier non pris en charge. Veuillez sélectionner une image."
                      );
                      setFileName("NO selecte file");
                      setImage(null);
                    }
                  } else {
                    setFileName("NO selecte file");
                    setImage(null);
                  }
                }}
              />
              {image ? (
                <img
                  src={image}
                  width={130}
                  height={130}
                  alt={fileName}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <>
                  <Backup color="#1475cf" size={30} />
                  <Typography>Photo</Typography>
                </>
              )}
            </Box>
            <TextInsert
              handleInputChange={handleInputChange}
              text={FormulaireData.text}
            />
            <Button color="success" onClick={(e) => handleSubmit(e)}>
              Publier
            </Button>
          </Stack>
        </Box>
      </Modal>
      <Stack direction="row">
        <Avatar size="lg">JM</Avatar>
        <Input placeholder="Ajouter une actualité" />
        <Fab color="success" aria-label="add" onClick={handleClose}>
          <AddIcon />
        </Fab>
      </Stack>
    </div>
  );
}

export default AddActu;
