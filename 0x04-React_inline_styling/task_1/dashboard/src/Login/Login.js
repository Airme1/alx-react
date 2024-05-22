import React from "react";
import "./Login.css";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  app_body: { fontSize: "1rem", padding: "2em", height: "45%" },
  form_input: { margin: 10 },
});

function Login() {
  return (
    <React.Fragment>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input style={form_input} type="email" name="email"></input>
          <label htmlFor="password">Password:</label>
          <input style={form_input} type="password" name="password"></input>
          <button>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
