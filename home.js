import React from "react";
import Header from "../../components/Header";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Header />
      <Container className="text-center mt-5">
        <h1>Welcome to the Expense Tracker</h1>
        <p>Manage your expenses effectively and take control of your finances.</p>
      </Container>
    </>
  );
};

export default Home;
