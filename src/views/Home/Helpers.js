import { Button, Chip, Container, Typography, useTheme } from "@mui/material";
import { primaryColor, secondaryColor } from "../../utils/Theme";

function Hero() {
const theme = useTheme();

  return (
    <Container>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px 16px 40px',
        height: '300px',
        background: '#495E57',
        color: theme.palette.text.primary
        }}>
            <Typography
                variant="h2"
                fontWeight='medium'
                fontSize={64}
                color={theme.palette.secondary.main}
            >
                Little Lemon
            </Typography>
            <Typography
                fontSize={40}
            >
                Chicago
            </Typography>
            <Typography width={175} paddingTop={1}>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </Typography>
            <Button
             sx={{marginTop: 2, 
                borderRadius: 15, 
                color: primaryColor,
                fontWeight: 'bold',
                backgroundColor: secondaryColor}}
             >Reserve a table</Button>
        </div>
        <div style={{
            margin: '10px'
        }}>
            <Typography variant="subtitle1" fontWeight={'bold'}>ORDER FOR DELIVERY!</Typography>
            <div>
                <Chip label="Lunch" sx={{color: primaryColor, fontWeight:'bold', marginRight: 2}}/>
                <Chip label="Mains" sx={{color: primaryColor, fontWeight:'bold', marginRight: 2}} />
                <Chip label="Desserts"  sx={{color: primaryColor, fontWeight:'bold', marginRight: 2}}/>
                <Chip label="A La Carte"  sx={{color: primaryColor, fontWeight:'bold'}}/>
            </div>
        </div>
    </Container>
  );
}

export default Hero;
