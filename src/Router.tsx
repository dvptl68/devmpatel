import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const tabRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

const Router = () => {
  return (
    <>
      <button
        onClick={() => { tabRouter.navigate('/') }}
      >
        Dev Patel
      </button>
      <button
        onClick={() => { tabRouter.navigate('/') }}
      >
        Home
      </button>
      <button
        onClick={() => { tabRouter.navigate('/blog') }}
      >
        Blog
      </button>
      <button
        onClick={() => { tabRouter.navigate('/projects') }}
      >
        Projects
      </button>
      <button
        onClick={() => { tabRouter.navigate('/contact') }}
      >
        Contact
      </button>
      <RouterProvider router={tabRouter} />
    </>
  );
};

export default Router;
