import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import exp from "constants";
import GameDetailPage from "./pages/GameDetailPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {index: true, element: <HomePage/> },
            { path: 'games/:id', element: <GameDetailPage/>}
        ]
    }
]);

export default router;