import React from "react";

import EscritorioMain from "./container/EscritorioMain";
import EvaluacionCarta from "./container/EvaluacionCarta"
import ManejoDatos from "./container/ManejoDatos"
import Cartas from "./container/Cartas"
import GestionUsuarios from "./container/GestionUsuarios"
import EmbargoConCartas from "./container/EmbargoConCartas";
import SubirArchivos from "./container/SubirArchivos";

export default function Dashboard() {
  return (
    <div>
      {/*
      Las pantallas que no estan linkeadas directamente en el menú son:
      EvaluacionCarta.js
      SubirArchivos.js
      ------
      Los contenedores que contiene el texto "Arrastra los archivos para comenzar a analizar"
      son para implementar la herramienta que permite arrastrar archivos a la pagina
      para subirlos automaticamente, así como ocurre con Drive. Por lo tanto, en este momento
      solo son visuales.
      */}
      <EscritorioMain />
    </div>
  );
}
