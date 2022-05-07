const Login = () => {
  return (
    <>
      <h2>Formulario</h2>
      <form>
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
