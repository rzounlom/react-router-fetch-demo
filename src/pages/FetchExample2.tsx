import { ListGroup, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const FetchExample2: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Spinner animation="border" />;

  return (
    <div>
      <h3>Fetch Example 2: Users from JSONPlaceholder</h3>
      <ListGroup>
        {data.map((user) => (
          <ListGroup.Item key={user.id}>
            {user.name} ({user.email})
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default FetchExample2;
