import { Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import TranslationPage from "./TranslationPage";

const RoutesList = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<HomePage />} />
            <Route path="/translation/:id" element={<TranslationPage />} />
        </Routes>
    )
}

export default RoutesList;