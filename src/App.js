import "./App.css";
import {
  Button,
  Container,
  createTheme,
  FormControl,
  FormGroup,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Slider,
  TextField,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
// import { FormGroup } from "@material-ui/core";
import { useState } from "react";
import { Box } from "@mui/system";

function App() {
  const [billAmount, setBillAmount] = useState(1);

  const handleBill = (event, newBillAmount) => {
    setBillAmount(event.value);
  };

  const [tipAmount, setTipAmount] = useState("");

  const handleTip = (event, newTipAmount) => {
    setTipAmount(newTipAmount);
  };

  const [billSplit, setBillSplit] = useState(1);

  const handleBillSplitChange = (event, newBillSplit) => {
    setBillSplit(newBillSplit);
  };

  const [billTotal, setBillTotal] = useState(0);
  const [tipTotal, setTipTotal] = useState(0);

  const [customTip, setCustomTip] = useState(0);

  const handleCustomTip = (event, newcustomTip) => {
    setCustomTip(event.value);
    setTipAmount(customTip / 100);
  };

  const handleSubmit = (event, newBillTotal, newBillPerPerson) => {
    // setBillTotal(billAmount + tipTotal);
    // setTipTotal(billAmount * tipAmount);
    // setBillPerPerson((billTotal + tipTotal) / billSplit);
    // this turns isShow on and that turns the display in if i choose that style
    // if submit is pressed - changes submit button to "reset" - unnecessary
  };

  const greatBillTotal = billAmount * tipAmount;
  const billPerPerson = greatBillTotal / billSplit;

  const theme = createTheme({
    palette: {
      primary: {
        main: "#93E9BE",
        darker: "#47D990",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Container maxWidth="md">
          <h1>QuickTip</h1>
          <FormGroup sx={{ m: 1.5 }} size="lg">
            {/* This is the configuration for the Bill Amount input */}
            <TextField
              id="bill-amount"
              label="Bill Amount"
              variant="outlined"
              onChange={(event) => setBillAmount(event.target.value)}
              InputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
            {console.log(billAmount + "--billAmount")}
            {billAmount}

            {/* This is the configuration for the Tip amount Button Group */}
            <Container>
              <ToggleButtonGroup
                aria-label="tip amount"
                color="primary"
                value={tipAmount}
                onChange={handleTip}
                exclusive
                sx={{ m: 2, p: 2 }}
              >
                <ToggleButton variant="contained" value="1" aria-label="no tip">
                  No Tip
                </ToggleButton>
                <ToggleButton
                  variant="contained"
                  value="1.15"
                  aria-label="fifteen percent tip"
                >
                  15%
                </ToggleButton>
                <ToggleButton value="1.18" aria-label="eighteen percent tip">
                  18%
                </ToggleButton>
                <ToggleButton value="1.2" aria-label="twenty percent tip">
                  20%
                </ToggleButton>
              </ToggleButtonGroup>
              <TextField
                id="tip-amount"
                label="Custom Tip"
                variant="outlined"
                // onChange={(event) => setCustomTip(event.target.value)}
                onChange={(event) => setTipAmount(event.target.value / 100)}
                InputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
              />
            </Container>
            {console.log(customTip + "customTip")}
            {console.log(tipAmount)}
            {/* This is the configuration for the billsplit slider */}

            <Container>
              <Slider
                defaultValue={1}
                step={1}
                min={1}
                max={4}
                valueLabelDisplay="auto"
                aria-labelledby="billSplitSlider"
                maxWidth="sm"
                value={billSplit}
                onChange={handleBillSplitChange}
                // margin="normal"
              />
              <Box size="lg">{billSplit}</Box>
            </Container>
            <Button type="submit" variant="contained" size="sm">
              Submit
            </Button>
          </FormGroup>

          {/* This is the output for the data */}
          <Container size="lg">
            {/* add this to a display and pass props to it */}
            {billTotal}
            {tipTotal}
            {billPerPerson}
            Total Bill
            {greatBillTotal}
            {/* this opens when submit is pressed */}
            {/* {isShow && <Display />} */}
            {/* or the display is there the entire time */}
          </Container>
        </Container>

        {/* </div>*/}
      </div>
    </ThemeProvider>
  );
}

export default App;
