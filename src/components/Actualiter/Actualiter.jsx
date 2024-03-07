import React, { useEffect, useState } from "react";
import Actu from "./Actu";
import "./actualiter.css";
import { Stack } from "@mui/material";
import AddActu from "./AddActu";
import { Divider } from "@mui/joy";
import axios from "axios";
import { formatDistanceToNow, parseISO } from "date-fns";
import { fr } from "date-fns/locale";

function Actualiter() {
  const [data, setData] = useState();
  const fetchActu = async () => {
    try {
      const response = await axios.get("http://localhost:3500/api/actu");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const datefomater = (myTime) => {
    console.log(myTime);
    const m = formatDistanceToNow(new Date(parseISO(myTime)), {
      unit: "minute",
      locale: fr,
    });
    return m;
  };
  useEffect(() => {
    fetchActu();
  }, []);
  console.log(data);
  return (
    <div>
      <div
        style={{
          justifyContent: "center",
          margin: "auto",
          width: "100%",
          display: "flex",
          marginTop: "100px",
        }}
      >
        <Stack direction="column">
          <div
            style={{
              justifyContent: "center",
              // margin: "auto",
              width: "100%",
              display: "flex",
              marginTop: "100px",
            }}
          >
            <AddActu fetchActu={fetchActu} />
          </div>
          <Divider />
          {data &&
            data
              .sort((a, b) => {
                const dateA = new Date(a.updatedAt);
                const dateB = new Date(b.updatedAt);

                return dateB.getTime() - dateA.getTime(); // Tri décroissant
              })
              .map((item, index) => {
                return (
                  <Actu key={index} item={item} datefomater={datefomater} />
                );
              })}
        </Stack>
      </div>
    </div>
  );
}

export default Actualiter;
