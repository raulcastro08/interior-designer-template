import React from "react";
import { Grid } from "../../foundation/Layout/Grid";

const Spacer: React.FC = () => {
  return (
    <Grid.Container
      marginTop="0"
      height="5px"
      width="200px"
      backgroundColor="#f6e5e1"
    />
  );
};

export default Spacer;
