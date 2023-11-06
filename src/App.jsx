import Summary from "./Components/AboutPage/Summary"
import NavigationBar from "./Components/NavigationBar"
import ProductDetail from "./Components/ProductDetail/ProductDetail"
import CartPage from "./Components/cartPage/CartPage"
import CheckoutPage from "./Components/checkoutPage/CheckoutPage"
import CheckoutSuccess from "./Components/checkoutPage/CheckoutSuccess"
import MainSection from "./Components/homePage/MainSection"
import LogOutSuccess from "./Components/loginPage/LogOutSuccess"
import LoginPage from "./Components/loginPage/LoginPage"
import RegisterPage from "./Components/loginPage/RegisterPage"

import ProductsPage from "./Components/productsPage/ProductsPage"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from "./ErrorPage"

// Create a router configuration using react-router-dom

const router = createBrowserRouter([
  {path: '/', element: <NavigationBar></NavigationBar>, children: [
    {index: true, element:<MainSection></MainSection>},
    {path:'About', element:<Summary></Summary>},
    {path:'Products' , element:<ProductsPage></ProductsPage>},
    {path:'Products/:productId' , element:<ProductDetail></ProductDetail>},
    {path:'Cart' , element:<CartPage></CartPage>},
    {path: 'Checkout', element: <CheckoutPage></CheckoutPage>}
  ], errorElement: <ErrorPage></ErrorPage>},{path: '/login', element: <LoginPage></LoginPage>, errorElement: <ErrorPage></ErrorPage>},
  {path: '/register', element: <RegisterPage></RegisterPage>, errorElement: <ErrorPage></ErrorPage>},
  {path: '/Loggedoutsuccessfully', element: <LogOutSuccess></LogOutSuccess>, errorElement: <ErrorPage></ErrorPage>},
  {path: '/Ordersuccessful', element: <CheckoutSuccess></CheckoutSuccess>, errorElement: <ErrorPage></ErrorPage>}
  
])

function App() {
 

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
