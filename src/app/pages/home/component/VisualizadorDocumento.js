import React from "react";

import ejemploEmbargo from "../source/images/ejemploEmbargo.jpg";

const VisualizadorDocumento = () => {
  return (
    <div>
      <img src={ejemploEmbargo} alt="embargo" style={{ with: "auto" }} />
    </div>
  );
};

export default VisualizadorDocumento;
