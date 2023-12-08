import { Alert } from "./alert/alert";
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
import Chart from "./chart";

function Home() {
  return (
    <>
      <div>
        <div className="">
          {variants.map(
            (variant) =>
              (<Alert variant={variant} />)
          )
          }
        </div>
      </div>

      <div>
        <Dashboard />
      </div>

      <div>
      <h1>Sales Chart</h1>
  <Chart />
</div>

<div style={{ display: 'flex', width: '600px', height: '400px', bottom: 0, right: 0 }}>
  <Order_Table />
</div>



    </>
  );
}

export default Home;


