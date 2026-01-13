import { useEffect, useState } from "react";
import "./App.css";
import { Table } from "reactstrap";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") //GET
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []); 
  console.log(users);
  
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1>List of users</h1>
        <Table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default App;
