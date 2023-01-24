import { Stack, Typography } from "@mui/material";

import { Reservation as ReservationCt } from "../../constants";

function ConfirmReservation({data}) {
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
          {ReservationCt.ConfirmReservation.title}
        </Typography>
        <Stack direction={"column"} marginTop={5}>
          <Stack direction={"column"}>
            <Typography variant="subtitle1">DATE & TIME</Typography>
            <Stack direction={"row"} paddingBottom={2}>
              <Stack direction={"row"}>Date</Stack>
              <Stack direction={"row"}  marginLeft={20}>
                {data.date}
              </Stack>
            </Stack>
            <Stack direction={"row"} paddingBottom={2}>
              <Stack direction={"row"}>Time</Stack>
              <Stack direction={"row"}  marginLeft={22}>
                {data.time}
              </Stack>
            </Stack>
            <Stack direction={"row"} paddingBottom={2}>
              <Stack direction={"row"}>Number of diner</Stack>
              <Stack direction={"row"}  marginLeft={13}>
                {data.numberOfDiner}
              </Stack>
            </Stack>
          </Stack>
          <Stack direction={"column"} marginTop={2}>
            <Typography variant="subtitle1">DETAILS (BILING INFORMATION)</Typography>
            <Stack direction={"row"} paddingBottom={2}>
              <Stack direction={"row"}>Surname</Stack>
              <Stack direction={"row"}  marginLeft={19}>
                {data.surname}
              </Stack>
            </Stack>
            <Stack direction={"row"} paddingBottom={2}>
              <Stack direction={"row"}>Name</Stack>
              <Stack direction={"row"}  marginLeft={22}>
                {data.name}
              </Stack>
            </Stack>
            <Stack direction={"row"} paddingBottom={2}>
              <Stack direction={"row"}>Email</Stack>
              <Stack direction={"row"}  marginLeft={22}>
                {data.email}
              </Stack>
            </Stack>
            <Stack direction={"row"} paddingBottom={2}>
              <Stack direction={"row"}>Card number</Stack>
              <Stack direction={"row"}  marginLeft={15}>
                {data.cardNumber}
              </Stack>
            </Stack>
            <Stack direction={"row"} paddingBottom={2}>
              <Stack direction={"row"}>Name</Stack>
              <Stack direction={"row"}  marginLeft={22}>
                {data.nameCard}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default ConfirmReservation;
