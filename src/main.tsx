import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home.tsx";
import Rent from "./page/Rent.tsx";
import Roommate from "./page/Roommate.tsx";
import Layout from "./layout/Layout.tsx";
import About from "./page/About.tsx";
import Sell from "./page/Sell.tsx";
import HouseId from "./page/HouseId.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route  path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route  path="/for-rent" element={<Rent/>}/>
      <Route path="/:housetype/:title" element={<HouseId/>}/>
      <Route path="/for-sale" element={<Sell/>}/>
      <Route path="/roommate" element={<Roommate/>}/>
      <Route
          path="*"
          element={
            <div className="text-center py-8 h-screen flex items-center justify-center font-bold text-2xl">Not found</div>
          }
        />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
