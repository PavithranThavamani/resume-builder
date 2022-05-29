import React, { useEffect, useState } from "react";
import { TextField, Button, Container, Divider } from "@material-ui/core";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import SchoolIcon from "@material-ui/icons/School";
import DateRangeIcon from "@material-ui/icons/DateRange";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Row, Col } from "react-bootstrap";
import { Paper, withStyles, Grid } from "@material-ui/core";
import HeaderComponnet from "../components/Header/HeaderComponent";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 1.5,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

function EducationalDetails(props) {
  const initialValues = {
    college: "",
    fromyear1: "",
    toyear1: "",
    qualification1: "",
    description1: "",
    school: "",
    fromyear2: "",
    toyear2: "",
    qualification2: "",
    description2: "",
  };

  const [educationalDetailsValues, setEducationalDetailsValues] =
    useState(initialValues);
  const [educationalDetailsErrors, setEducationalDetailsErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationalDetailsValues({ ...educationalDetailsValues, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEducationalDetailsErrors(validate(educationalDetailsValues));
    setIsSubmit(true);
  };

  const goToNextPage = (props) => {
    // e.preventDefault();
    props.history.push("/projectdetails");
    console.log("Hello");
  };

  useEffect(() => {
    console.log(educationalDetailsErrors);
    if (Object.keys(educationalDetailsErrors).length === 0 && isSubmit) {
      console.log(educationalDetailsValues);
      goToNextPage(props);
    }
  }, [educationalDetailsErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$/;
    if (!values.college) {
      errors.college = "College name is required";
    }
    if (!values.fromyear1) {
      errors.fromyear1 = "From Year is required";
    }
    if (!values.toyear1) {
      errors.toyear1 = "To Year is required";
    }
    if (!values.qualification1) {
      errors.qualification1 = "College Qualification is required";
    }
    if (!values.description1) {
      errors.description1 = "College discription is required";
    }
    if (!values.school) {
      errors.school = "School Name is required";
    }
    if (!values.fromyear2) {
      errors.fromyear2 = "From Year is required";
    }
    if (!values.toyear2) {
      errors.toyear2 = "To Year is required";
    }
    if (!values.qualification2) {
      errors.qualification2 = "School Qualification is required";
    }
    if (!values.description2) {
      errors.description2 = "School description is required";
    }

    return errors;
  };

  const { classes } = props;
  return (
    <div className="eduactionaldetails">
      <HeaderComponnet />
      <Paper className={classes.padding}>
        <Card>
          <CardHeader title="Education Details" align="center" />
        </Card>
        <CardContent>
          <div className={classes.margin}>
            <Grid container spacing={2} align="center" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="college"
                  label="College/Unviersity"
                  style={{ width: "80%" }}
                  required
                  value={educationalDetailsValues.college}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SchoolIcon />
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
                  {educationalDetailsErrors.college}{" "}
                </p>
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="fromyear1"
                  //   label="From Year"
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={educationalDetailsValues.fromyear1}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
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
                  {educationalDetailsErrors.fromyear1}{" "}
                </p>
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="toyear1"
                  type="date"
                  //   label="To Year"
                  style={{ width: "80%" }}
                  required
                  value={educationalDetailsValues.toyear1}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
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
                  {educationalDetailsErrors.toyear1}{" "}
                </p>
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Qualification"
                  variant="outlined"
                  style={{ width: "80%" }}
                  name="qualification1"
                  required
                  value={educationalDetailsValues.qualification1}
                  onChange={handleChange}
                />
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {educationalDetailsErrors.qualification1}{" "}
                </p>
              </Grid>

              <Grid item md={8} sm={12} xs={12} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="description1"
                  required
                  value={educationalDetailsValues.description1}
                  onChange={handleChange}
                />
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {educationalDetailsErrors.description1}{" "}
                </p>
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container spacing={2} align="center" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="school"
                  label="School"
                  style={{ width: "80%" }}
                  required
                  value={educationalDetailsValues.school}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SchoolIcon />
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
                  {educationalDetailsErrors.school}{" "}
                </p>
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="fromyear2"
                  //   label="From Year"
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={educationalDetailsValues.fromyear2}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
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
                  {educationalDetailsErrors.fromyear2}{" "}
                </p>
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                {/* <CustomDatePicker
                  name={'toyear2'}
                  label={'To Year'}
                  value={values.toyear2}
                /> */}
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="toyear2"
                  //   label="To Year"
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={educationalDetailsValues.toyear2}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
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
                  {educationalDetailsErrors.toyear2}{" "}
                </p>
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Qualification"
                  variant="outlined"
                  style={{ width: "80%" }}
                  name="qualification2"
                  required
                  value={educationalDetailsValues.qualification2}
                  onChange={handleChange}
                />
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {educationalDetailsErrors.qualification2}{" "}
                </p>
              </Grid>

              <Grid item md={8} sm={8} xs={8} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="description2"
                  required
                  value={educationalDetailsValues.description2}
                  onChange={handleChange}
                />
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {educationalDetailsErrors.description2}{" "}
                </p>
              </Grid>
            </Grid>
          </div>
        </CardContent>
        <Container className={classes.margin}>
          <Row>
            <Col xs={4} />
            <Col xs={2}>
              <Link to="/">
                <Button
                  style={{ margin: "15px 0px 10px 400px", float: "left" }}
                  variant="contained"
                  color="secondary"
                  // onClick={this.back}
                  startIcon={<NavigateBeforeIcon />}
                >
                  Back
                </Button>
              </Link>
            </Col>
            <Col xs={2}>
              {/* <Link to="/projectdetails"> */}
              <Button
                style={{ margin: " 15px 420px 10px 0px", float: "right" }}
                variant="contained"
                color="secondary"
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
          Page 2
        </p>
      </Paper>
    </div>
  );
}

// export default EducationalDetails;
export default withStyles(styles)(EducationalDetails);
