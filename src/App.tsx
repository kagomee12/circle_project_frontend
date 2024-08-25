
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes"
import Darktheme from "./components/common/Darkmode";

function App() {
  return <Darktheme><RouterProvider router={createBrowserRouter(routes)}/></Darktheme>
}

export default App
