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
  // const [billPerPerson, setBillPerPerson] = useState(0);

  // don't need to create a state

  // on submit, add all the totals
  // on submit, sed data to a file with this data
  const handleSubmit = (event, newBillTotal, newBillPerPerson) => {
    setBillTotal(billAmount + tipTotal);
    setTipTotal(billAmount * tipAmount);
    // setBillPerPerson((billTotal + tipTotal) / billSplit);
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
        {/* <div className="form__container"> */}
        {/* input label -> input label */}
        <Container maxWidth="md">
          <FormGroup onSubmit={handleSubmit} sx={{ m: 1.5 }} size="lg">
            {/* This is the configuration for the Bill Amount input */}
            {/* <FormControl>
              <InputLabel sx={{ m: 2 }}>Bill Amount </InputLabel>
              <Input
                // defaultValue={0}
                onChange={handleBill}
                aria-label="bill amount"
                type="number"
                sx={{ m: 2, p: 2 }}
                required
              ></Input>
            </FormControl> */}
            <TextField
              id="bill-amount"
              label="Bill Amount"
              variant="outlined"
              onChange={(event) => setBillAmount(event.target.value)}
              // value={e.target.value}
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

            <ToggleButtonGroup
              aria-label="tip amount"
              color="primary"
              value={tipAmount}
              onChange={handleTip}
              exclusive
              sx={{ m: 2, p: 2 }}
            >
              {/* add button for no tip */}
              <ToggleButton
                variant="contained"
                value="1"
                aria-label="no tip"
                // onClick={handleTip}
              >
                No Tip
              </ToggleButton>
              <ToggleButton
                variant="contained"
                value="1.15"
                aria-label="fifteen percent tip"
                // onClick={handleTip}
              >
                15%
              </ToggleButton>
              <ToggleButton
                value="1.18"
                aria-label="eighteen percent tip"
                // onClick={handleTip}
              >
                18%
              </ToggleButton>
              <ToggleButton
                value="1.2"
                aria-label="twenty percent tip"
                // onClick={handleTip}
              >
                20%
              </ToggleButton>
              {/* last buttom custom? - then make it the tip amount */}
              {/* <InputLabel>
                  Or Enter Tip Percent:{" "}
                  <Input onChange={handleTip} value={tipAmount} />
                </InputLabel> */}

              {/* On button press, open input */}
            </ToggleButtonGroup>
            {console.log(tipAmount)}
            {/* This is the configuration for the billsplit slider */}
            {/* group Slider and Input */}
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
          <Container>
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
