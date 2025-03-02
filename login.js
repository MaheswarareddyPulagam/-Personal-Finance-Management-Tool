import { useCallback } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link } from "react-router-dom";

const Login = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="login-container">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#000" } },
          fpsLimit: 60,
          particles: {
            number: { value: 150, density: { enable: true, value_area: 800 } },
            color: { value: "#ffcc00" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: { enable: true, minimumValue: 1 } },
            move: { enable: true, speed: 2 },
          },
          detectRetina: true,
        }}
        className="particle-bg"
      />

      {/* Login Form */}
      <Container className="mt-5 login-content">
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            <h1 className="mt-5">
              <AccountBalanceWalletIcon sx={{ fontSize: 40, color: "white" }} />
            </h1>
            <h2 className="text-white">Login</h2>
            <Form>
              <Form.Group controlId="formBasicEmail" className="mt-3">
                <Form.Label className="text-white">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>

              <div className="text-center mt-4">
                <Link to="/forgotPassword" className="text-white">
                  Forgot Password?
                </Link>

                <Button type="submit" className="mt-3 btnStyle">
                  Login
                </Button>

                <p className="mt-3 text-white">
                  Don't Have an Account?{" "}
                  <Link to="/register" className="text-white">Register</Link>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
