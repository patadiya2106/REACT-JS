import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/Home/HomePage";
import AboutPage from "../Pages/About/AboutPage";
import ViewAllProducts from "../Pages/ViewProducts/ViewAllProducts";
import App from "../App";
import { FashionAPIService } from "../Service/APIService";
import EditProductPage from "../Pages/EditProduct/Editproduct";
import AddProductForm from "../Pages/AddProduct/AddNewProduct";

export const routerName = {
  home : "/",
  about : "/about",
  addNewProduct : "/addNewProduct",
  editProduct : "/edit-Product/:id",
  viewAllProduct : "/viewAllProduct",
  contact : "/contact"
}

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: async () => {
          return await FashionAPIService.fetchAllProducts();
        },
        Component: HomePage,
      },
      {
        path: routerName.about,
        Component: AboutPage,
      },
      {
        path: routerName.addNewProduct,
        Component: AddProductForm,
      },
      {
        path: routerName.editProduct,
        loader: async ({ params }) => {
          return await FashionAPIService.fetchProductsById(params.id as string);
        },
        Component: EditProductPage,
      },
      {
        path: routerName.viewAllProduct,
        loader: async () => {
          return await FashionAPIService.fetchAllProducts();
        },
        Component: ViewAllProducts,
      },
    ],
  },
]);