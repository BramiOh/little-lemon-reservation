import styled from "@emotion/styled";
import {
  Box,
  Button,
  Step,
  StepConnector,
  stepConnectorClasses,
  Stepper,
} from "@mui/material";
import { useFormik } from "formik";
import { cloneElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { primaryColor, secondaryColor } from "../../utils/Theme";
import SelectDateAndTime from "./components/Reservation-dateAndTIme";
import Details from "./components/Reservation-details";
import ConfirmReservation from "./components/Reservation-summary";

const steps = [<SelectDateAndTime />, <Details />, <ConfirmReservation />];

const cssButton = {
  marginTop: 2,
  borderRadius: 15,
  color: primaryColor,
  fontWeight: "bold",
  textTransform: "inherit",
};

const ReservationData = {
  surname: "",
  name: "",
  email: "",
  date: "",
  time: "",
  numberOfDiner: 0,
  cardNumber: 0,
  nameCard: "",
  civ: 0,
};

function Reservation() {
  const [activeStep, setActiveStep] = useState(1);
  const [isSubmit, setSubmit] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState(ReservationData);
  const formik = useFormik({
    initialValues: ReservationData,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  formik.setValues = setData;

  const handleNext = (e) => {
    e.preventDefault();

    if (activeStep !== steps.length) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      if (!isSubmit) {
        if(validate()) 
        {
            formik.validateForm(data).then((response) => {
                setSubmit(true);
              });
        }
        else {
            alert("Veuillez renseigner les informations obligatoire!")
        }
      } else {
        navigate("/");
      }
    }
  };

  const validate = () => {
    return data.name && data.surname && data.email;
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSave = (data) => {
    setData((prevData) => ({ ...prevData, ...data }));
    formik.setValues((prevData) => ({ ...prevData, ...data }));
  };

  const getCurrentStep = () => {
    const CurrentStep = steps[activeStep - 1];
    return cloneElement(CurrentStep, {
      data: data,
      onSave: (data) => onSave(data),
    });
  };

  const CustomisedConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: "#f4ce14",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: "#495e57",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 6,
      border: "10px",
      backgroundColor: "#495e57",
      borderRadius: 30,
    },
  }));
  return (
    <Box sx={{ width: "80%", margin: "auto", padding: 2 }}>
      <Stepper activeStep={activeStep} connector={<CustomisedConnector />}>
        <Step></Step>
        <Step></Step>
        <Step></Step>
        <Step></Step>
      </Stepper>
      {
        <>
          <form onSubmit={formik.submitForm}>{getCurrentStep()}</form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 2,
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 1 || isSubmit === true}
              onClick={handleBack}
              sx={{
                ...cssButton,
                color: "white",
                backgroundColor: primaryColor,
              }}
              variant="contained"
            >
              Previous
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            {!isSubmit ? (
              <Button
                onClick={handleNext}
                type={activeStep === steps.length ? "submit" : "button"}
                sx={{
                  ...cssButton,
                  backgroundColor: secondaryColor,
                }}
                variant="contained"
              >
                {activeStep === steps.length ? "Submit" : "Next"}
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                sx={{
                  ...cssButton,
                }}
                variant="outlined"
              >
                Resered, click to back Menu
              </Button>
            )}
          </Box>
        </>
      }
    </Box>
  );
}

export default Reservation;
