import reproviderLogo from "./assets/reprovider_logo.png";
import "./App.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./core/hooks/hooks";
import { fetchUsers } from "./core/store/users-store/users.buildux";
import { User } from "./core/interfaces/user.interface";

function App() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <img src={reproviderLogo} className="logo" alt="Reprovider logo" />
        <h1>+</h1>
        <img
          src="https://redux-toolkit.js.org/img/redux.svg"
          className="logo react"
          alt="React logo"
        />
      </div>
      <h1>Read data from Json Placeholder with Buildux example</h1>
      <div className="card">
        <a target="_blank" href="https://docs.reprovider.com.ar/">
          Read the Docs
        </a>
      </div>
      <div className="table-container">
        {users ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ id, name, username, email }: User) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <span>Fetching users...</span>
        )}
      </div>
    </>
  );
}

export default App;
