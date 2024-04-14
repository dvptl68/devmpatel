import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {
  Stack,
  Box,
  Button,
} from '@mui/material';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

const tabRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/posts',
    element: <Posts />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

const Router = () => {
  return (
    <Stack
      direction='column'
      spacing={1}
      justifyContent='center'
      alignItems='center'
      sx={{ height: '100vh', width: '100vw'}}
    >
      <Stack
        border={1}
        direction='row'
        spacing={1}
        alignItems='center'
        sx={{ height: '20vh'}}
      >
        <Button
          variant='outlined'
          onClick={() => { tabRouter.navigate('/') }}
        >
          Home
        </Button>
        <Button
          variant='outlined'
          onClick={() => { tabRouter.navigate('/about') }}
        >
          About
        </Button>
        <Button
          variant='outlined'
          onClick={() => { tabRouter.navigate('/posts') }}
        >
          Posts
        </Button>
        <Button
          variant='outlined'
          onClick={() => { tabRouter.navigate('/projects') }}
        >
          Projects
        </Button>
      </Stack>
      <Box
        border={1}
      >
        <RouterProvider router={tabRouter} />
      </Box>
      
    </Stack>
  );
};

export default Router;
