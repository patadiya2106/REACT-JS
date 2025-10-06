
import { createBrowserRouter } from "react-router";
import App from "../App";


export const routerNames = {
    home: '/',
    addProduct: '/add-product',
    about: '/about',
    viewProduct: '/view-products',
    contact: '/contact',
}


export const routes = createBrowserRouter([
    {
        path: routerNames.home,
        Component: App,
        children: [
            {
                index: true,
                loader: async () => {
                    return await productAPIService.fetchAllProudct();
                },
                Component: HomePage,
            },
            {
                path: routerNames.addProduct,
                Component: AddProductPage,
            },
            {
                path: routerNames.viewProduct,
                loader: async () => {
                    return await productAPIService.fetchAllProudct();
                },
                Component: ViewProudctPage,
            },
            {
                path: routerNames.editProduct,
                loader: async ({ params }) => {
                    console.log(params.id);
                    return await productAPIService.fetchSingleProduct(params.id as string);
                },
                Component: EditProductPage,
            },
            {
                path: routerNames.contact,
                Component: ContactPage,
            }
        ]
    }
]);
