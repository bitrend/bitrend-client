import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Project } from "./pages/Project/Project";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Analytics } from "./pages/Analytics/Analytics";
import { User } from "./pages/User/User";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Layout>
  );
}

export default App;
