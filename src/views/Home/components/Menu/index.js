import { Card, Stack, Typography } from "@mui/material";

import { Home as HomeCt } from "../../constants";

function Menu() {
  return (
    <Stack direction={"column"} padding={2}>
      {HomeCt.Menus.map((item) => {
        return (
          <Card
            key={item.title}
            variant="outlined"
            sx={{
              height: 100,
              width: "100%",
              borderTop: 0,
              borderRight: 0,
              borderLeft: 0,
              color: "black",
            }}
          >
            <Typography variant="subtitle1" fontWeight={"bold"}>
              {item.title}
            </Typography>
            <Typography color={"GrayText"}>{item.description}</Typography>
            <Typography color={"GrayText"} sx={{ fontWeight: 600 }}>
              {item.price}
            </Typography>
          </Card>
        );
      })}
    </Stack>
  );
}

export default Menu;
