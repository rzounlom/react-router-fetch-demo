import { Container, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import React from "react";

const Layout: React.FC = () => {
  return (
    <div>
      <h2>Fetch Examples</h2>
      <Nav variant="pills" defaultActiveKey="/fetch-examples">
        <Nav.Item>
          <Nav.Link as={Link} to="example1">
            Fetch Example 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="example2">
            Fetch Example 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <hr />
      <Container>
        {/* This is where the nested pages will be rendered */}
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
