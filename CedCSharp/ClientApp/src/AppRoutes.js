import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { LoadImgFromServer } from "./components/LoadImgFromServer";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
      element: <Counter />
  },
  {
      path: '/load-img-from-server',
      element: <LoadImgFromServer/>
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
