import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home'
import Sign_up from './page/Sign_up/Sign_up';
import Todo from './page/TodoList/Todo'
import Practice from './page/Practics/Practice';
import Weather from './page/Wheather/Weather';
import Cube from './page/Cube/Cube';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },     
    {
      path: "/sign_up",
      element: <Sign_up/>
    },
    {
      path: "/todo",
      element: <Todo/>
    },
    {
      path: "/practice",
      element: <Practice/>
    },
    {
      path: "/weather/",
      element: <Weather/>
    },
    {
      path: "/Cube/",
      element: <Cube/>
    }
  ]);

  return (
    <div className="App">
      


      <RouterProvider router={router} />
    </div>
  );
}

export default App;
