import "./App.css";
import {
  createTheme,
  FormControl,
  Input,
  InputLabel,
  Slider,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
// import { FormGroup } from "@material-ui/core";
import { useState } from "react";

function App() {
  const [billAmount, setBillAmount] = useState(0);

  const handleBill = (event, newBillAmount) => {
    setBillAmount(newBillAmount);
  };

  const [tipAmount, setTipAmount] = useState("");

  const handleTip = (event, newTipAmount) => {
    setTipAmount(newTipAmount);
  };

  const [billSplit, setBillSplit] = useState(1);

  const handleBillSplitChange = (event, newBillSplit) => {
    setBillSplit(newBillSplit);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#93E9BE",
        darker: "#47D990",
      },
    },
  });

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        {/* input label -> input label */}
        <InputLabel a required>
          Bill Amount{" "}
          <Input
            defaultValue={0}
            aria-label="bill-amount"
            type="number"
            value={billAmount}
            onChange={handleBill}
          ></Input>
        </InputLabel>

        <FormControl>
          <ToggleButtonGroup
            aria-label="Tip Amount"
            color="primary"
            exclusive
            value={tipAmount}
            onChange={handleTip}
          >
            <ToggleButton
              variant="contained"
              value="fifteenPercentTip"
              aria-label="fifteen percent tip"
            >
              15%
            </ToggleButton>
            <ToggleButton
              value="eighteenPercentTip"
              aria-label="eighteen percent tip"
            >
              18%
            </ToggleButton>
            <ToggleButton
              value="twentyPercentTip"
              aria-label="twenty percent tip"
            >
              20%
            </ToggleButton>
            <ToggleButton value="customPercentTip" aria-label="custom tip">
              Custom
            </ToggleButton>
          </ToggleButtonGroup>

          {/* group Slider and Input */}
          <Slider
            defaultValue={1}
            step={1}
            min={1}
            max={4}
            valueLabelDisplay="auto"
            aria-labelledby="billSplitSlider"
            value={billSplit}
            onChange={handleBillSplitChange}
          />
          <Input
            size="small"
            value={billSplit}
            aria-labelledby="billSplitSlider"
          />
        </FormControl>
      </ThemeProvider>
    </div>
  );
}

export default App;
