import "./App.css";
import {
  Container,
  createTheme,
  FormGroup,
  InputAdornment,
  Slider,
  TextField,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import { useState } from "react";

function App() {
  // app configuration

  const [billAmount, setBillAmount] = useState(1);

  const [tipAmount, setTipAmount] = useState("");

  const handleTip = (event, newTipAmount) => {
    setTipAmount(newTipAmount / 100);
    console.log(event);
  };

  const [billSplit, setBillSplit] = useState(1);

  const handleBillSplitChange = (event, newBillSplit) => {
    setBillSplit(newBillSplit);
  };

  const greatBillTotal = billAmount * (1 + tipAmount);
  const billPerPerson = greatBillTotal / billSplit;
  const tipTotal = greatBillTotal - billAmount;

  const theme = createTheme({
    palette: {
      primary: {
        main: "#93E9BE",
        darker: "#47D990",
      },
      secondary: {
        main: "#A7B3A1",
      },
    },
    components: {
      MuiToggleButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              color: "#93E9BE",
              bgcolor: "#47D990",
            },
          },
        },
      },
    },
  });

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <h1>QuickTip</h1>
        <Container maxWidth="md" sx={{ mt: 5 }}>
          <FormGroup
            sx={{
              m: 1.5,
              my: 2,
              boxShadow: 3,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              pt: 2,
            }}
            size="large"
          >
            {/* This is the configuration for the Bill Amount input */}
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2>Bill Total</h2>
              {/* </Container>
            <Container> */}
              <TextField
                id="bill-amount"
                label="Bill Amount"
                variant="outlined"
                onChange={(event) => setBillAmount(event.target.value)}
                placeholder="Bill Amount"
                size="large"
                sx={{
                  my: 3,
                }}
                InputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </Container>

            {/* This is the configuration for the Tip amount Button Group */}
            <h2>Tip?</h2>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                p: 2.5,
              }}
            >
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <ToggleButtonGroup
                  aria-label="Tip amount"
                  color="primary.darker"
                  variant="outlined"
                  exclusive
                  value={tipAmount}
                  onChange={handleTip}
                  sx={{
                    boxShadow: "5px 5px 15px gray",
                    border: 1,
                    borderColor: "primary.main",
                  }}
                  size="large"
                >
                  <ToggleButton
                    value="0"
                    color="primary"
                    variant="outlined"
                    aria-label="No tip"
                    className={tipAmount === 0 ? "Mui-selected" : " "}
                    sx={{
                      border: 1,
                      borderColor: "primary.main",
                    }}
                  >
                    No Tip
                  </ToggleButton>
                  <ToggleButton
                    value="15"
                    color="primary"
                    variant="outlined"
                    aria-label="fifteen percent tip"
                    className={tipAmount === 0.15 ? "Mui-selected" : " "}
                    sx={{
                      border: 1,
                      borderColor: "primary.main",
                    }}
                  >
                    15%
                  </ToggleButton>
                  <ToggleButton
                    value="18"
                    color="primary"
                    variant="outlined"
                    aria-label="eighteen percent tip"
                    className={tipAmount === 0.18 ? "Mui-selected" : " "}
                    sx={{
                      border: 1,
                      borderColor: "primary.main",
                    }}
                  >
                    18%
                  </ToggleButton>
                  <ToggleButton
                    value="20"
                    color="primary"
                    variant="outlined"
                    aria-label="twenty percent tip"
                    className={tipAmount === 0.2 ? "Mui-selected" : " "}
                    sx={{
                      border: 1,
                      borderColor: "primary.main",
                    }}
                  >
                    20%
                  </ToggleButton>
                </ToggleButtonGroup>
              </Container>
              <Container>
                <h3>OR</h3>
              </Container>

              <Container>
                <TextField
                  id="tip-amount"
                  label="Custom Tip"
                  variant="outlined"
                  size="large"
                  onChange={(event) => setTipAmount(event.target.value / 100)}
                  sx={{
                    m: 2,
                    boxShadow: "5px 1px 15px gray ",
                    border: 2,
                    borderColor: "primary.main",
                    borderRadius: 2,
                  }}
                  InputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                />
              </Container>
            </Container>

            {/* This is the configuration for the billsplit slider */}
            <Container
              maxWidth="medium"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                my: 4,
              }}
            >
              <h3>Splitting the bill?</h3>
              <Container>
                <Slider
                  defaultValue={1}
                  step={1}
                  min={1}
                  max={12}
                  valueLabelDisplay="auto"
                  aria-labelledby="Bill Split Slider"
                  value={billSplit}
                  onChange={handleBillSplitChange}
                />
              </Container>

              <Container
                component="div"
                size="small"
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  p: 1,
                  mx: 1,
                  my: 3,
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  border: 3.5,
                  color: "#000",
                  borderColor: "primary.main",
                  borderRadius: 2,
                  maxWidth: 1 / 2,
                }}
              >
                {billSplit}
                {billSplit > 1 ? " People" : " Person"}
              </Container>
            </Container>
          </FormGroup>

          {/* This is the output for the data */}
          <Container
            sx={{
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              border: "5px solid #47D990",
              my: 5,
              boxShadow: 4,
              bgcolor: "#FFF",
              justifyContent: "center",
              maxWidth: 3 / 4,
            }}
            className="form__output"
          >
            <div className="form__output--container">
              <h2>Total bill</h2>
              <p>{"$" + greatBillTotal.toFixed(2)}</p>
              <h3>Breakdown:</h3>
              <h4>Original Bill:</h4>
              <p>{"$" + billAmount}</p>
              <h4> Added amount at {tipAmount * 100}% tip:</h4>
              <p>{"$" + tipTotal.toFixed(2)}</p>
              <h4>
                {billSplit > 1 && "Split between " + billSplit + " people."}
              </h4>
              <p>{billSplit > 1 && "$" + billPerPerson.toFixed(2) + " each"}</p>
            </div>
          </Container>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
