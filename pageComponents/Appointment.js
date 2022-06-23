import React, { useState } from "react";
import {
  TextField,
  FormControl,
  Box,
  Select,
  MenuItem,
  InputLabel,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import BenefitCard from "../components/BenefitCard";
import imageBenefit1 from "./../assets/images/benefit1-icon.svg";
import imageBenefit2 from "./../assets/images/benefit2-icon.svg";
import imageBenefit3 from "./../assets/images/benefit3-icon.svg";
import { scheduleAppointment } from "../store/actions/appointmentAction";
const benefitCardData = [
  {
    id: 0,
    image: imageBenefit1,
    heading: "Benefit 1",
    text: "Highlight the benefits of signing up for an appointment, online class, or video consultation.",
  },
  {
    id: 1,
    image: imageBenefit2,
    heading: "Benefit 2",
    text: "For example, fitness instructors might describe how their routines make people healthier *and* happier.",
  },
  {
    id: 2,
    image: imageBenefit3,
    heading: "Benefit 3",
    text: "Remind visitors how easy it is to claim your offer and start enjoying the benefits.",
  },
];

export default function Appointment() {
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(scheduleAppointment(firstName, lastName, email, phone, type));
  };
  return (
    <section className="appointment">
      <div className="appointment__cards">
        {benefitCardData.map((data) => (
          <BenefitCard
            key={data.id}
            imgUrl={data.image}
            heading={data.heading}
            text={data.text}
          />
        ))}
      </div>
      <div className="appointment__form">
        <form
          noValidate
          autoComplete="off"
          className="appointment__form__container"
          onSubmit={handleSubmit}
        >
          <Grid
            container
            width={{ xs: 280, sm: 450, md: 300 }}
            direction="column"
            alignContent="center"
            gap={3}
          >
            <Grid item>
              <Typography
                variant="h3"
                align="center"
                fontWeight={600}
                color="whitesmoke"
              >
                Schedule an Appointment
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                lineHeight={1}
                align="center"
                color="whitesmoke"
              >
                Here, let visitors know what will happen when they complete your
                form.
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                label="First Name"
                fullWidth
                variant="filled"
                color="primary"
                className="textField"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                label="Last Name"
                color="primary"
                fullWidth
                variant="filled"
                className="textField"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Email"
                type="email"
                color="primary"
                variant="filled"
                className="textField"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                label="Phone Number"
                variant="filled"
                fullWidth
                color="primary"
                className="textField"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Grid>
            <Grid item>
              <FormControl fullWidth className="textField" variant="filled">
                <InputLabel id="select-type">Type Of Appointment</InputLabel>
                <Select
                  labelId="select-type"
                  id="select"
                  value={type}
                  color="primary"
                  onChange={(e) => setType(e.target.value)}
                >
                  <MenuItem value={1}>Type 1</MenuItem>
                  <MenuItem value={2}>Type 2</MenuItem>
                  <MenuItem value={3}>Type 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Button variant="contained" fullWidth type="submit">
                <Typography variant="h6" padding={1}>
                  Schedule Now
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </section>
  );
}
