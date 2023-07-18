function Login() {
  return (
    <div className="container">
      <div className="rectangle1">
        <div className="rectangle2" />
        <span className="text">Password</span>
        <span className="text02">
          <span className="input-text">Email</span>
        </span>
        <span className="text04">Login</span>
        <input className="email-input horizontal-line-input" />
        <input className="password-input horizontal-line-input" />
        <button className="btn-login">Login</button>
        <span className="text08">
          <span className="text09">
            New User?
            <span />
          </span>
          <span className="text-link">Join Us</span>
        </span>
      </div>
    </div>
  );
}

export default Login;
