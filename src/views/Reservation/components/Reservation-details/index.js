import { FormControl, OutlinedInput, Stack, Typography } from "@mui/material";

import { Reservation as ReservationCt } from "../../constants";

function Details({ onSave, data }) {
  return (
    <>
      <Stack direction={"column"} padding={2}>
        <Typography
          sx={{
            margin: "auto",
            textAlign: "center",
            width: "200px",
          }}
          variant="subtitle1"
          fontWeight={"bold"}
        >
          {ReservationCt.Details.title}
        </Typography>
        <Typography
          sx={{
            margin: "auto",
            textAlign: "center",
            width: "200px",
          }}
          variant="subtitle1"
        >
          {ReservationCt.Details.subtile}
        </Typography>
        <Stack direction={"column"} marginTop={5}>
          <Stack direction={"column"}>
            <Typography variant="subtitle1">USER INFORMATION</Typography>
            <Stack direction={"column"} paddingBottom={2}>
              <Stack direction={"row"}>Surname</Stack>
              <FormControl sx={{ width: "100%", backgroundColor: "#f5f5f5" }}>
                <OutlinedInput
                  sx={{ color: "black" }}
                  value={data.surname}
                  onChange={(e) => onSave({ surname: e.target.value })}
                  placeholder="Please enter Surname"
                />
              </FormControl>
            </Stack>
            <Stack direction={"column"}>
              <Stack direction={"column"} paddingBottom={2}>
                <Stack direction={"row"}>Name</Stack>
                <FormControl sx={{ width: "100%", backgroundColor: "#f5f5f5" }}>
                  <OutlinedInput
                    sx={{ color: "black" }}
                    placeholder="Please enter Name"
                    value={data.name}
                    onChange={(e) => onSave({ name: e.target.value })}
                  />
                </FormControl>
              </Stack>
            </Stack>
            <Stack direction={"column"}>
              <Stack direction={"column"} paddingBottom={2}>
                <Stack direction={"row"}>Email</Stack>
                <FormControl sx={{ width: "100%", backgroundColor: "#f5f5f5" }}>
                  <OutlinedInput
                    sx={{ color: "black" }}
                    type="email"
                    value={data.email}
                    required
                    onChange={(e) => onSave({ email: e.target.value })}
                    placeholder="Please enter Email"
                  />
                </FormControl>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction={"column"} marginTop={2}>
            <Typography variant="subtitle1">CREDIT CARD INFORMATION</Typography>
            <Stack direction={"column"} paddingBottom={2}>
              <Stack direction={"row"}>Card number</Stack>
              <FormControl sx={{ width: "100%", backgroundColor: "#f5f5f5" }}>
                <OutlinedInput
                  sx={{ color: "black" }}
                  type="number"
                  value={data.cardNumber}
                  onChange={(e) =>
                    onSave({
                      cardNumber: e.target.value,
                    })
                  }
                  placeholder="Please enter card number"
                />
              </FormControl>
            </Stack>
            <Stack direction={"column"}>
              <Stack direction={"column"} paddingBottom={2}>
                <Stack direction={"row"}>Name card</Stack>
                <FormControl sx={{ width: "100%", backgroundColor: "#f5f5f5" }}>
                  <OutlinedInput
                    sx={{ color: "black" }}
                    value={data.nameCard}
                    onChange={(e) =>
                      onSave({
                        nameCard: e.target.value,
                      })
                    }
                    placeholder="Please enter name card"
                  />
                </FormControl>
              </Stack>
            </Stack>
            <Stack direction={"column"}>
              <Stack direction={"column"} paddingBottom={2}>
                <Stack direction={"row"}>CIV Card</Stack>
                <FormControl sx={{ width: "100%", backgroundColor: "#f5f5f5" }}>
                  <OutlinedInput
                    sx={{ color: "black" }}
                    type="number"
                    value={data.civ}
                    onChange={(e) =>
                      onSave({
                        civ: e.target.value,
                      })
                    }
                    placeholder="Please enter civ card"
                  />
                </FormControl>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Details;
