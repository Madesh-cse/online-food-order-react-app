import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Homepage from './pages/Home';
import RootLayout from './pages/root';
import ExploreCollectionPage from './collection/ExploreCollection';
import CollectionPage from './pages/collectionroot';
import TrendingSpotPage from './collection/TrendingPage';
import Content from './Popular/content1'
import './App.css'; 
import ExploreRoot from './pages/ExploreRoot'
import DiningPage from './explore/DiningPage';
import DeliveryPage from './explore/DeliveryPage';
import NightsOutPage from './explore/NightoutPage';
import CollectLocatioRoot from './pages/CollectionLocation';
import HandPickedComponent from './collection/HandPickedComponent';
import SavedComponent from './collection/SavedComponent';
import Coupons from './BestDeals/Coupons';
import BestDeals from './pages/BestDeals';
import UsedCoupons from './BestDeals/UsedCoupons';
import RestaruntPageRoot from './pages/Restaruntpages';
import Restarunt1 from './RestaruntPages/Restarunt1';
import CartPage from './CartProduct/Cart';

const router = createBrowserRouter([

  {path:'/', element:<RootLayout/>,children:[

    {path:'', element:<Homepage/>},

    {path:'BestDeals',element:<BestDeals/>,children:[

      {index:true,element:<Coupons/>},

      {path:'UsedCoupons',element:<UsedCoupons/>}
      
    ]},

    {path:'Restarunt-List',element:<RestaruntPageRoot/>,children:[

      {path:'Burger-King',element:<Restarunt1/>}
    ]},

    {path:'CheckOut',element:<CartPage/>},

    {path:'explore', element:<ExploreRoot/>,children:[

      {index:true,element:<DiningPage/>},

      {path:'Delivery',element:<DeliveryPage/>},

      {path:'NightsOut',element:<NightsOutPage/>}

    ]},

    {path:'ExploreCatagories/:id',element:<Content/>},
     
    {path:'collection', element:<CollectionPage/>,children:[

      {index:true, element:<ExploreCollectionPage/>},
      
      {path:'Top Trending Place',element:<TrendingSpotPage/>},

      {path:'Chennai',element:<CollectLocatioRoot/>,children:[

        {index:true,element:<HandPickedComponent/>},

        {path:'Saved',element:<SavedComponent/>}

      ]}

    ]}

  ]}
]) 

function App() {
  return <RouterProvider router={router}/>
}

export default App;
