import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Lock } from "@material-ui/icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { Data } from "../interfaces/HostInterfaces";

const MySwal = withReactContent(Swal);

export const Hotels = () => {
  const [data, setData] = useState<Data | undefined>();
  useEffect(() => {
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${sessionStorage.getItem('token')}`);

    fetch("https://desarrollo.api.noktos.com/api/admin/hosts/50", {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const cerrarSesion = () =>  {
    sessionStorage.removeItem('token')
    navigate("/login");
  }

  const showDetails = (hostId: number) => {
    const hotel = data?.host.filter((e) => e.id === hostId)[0];
    const amenidades = hotel?.amenidades
      .map((e) => `<li>${e.nombre}</li>`)
      .join(",");
    const html = `<p>Dirección: ${hotel?.direccion}</p>
    <p>Email: ${hotel?.email}</p>
    <p>Código Postal: ${hotel?.codigo_postal_id}</p>
    <p>Amenidades:</p>
    <ul>
    ${amenidades}
    </ul>`;
    console.log(amenidades);
    MySwal.fire({
      title: hotel?.nombre,
      text: "Modal with a custom image.",
      html: html,
      imageUrl: hotel?.imagen?.toString(),
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };
  return (
    <div>
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}></Typography>
            <Button color="inherit" onClick={() => cerrarSesion()}>
              <Lock color="error" />
              Cerrar Sesión
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <Grid style={{ padding: "4%" }}>
        <TableContainer component={Paper}>
          <Table aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Telefono</TableCell>
                <TableCell>RFC</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data.host.map((e, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    {e.nombre}
                  </TableCell>
                  <TableCell>{e.email}</TableCell>
                  <TableCell>{e.telefono}</TableCell>
                  <TableCell>{e.rfc}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => showDetails(e.id)}
                    >
                      Ver Detalle
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
};
