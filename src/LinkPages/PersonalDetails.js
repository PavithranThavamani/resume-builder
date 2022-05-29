import React, { useEffect, useState } from "react";
import { TextField, Button, Container } from "@material-ui/core";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Row, Col } from "react-bootstrap";
import { Paper, withStyles, Grid } from "@material-ui/core";
import HeaderComponent from "../components/Header/HeaderComponent";
import { Link } from "react-router-dom";

function styles(theme) {
  return {
    margin: {
      margin: theme.spacing.unit * 1,
    },
    padding: {
      padding: "20px",
    },
  };
}

function PersonalDetails(props) {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    facebook: "",
    instagram: "",
  };

  const [personalDetailsValues, setPersonalDetailsValues] =
    useState(initialValues);
  const [personalDetailsErrors, setPersonalDetailsErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetailsValues({ ...personalDetailsValues, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setPersonalDetailsErrors(validate(personalDetailsValues));
    setIsSubmit(true);
  };

  const goToNextPage = (props) => {
    // e.preventDefault();
    props.history.push("/educationaldetails");
    console.log("Hello");
  };

  useEffect(() => {
    console.log(personalDetailsErrors);
    if (Object.keys(personalDetailsErrors).length === 0 && isSubmit) {
      console.log(personalDetailsValues);
      goToNextPage(props);
    }
  }, [personalDetailsErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$/;
    if (!values.firstname) {
      errors.firstname = "Firstname is required";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Enter valid email format";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required";
    } else if (values.phone.length < 10) {
      errors.phone = "Phone Number must be atleast 10 characters";
    }
    return errors;
  };

  const { classes } = props;

  return (
    <div>
      {/* {Object.keys(personalDetailsErrors).length === 0 && isSubmit
        ? { goToNextPage }
        : console.log("Not satisfied")} */}

      <div>
        <HeaderComponent />
        <Paper className={classes.padding}>
          <Card>
            <CardHeader title="Personal Details" align="center" />
          </Card>
          <CardContent>
            <div className={classes.margin}>
              {/* <pre>{JSON.stringify(personalDetailsValues, undefined, 2)} </pre> */}
              <Grid container spacing={2} align="center" lg={12}>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    name="firstname"
                    label="First Name"
                    style={{ width: "80%" }}
                    required
                    value={personalDetailsValues.firstname}
                    onChange={handleChange}
                  />
                  <p
                    style={{
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    {personalDetailsErrors.firstname}{" "}
                  </p>
                </Grid>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                  <TextField
                    margin="dense"
                    label="Last Name"
                    variant="outlined"
                    style={{ width: "80%" }}
                    name="lastname"
                    required
                    value={personalDetailsValues.lastname}
                    onChange={handleChange}
                  />
                  <p
                    style={{
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    {personalDetailsErrors.lastname}{" "}
                  </p>
                </Grid>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                  <TextField
                    margin="dense"
                    label="Email"
                    variant="outlined"
                    name="email"
                    required
                    style={{ alignItems: "left", width: "80%" }}
                    value={personalDetailsValues.email}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailIcon />
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
                    {personalDetailsErrors.email}{" "}
                  </p>
                </Grid>

                <Grid item lg={6} xs={12} sm={12} md={6}>
                  <TextField
                    margin="dense"
                    label="Phone Number"
                    variant="outlined"
                    name="phone"
                    style={{ alignItems: "left", width: "80%" }}
                    value={personalDetailsValues.phone}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PhoneIcon />
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
                    {personalDetailsErrors.phone}{" "}
                  </p>
                </Grid>

                <Grid item md={6} sm={12} xs={12} lg={6}>
                  <TextField
                    margin="dense"
                    label="Your Website"
                    variant="outlined"
                    name="website"
                    style={{ alignItems: "left", width: "80%" }}
                    value={personalDetailsValues.website}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LanguageIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                  <TextField
                    margin="dense"
                    label="GitHub"
                    variant="outlined"
                    name="github"
                    style={{ alignItems: "left", width: "80%" }}
                    value={personalDetailsValues.github}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <GitHubIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                  <TextField
                    margin="dense"
                    label="Linked In"
                    variant="outlined"
                    name="linkedin"
                    style={{ alignItems: "left", width: "80%" }}
                    value={personalDetailsValues.linkedin}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LinkedInIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                  <TextField
                    margin="dense"
                    label="Twitter"
                    variant="outlined"
                    name="twitter"
                    style={{ alignItems: "left", width: "80%" }}
                    value={personalDetailsValues.twitter}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <TwitterIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                  <TextField
                    margin="dense"
                    label="Facebook"
                    variant="outlined"
                    name="facebook"
                    style={{ alignItems: "left", width: "80%" }}
                    value={personalDetailsValues.facebook}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <FacebookIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                  <TextField
                    margin="dense"
                    label="Instagram"
                    variant="outlined"
                    name="instagram"
                    style={{ alignItems: "left", width: "80%" }}
                    value={personalDetailsValues.instagram}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <InstagramIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              <Container
                className={classes.margin}
                align="center"
                // style={{ display: "grid" }}
              >
                <Row>
                  {/* <Col lg={3} xs={0} /> */}
                  <Col lg={3} xs={5}>
                    <Button
                      style={{ margin: "15px 0px 10px 400px", float: "left" }}
                      variant="contained"
                      color="secondary"
                      disabled
                      startIcon={<NavigateBeforeIcon />}
                    >
                      Back
                    </Button>
                  </Col>
                  <Col lg={3} xs={5}>
                    {/* <Link to="/educationaldetails"> */}
                    <Button
                      style={{ margin: " 15px 420px 10px 0px", float: "right" }}
                      variant="contained"
                      color="secondary"
                      onClick={submitHandler}
                      //   onClick={this.continue}
                      endIcon={<NavigateNextIcon />}
                    >
                      Next
                    </Button>
                    {/* </Link> */}
                  </Col>
                  {/* <Col lg={3} xs={1} /> */}
                </Row>
              </Container>
            </div>
          </CardContent>
          <p
            className="text-center text-muted"
            align="center"
            style={{ marginTop: "40px" }}
          >
            Page 1{" "}
          </p>
        </Paper>
      </div>
    </div>
  );
}

// export default PersonalDetails;
export default withStyles(styles)(PersonalDetails);
