import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { LockOpenOutlined } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
const MySwal = withReactContent(Swal);

export const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const stlyes = {
    paper: {
      padding: 20,
      height: "70vh",
      width: 350,
      margin: "20px auto",
    },
    textFields: {
      marginTop: "5%",
    },
    grid: {
      display: "flex",
      justifyContent: "center",
    },
    title: {
      textAlign: "center",
    },
  };

  const onButtonClick = () => {
    if (email.length === 0 || password.length === 0) {
      MySwal.fire("Error", "Todos los campos deben ser llenados", "error");
      return;
    }

    fetch("https://desarrollo.api.noktos.com/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email: email,
        password: password,
        sistema: "2",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.res) {
          sessionStorage.setItem("token", data.token);
          navigate("/");
        } else {
          MySwal.fire("Error", data.message, "error");
        }
      })
      .catch((err) => {
        MySwal.fire(
          "Error",
          "Hubo un error durante el inicio de sesión",
          "error"
        );
      });
  };

  return (
    <Grid>
      <Paper elevation={10} style={stlyes.paper}>
        <Grid style={stlyes.grid}>
          <Avatar>
            <LockOpenOutlined fontSize="large" />
          </Avatar>
        </Grid>
        <Typography
          variant="h5"
          style={{ textAlign: "center", marginBottom: "7vh" }}
        >
          Login
        </Typography>

        <TextField
          fullWidth
          placeholder="Ingrese su Email"
          required
          variant="outlined"
          style={stlyes.textFields}
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
        <TextField
          fullWidth
          placeholder="Ingrese su contraseña"
          required
          type="password"
          variant="outlined"
          style={stlyes.textFields}
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <Grid style={{ ...stlyes.grid, marginTop: "10vh" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onButtonClick()}
          >
            Iniciar Sesión
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};
