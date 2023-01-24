import {
  Box,
  FormControl,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

import { Reservation as ReservationCt } from "../../constants";

function SelectDateAndTime({ onSave, data }) {
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
          {ReservationCt.DateAndTime.title}
        </Typography>
        <Stack direction={"column"} marginTop={5}>
          <Stack direction={"column"} paddingBottom={2}>
            <Stack direction={"row"}>
              Date <Box sx={{ marginLeft: 1, color: "red" }}>*</Box>
            </Stack>
            <FormControl sx={{ width: "100%", backgroundColor: "#f5f5f5" }}>
              <OutlinedInput
                id="date"
                name="date"
                sx={{ color: "black" }}
                type="date"
                placeholder="Please enter date"
                value={data.date}
                required
                onChange={(e) => onSave({ date: e.target.value })}
              />
            </FormControl>
          </Stack>
          <Stack direction={"column"}>
            <Stack direction={"column"} paddingBottom={2}>
              <Stack direction={"row"}>
                Time <Box sx={{ marginLeft: 1, color: "red" }}>*</Box>
              </Stack>
              <FormControl sx={{ width: "100%", backgroundColor: "#f5f5f5" }}>
                <OutlinedInput
                  id="time"
                  name="time"
                  sx={{ color: "black" }}
                  type="time"
                  placeholder="Please enter time"
                  value={data.time}
                  required
                  onChange={(e) => onSave({ time: e.target.value })}
                />
              </FormControl>
            </Stack>
          </Stack>
          <Stack direction={"column"}>
            <Stack direction={"column"} paddingBottom={2}>
              <Stack direction={"row"}>
                Number of diner{" "}
                <Box sx={{ marginLeft: 1, color: "red" }}>*</Box>
              </Stack>
              <FormControl sx={{ width: "100%", backgroundColor: "#f5f5f5" }}>
                <OutlinedInput
                  id="numberOfDiner"
                  name="numberOfDiner"
                  sx={{ color: "black" }}
                  type="number"
                  required
                  placeholder="Please enter number"
                  onChange={(e) => onSave({ numberOfDiner: e.target.value })}
                  value={data.numberOfDiner}
                />
              </FormControl>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default SelectDateAndTime;
