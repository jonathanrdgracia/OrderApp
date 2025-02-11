import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products,{loader as productLoader} from './views/Product'
import NewProduct,{action as newProductAction} from './views/NewProduct'
import EditProduct,{loader as editAreaLoader, action as editOrderAction} from './views/EditProduct'

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, 
      children: [
        {
            index: true,
            element: <Products />,
            loader: productLoader
        },{
          path: 'order/new',
          element: <NewProduct/>,
          action: newProductAction,
        },
        {
          path: 'order/:id/edit',
          element: <EditProduct/>,
          loader: editAreaLoader,
          action: editOrderAction
        }
      ]
    }
  ])