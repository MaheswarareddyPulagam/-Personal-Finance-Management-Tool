import { useCallback } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./auth.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link } from "react-router-dom";

const Register = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="register-container">
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

      {/* Registration Form */}
      <Container className="register-content">
        <Row className="text-center">
          <h1>
            <AccountBalanceWalletIcon sx={{ fontSize: 40, color: "white" }} />
          </h1>
          <h1 className="text-white">Welcome to Expense Management System</h1>
          <Col md={{ span: 6, offset: 3 }}>
            <h2 className="text-white mt-5">Registration</h2>
            <Form>
              <Form.Group controlId="formBasicName" className="mt-3">
                <Form.Label className="text-white">Name</Form.Label>
                <Form.Control type="text" placeholder="Full name" required />
              </Form.Group>

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
                  Signup
                </Button>

                <p className="mt-3 text-white">
                  Already have an account?{" "}
                  <Link to="/login" className="text-white">Login</Link>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
