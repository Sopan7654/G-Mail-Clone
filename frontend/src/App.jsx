import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Inbox from "./Components/inbox";
import Body from "./Components/Body";
import Mail from "./Components/Mail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SendEmail from "./Components/SendEmail";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { Toaster } from "react-hot-toast";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <div className="bg-[#F6F8FC] h-screen">
      <Navbar />
      <RouterProvider router={appRouter} />
      <div className="absolute w-[30%] bottom-0 right-20 z-10">
        <SendEmail />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
