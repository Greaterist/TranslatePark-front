import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import TranslationPage from "./TranslationPage";
import ProfilePage from "./ProfilePage";
import NewWordPage from "./NewWordPage";
import AuthorizationPage from "./AuthorizationPage";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/translation/:id" element={<TranslationPage />} />
      <Route path="/newword/" element={<NewWordPage />} />
      <Route path="/auth/" element={<AuthorizationPage />} />
    </Routes>
  );
};

export default RoutesList;
