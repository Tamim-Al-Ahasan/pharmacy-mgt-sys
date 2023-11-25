import { Alert} from "./alert/alert";
import { variants } from "./alert/variants";
export default function Home() {
    return (

        <div>
          <div>
            <h2>Total Number of Customers: 1923{}</h2>
          </div>
          <div>
            <h2>Total Number of Products: 985723 {}</h2>
          </div>
          <div>
            <h2>Total Number of Brands: 937{}</h2>
          </div>
    
    <div className="">
      {variants.map((variant) => (
        <Alert variant={variant} />
      ))}
    </div>
        </div>
    )
      
}


