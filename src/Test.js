import { FormGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";

function Test() {
  return (
    <div>
      <FormGroup>
        <ToggleButtonGroup exclusive color="primary">
          <ToggleButton>1</ToggleButton>
          <ToggleButton>2</ToggleButton>
          <ToggleButton>3</ToggleButton>
          <ToggleButton>4</ToggleButton>
        </ToggleButtonGroup>
      </FormGroup>
    </div>
  );
}

export default Test;
