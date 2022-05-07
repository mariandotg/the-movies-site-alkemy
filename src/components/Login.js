const Login = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      console.log("los campos no pueden estar vacíos");
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      console.log("debes escribir una dirección de email válida");
      return;
    }
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
