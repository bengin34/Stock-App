import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import { Form } from "formik";
import TextField from "@mui/material/TextField";
import { object, string } from "yup";
import LoadingButton from "@mui/lab/LoadingButton";
import useAuthCall from "../hooks/useAuthCall";

const Register = () => {
  const navigate = useNavigate();
  const { currentUser, error, loading } = useSelector((state) => state.auth);
  const { register } = useAuthCall();

  const registerScheme = object({
    username: string()
      .required("User name can not be blank")
      .min(5, "User name should be at least 5 characters"),
    first_name: string().required("First Name can not be blank"),
    last_name: string().required("Last Name can not be blank"),
    email: string()
      .email("Please enter a valid email")
      .required("Email can not be blank"),
    password: string()
      .required("password can not be blank")
      .min(8, "password should be at least 8 characters")
      .max(20, "Password can not be more than 20 characters")
      .matches(/\d+/, "Password requires at least one number")
      .matches(/[a-z]/, "Password requires at least one lowercase letter")
      .matches(/[A-Z]/, "Password requires at least one uppercase letter")
      .matches(
        /[!,?{}><%&$#£+-.]+/,
        "Password requires at least one special letter"
      ),
  });

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              email: "",
              password: "",
              username: "",
              first_name: "",
              last_name: "",
            }}
            validationSchema={registerScheme}
            onSubmit={(values, actions) => {
              register(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({ values, handleChange, handleBlur, errors, touched }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Username"
                    name="username"
                    id="username"
                    type="text"
                    variant="outlined"
                    value={values?.username || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                  />
                  <TextField
                    label="First Name"
                    name="first_name"
                    id="first_name"
                    type="text"
                    variant="outlined"
                    value={values?.first_name || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.first_name && Boolean(errors.first_name)}
                    helperText={touched.first_name && errors.first_name}
                  />
                  <TextField
                    label="Last Name"
                    name="last_name"
                    id="text"
                    type="last_name"
                    variant="outlined"
                    value={values?.last_name || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.last_name && Boolean(errors.last_name)}
                    helperText={touched.last_name && errors.last_name}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    value={values?.email || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    value={values?.password || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <LoadingButton
                    variant="contained"
                    type="submit"
                    loading={loading}
                  >
                    Register
                  </LoadingButton>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
