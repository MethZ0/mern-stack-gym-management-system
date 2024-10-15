import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css"; // Ensure Tailwind CSS is imported here
import store from "./store";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import TrainerDashboard from "./screens/TrainerDashboard.jsx";
import MemberDashboard from "./screens/MemberDashboard.jsx";
import AdminDashboard from "./screens/AdminDashboard.jsx";
import EditUser from "./screens/Auth User/EditUser.jsx";
import DeleteUser from "./screens/Auth User/DeleteUser.jsx";
import CreateUser from "./screens/Auth User/CreateUser.jsx";
import ShowUser from "./screens/Auth User/ShowUser.jsx";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen.jsx";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import Dashboard from "./screens/Dashboard.jsx";


//Inventory - Deshitha
import Store from "./screens/Inventory/main.jsx";
import Cart from "./screens/Inventory/Cart.jsx";
import Inventory from "./screens/Inventory/StoreM.jsx";
import AddInventory from "./screens/Inventory/Addnewproduct.jsx";
import UpdateItem from "./screens/Inventory/update.jsx";
import Details from "./screens/Inventory/details.jsx";

// Create the router with routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
      <Route path="/reset-password/:token" element={<ResetPasswordScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/users/edit/:id" element={<EditUser />} />
      <Route path="/users/delete/:id" element={<DeleteUser />} />
      <Route path="/users/view/:id" element={<ShowUser />} />
      <Route path="/users/create" element={<CreateUser />} />
      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/trainer-dashboard" element={<TrainerDashboard />} />
        <Route path="/member-dashboard" element={<MemberDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>


      
      <Route path="/store" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/add-inventory" element={<AddInventory />} />
      <Route path="/update/:Id" element={<UpdateItem />} />
      <Route path="/details/:itemId" element={<Details />} />
    </Route>
  )
);

// Render the app with Redux provider and RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
