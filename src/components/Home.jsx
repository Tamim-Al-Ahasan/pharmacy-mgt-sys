import { Alert} from "./alert/alert";
import { variants } from "./alert/variants";


import './css/home.css';

// export default function Home() {
//     return (

    
//     <div className="">
//       {variants.map((variant) => (
//         <Alert variant={variant} />
//       ))}
//     </div>
       
//     )
      
// }

import Inventory from './inventory';
import Dashboard from './dashboard';
import Order_Table from './recentOrders';
import CollapsibleTable from './products';
import GraphAndChart from "./chart";

function Home() {
  return (
    <>
    <div>   
    <div className="">
       {variants.map(
      (variant) => 
      (<Alert variant={variant}/>)
      )
      }
     </div>
    </div>

      <div>
        <Dashboard/>
      </div>

      {/* <div><GraphAndChart/></div> */}
      <div 
      style={{ display: 'flex', width: '50%', height: '100px' }}>
      <Order_Table/>
      </div>


    </>
  );
}

export default Home;


