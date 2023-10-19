import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./pages/MainPage";
import VoteCreatePage from "./pages/VoteCreatePage";
import VoteListPage from "./pages/VoteListPage";
import VotingPage from "./pages/VotingPage";

const VoteApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/create" element={<VoteCreatePage />} />
          <Route path="/list" element={<VoteListPage />} />
          <Route path="/:id" element={<VotingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default VoteApp;
