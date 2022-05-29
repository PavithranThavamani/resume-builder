import React, { Component, useEffect, useState } from "react";
import { TextField, Button, Container, Divider } from "@material-ui/core";
import { Card, CardHeader, CardContent } from "@material-ui/core";
// import axios from "axios";
// import { saveAs } from "file-saver";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import LinkIcon from "@material-ui/icons/Link";
import TitleIcon from "@material-ui/icons/Title";
import DescriptionIcon from "@material-ui/icons/Description";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Row, Col } from "react-bootstrap";
import { Paper, withStyles, Grid } from "@material-ui/core";
import HeaderComponent from "../components/Header/HeaderComponent";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 1.5,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

function Projects(props) {
  const initialValues = {
    title1: "",
    link1: "",
    projectDescription1: "",
    title2: "",
    link2: "",
    projectDescription2: "",
    title3: "",
    link3: "",
    projectDescription3: "",
  };

  const [projectDetailsValues, setProjectDetailsValues] =
    useState(initialValues);
  const [projectDetailsErrors, setProjectDetailsErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectDetailsValues({ ...projectDetailsValues, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setProjectDetailsErrors(validate(projectDetailsValues));
    setIsSubmit(true);
  };

  const goToNextPage = (props) => {
    // e.preventDefault();
    props.history.push("/experiencedetails");
    console.log("Hello");
  };

  useEffect(() => {
    console.log(projectDetailsErrors);
    if (Object.keys(projectDetailsErrors).length === 0 && isSubmit) {
      console.log(projectDetailsValues);
      goToNextPage(props);
    }
  }, [projectDetailsErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.title1) {
      errors.title1 = "Title is required";
    }
    if (!values.link1) {
      errors.link1 = "Link is required";
    }
    if (!values.projectDescription1) {
      errors.projectDescription1 = "Project description is required";
    }
    if (!values.title2) {
      errors.title2 = "Title is required";
    }
    if (!values.link2) {
      errors.link2 = "Link is required";
    }
    if (!values.projectDescription2) {
      errors.projectDescription2 = "Project description is required";
    }
    if (!values.title3) {
      errors.title3 = "Title is required";
    }
    if (!values.link3) {
      errors.link3 = "Link is required";
    }
    if (!values.projectDescription3) {
      errors.projectDescription3 = "Project description is required";
    }

    return errors;
  };

  const { classes } = props;

  return (
    <div>
      <HeaderComponent />
      <Paper className={classes.padding}>
        <Card>
          <CardHeader title="Projects Developed" align="center" />
        </Card>
        <CardContent>
          <div className={classes.margin}>
            <Grid container spacing={2} align="center" lg={12}>
              <Grid item xs={12} lg={12}>
                <h5>Project 1</h5>
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="title1"
                  label="Title"
                  style={{ width: "80%" }}
                  required
                  value={projectDetailsValues.title1}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
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
                  {projectDetailsErrors.title1}{" "}
                </p>
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="link1"
                  label="Link"
                  style={{ width: "80%" }}
                  required
                  value={projectDetailsValues.link1}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <LinkIcon />
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
                  {projectDetailsErrors.link1}{" "}
                </p>
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="projectDescription1"
                  label="Description"
                  style={{ width: "80%" }}
                  required
                  value={projectDetailsValues.projectDescription1}
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
                  {projectDetailsErrors.projectDescription1}{" "}
                </p>
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container spacing={2} align="center" lg={12}>
              <Grid item xs={12} lg={12}>
                <h5>Project 2</h5>
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="title2"
                  label="Title"
                  style={{ width: "80%" }}
                  required
                  value={projectDetailsValues.title2}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
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
                  {projectDetailsErrors.title2}{" "}
                </p>
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="link2"
                  label="Link"
                  style={{ width: "80%" }}
                  required
                  value={projectDetailsValues.link2}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <LinkIcon />
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
                  {projectDetailsErrors.link2}{" "}
                </p>
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="projectDescription2"
                  label="Description"
                  style={{ width: "80%" }}
                  required
                  value={projectDetailsValues.projectDescription2}
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
                  {projectDetailsErrors.projectDescription2}{" "}
                </p>
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container spacing={2} align="center" lg={12}>
              <Grid item xs={12} lg={12}>
                <h5>Project 3</h5>
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="title3"
                  label="Title"
                  style={{ width: "80%" }}
                  value={projectDetailsValues.title3}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
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
                  {projectDetailsErrors.title3}{" "}
                </p>
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="link3"
                  label="Link"
                  style={{ width: "80%" }}
                  value={projectDetailsValues.link3}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <LinkIcon />
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
                  {projectDetailsErrors.link3}{" "}
                </p>
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="projectDescription3"
                  label="Description"
                  style={{ width: "80%" }}
                  value={projectDetailsValues.projectDescription3}
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
                  {projectDetailsErrors.projectDescription3}{" "}
                </p>
              </Grid>
            </Grid>
          </div>
        </CardContent>
        <Container className={classes.margin}>
          <Row>
            <Col xs={4} />
            <Col xs={2}>
              <Link to="/educationaldetails">
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
              {/* <Link to="/experiencedetails"> */}
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
          Page 3
        </p>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Projects);
