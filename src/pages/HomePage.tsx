import { Button } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to React Fetch & Router Demo</h1>
      <p>This project demonstrates how to use React Router and Fetch API.</p>
      <Button onClick={() => navigate("/fetch-examples")} variant="primary">
        View Fetch Examples
      </Button>
    </div>
  );
};

export default HomePage;
