 import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Grandma from './component/grandma/Grandma';
import Home from './component/Home/Home';
import Main from './layout/Main';
  
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          loader: () => fetch('tshart.json'),
          element: <Home></Home>
        },
        {
          path: '/grandma',
          element: <Grandma></Grandma>
        }
       ]
    }
   ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      </div>
  );
}

export default App;
