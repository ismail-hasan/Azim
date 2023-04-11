import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout/Layout';
import Blog from './Page/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
     path:"/",
     element: <Layout></Layout>,
    },
    {
     path:"/blog",
     element: <Blog></Blog>,
    }
  ])


  return (
    <div>
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
