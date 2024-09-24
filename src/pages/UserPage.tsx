import React, { useEffect, useState } from "react";

import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Retrieve the 'id' from the URL
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const result = await response.json();
        setUser(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) return <Spinner animation="border" />;

  if (!user) return <p>No user found</p>;

  return (
    <div>
      <h3>User Details (ID: {id})</h3>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
    </div>
  );
};

export default UserPage;
