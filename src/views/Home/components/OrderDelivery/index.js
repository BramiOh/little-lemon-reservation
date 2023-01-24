import {
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import { Home as HomeCt } from "../../constants";
import { primaryColor } from "../../../../utils/Theme";

function OrderDelivery() {

  return (
    <Stack direction={"column"} padding={2}>
      <Typography variant="subtitle1" fontWeight={"bold"}>
        {HomeCt.OrderForDelivery.title}
      </Typography>
      <Stack direction={"row"} marginBottom={3}>
        {HomeCt.OrderForDelivery.orders.map((item) => {
          return (
            <Chip
            key={item}
              label={item}
              sx={{ color: primaryColor, fontWeight: "bold", marginRight: 2 }}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}

export default OrderDelivery;
