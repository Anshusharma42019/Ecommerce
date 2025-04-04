import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import ContactPage from './Component/pages/ContactPage'
import Slider from './Component/pages/slider'
import Categories from "./Component/pages/Categories";
import Collections from "./Component/pages/Collections";
import FashionCollections from "./Component/pages/FashionCollections";
import DiscountBanner from "./Component/pages/DiscountBanner";
import LogoGrid from "./Component/pages/LogoGrid";
import DealOfTheDays from "./Component/pages/DealOfTheDays";
import Layout from "./Component/FunctionsWork/Layout";
import AddToCart from "./Component/pages/AddToCart";
import Product from "./Component/pages/Product";
import './App.css';

function App() {   
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path="" element={<Slider/>}/>
        <Route path="categories" element={<Categories/>}/>
        <Route path="collections" element={<Collections/>}/>
        <Route path="fashioncollections" element={<FashionCollections/>}/>
        <Route path="discountbanner" element={<DiscountBanner/>}/>
        <Route path="logogrid" element={<LogoGrid/>}/>
        <Route path="dealoftheday" element={<DealOfTheDays/>}/>
        <Route path="contact" element={<ContactPage/>}/>
        <Route path="addtocart" element={<AddToCart/>}/>
        <Route path="product" element={<Product/>}/>

      </Route>
    )
  );

  return <RouterProvider router={router}/>;
}

export default App;
