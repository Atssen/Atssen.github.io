import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { PAGES } from "../routes.js";

const Homepage = lazy(() => import("./Pages/HomePage/Homepage.jsx"));
const BookingPage = lazy(() => import("./Pages/BookingPage/BookingPage.jsx"));

function App() {
    return (
            <Routes>
                <Route path={PAGES.HOMEPAGE} element={<Homepage />} />
                <Route path={PAGES.BOOKING} element={<BookingPage />} />
            </Routes>
    );
}

export default App;
