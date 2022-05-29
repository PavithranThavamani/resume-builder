import React, { useEffect, useState } from "react";
import { TextField, Button, Container, Divider } from "@material-ui/core";
import { Card, CardHeader, CardContent } from "@material-ui/core";
// import axios from 'axios';
// import {saveAs} from 'file-saver';
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import DescriptionIcon from "@material-ui/icons/Description";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import BusinessIcon from "@material-ui/icons/Business";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Row, Col } from "react-bootstrap";
import { Paper, withStyles, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import HeaderComponent from "../components/Header/HeaderComponent";

const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 1.5,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

function Experience(props) {
  const initialValues = {
    institute1: "",
    position1: "",
    duration1: "",
    experienceDescription1: "",
    institute2: "",
    position2: "",
    duration2: "",
    experienceDescription2: "",
  };

  const [experienceDetailsValues, setExperienceDetailsValues] =
    useState(initialValues);
  const [experienceDetailsErrors, setExperienceDetailsErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceDetailsValues({ ...experienceDetailsValues, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setExperienceDetailsErrors(validate(experienceDetailsValues));
    setIsSubmit(true);
  };

  const goToNextPage = (props) => {
    // e.preventDefault();
    props.history.push("/extradetails");
    console.log("Hello");
  };

  useEffect(() => {
    console.log(experienceDetailsErrors);
    if (Object.keys(experienceDetailsErrors).length === 0 && isSubmit) {
      console.log(experienceDetailsValues);
      goToNextPage(props);
    }
  }, [experienceDetailsErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.institute1) {
      errors.institute1 = "This field is required";
    }
    if (!values.position1) {
      errors.position1 = "This field is required";
    }
    if (!values.duration1) {
      errors.duration1 = "This field is required";
    }
    if (!values.experienceDescription1) {
      errors.experienceDescription1 = "This field is required";
    }
    if (!values.institute2) {
      errors.institute2 = "This field is required";
    }
    if (!values.position2) {
      errors.position2 = "This field is required";
    }
    if (!values.duration2) {
      errors.duration2 = "This field is required";
    }
    if (!values.experienceDescription2) {
      errors.experienceDescription2 = "This field is required";
    }

    return errors;
  };

  const { classes } = props;

  return (
    <div>
      <HeaderComponent />
      <Paper className={classes.padding}>
        <Card>
          <CardHeader title="Experience Details" align="center" />
        </Card>
        <CardContent>
          <div className={classes.margin}>
            <Grid container spacing={2} align="flex-start" lg={12}>
              <Grid
                item
                xs={12}
                lg={4}
                alignItems="flex-end"
                alignContent="flex-end"
              >
                <h5>
                  <CheckCircleIcon />
                  <span className="pl-3">Experience 1</span>
                </h5>
              </Grid>
              <Grid item xs={0} lg={8} />

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="institute1"
                  label="Institue/Organisation"
                  style={{ width: "90%" }}
                  required
                  value={experienceDetailsValues.institute1}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {experienceDetailsErrors.institute1}{" "}
                </p>
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="position1"
                  label="Position"
                  style={{ width: "90%" }}
                  required
                  value={experienceDetailsValues.position1}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <EventSeatIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {experienceDetailsErrors.position1}{" "}
                </p>
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="duration1"
                  label="Duration"
                  style={{ width: "90%" }}
                  required
                  value={experienceDetailsValues.duration1}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TimelapseIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {experienceDetailsErrors.duration1}{" "}
                </p>
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{ width: "97%" }}
                  name="experienceDescription1"
                  required
                  value={experienceDetailsValues.experienceDescription1}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {experienceDetailsErrors.experienceDescription1}{" "}
                </p>
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container spacing={2} align="flex-start" lg={12}>
              <Grid
                item
                xs={12}
                lg={4}
                alignItems="flex-end"
                alignContent="flex-end"
              >
                <h5>
                  <CheckCircleIcon />
                  <span className="pl-3" align="center">
                    Experience 2
                  </span>
                </h5>
              </Grid>
              <Grid item xs={0} lg={8} />
              <br />
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="institute2"
                  label="Institue/Organisation"
                  style={{ width: "90%" }}
                  required
                  value={experienceDetailsValues.institute2}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {experienceDetailsErrors.institute2}{" "}
                </p>
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="position2"
                  label="Position"
                  style={{ width: "90%" }}
                  required
                  value={experienceDetailsValues.position2}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <EventSeatIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {experienceDetailsErrors.position2}{" "}
                </p>
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="duration2"
                  label="Duration"
                  style={{ width: "90%" }}
                  required
                  value={experienceDetailsValues.duration2}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TimelapseIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {experienceDetailsErrors.duration2}{" "}
                </p>
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{ width: "97%" }}
                  rows={3}
                  name="experienceDescription2"
                  required
                  value={experienceDetailsValues.experienceDescription2}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {experienceDetailsErrors.experienceDescription2}{" "}
                </p>
              </Grid>
            </Grid>
          </div>
        </CardContent>
        <Container className={classes.margin}>
          <Row>
            <Col xs={4} />
            <Col xs={2}>
              <Link to="/projectdetails">
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ margin: "15px 0px 10px 400px", float: "left" }}
                  // onClick={this.back}
                  startIcon={<NavigateBeforeIcon />}
                >
                  Back
                </Button>
              </Link>
            </Col>
            <Col xs={2}>
              {/* <Link to="/extradetails"> */}
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: " 15px 420px 10px 0px", float: "right" }}
                // onClick={this.continue}
                onClick={submitHandler}
                endIcon={<NavigateNextIcon />}
              >
                Next
              </Button>
              {/* </Link> */}
            </Col>
            <Col xs={4} />
          </Row>
        </Container>
        <p
          className="text-center text-muted"
          align="center"
          style={{ marginTop: "40px" }}
        >
          Page 4
        </p>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Experience);
