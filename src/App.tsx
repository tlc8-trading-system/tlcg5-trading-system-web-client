import { useEffect } from "react";
import { useUsers } from "./api/features/users/user-queries";
import "./App.css";
import type { User } from "./types/mock";

function App() {
  const { data, isLoading, error } = useUsers<User[]>();
  const users = Array.isArray(data) ? data : [];

  useEffect(() => {
    //console.log("data: ", data);
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occured</p>;
  return (
    <>
      <h1 className="text-5xl text-primary">Hello</h1>
      <p>User list</p>
      <div>
        {users.map((user) => {
          return <p>{user.name}</p>;
        })}{" "}
        {/** Render all users */}
      </div>
    </>
  );
}

export default App;
