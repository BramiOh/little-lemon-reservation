import { Button, Stack, Typography, useTheme } from "@mui/material";

import { Home as HomeCt } from "../../constants";
import { primaryColor, secondaryColor } from "../../../../utils/Theme";
import { useNavigate } from "react-router-dom";

function Hero() {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleReservation = () => {
    navigate('Reservation');
  };

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px 16px 40px",
        height: "300px",
        background: "#495E57",
        color: theme.palette.text.primary,
        boxShadow: "2",
      }}
    >
      <Typography
        variant="h2"
        fontWeight="medium"
        fontSize={64}
        color={theme.palette.secondary.main}
      >
        {HomeCt.Hero.title}
      </Typography>
      <Typography fontSize={40}>{HomeCt.Hero.subtitle}</Typography>
      <Typography width={175} paddingTop={1}>
        {HomeCt.Hero.description}
      </Typography>
      <Button
        sx={{
          marginTop: 2,
          borderRadius: 15,
          color: primaryColor,
          fontWeight: "bold",
          backgroundColor: secondaryColor,
          textTransform: "inherit",
        }}
        variant="contained"
        onClick={handleReservation}
      >
        {HomeCt.Hero.reserveTableButton}
      </Button>
    </Stack>
  );
}

export default Hero;
