import axios from "axios";
import swAlert from "@sweetalert/with-react";

const Login = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      swAlert(<h2>Los campos no pueden estar vacíos</h2>);
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      swAlert(<h2>Debes escribir una dirección de email válida</h2>);
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      swAlert(<h2>Credenciales inválidas</h2>);
      return;
    }

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((response) => {
        swAlert(<h2>Ingresaste correctamente</h2>);
        const token = response.data.token;
        localStorage.setItem("token", token);
      });
  };

  return (
    <>
      <h2>Formulario</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Email:</span>
          <br />
          <input name="email" placeholder="test@gmail.com" type="email" />
        </label>
        <br />
        <label>
          <span>Contraseña:</span>
          <br />
          <input name="password" placeholder="password" type="password" />
        </label>
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Login;
