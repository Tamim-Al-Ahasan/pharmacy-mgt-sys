import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ProductSalesChart = () => {

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('endpoint');
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
 
  const data = [
    { name: 'Drug 1', sales: 65 },
    { name: 'Drug 2', sales: 59 },
    { name: 'Drug 3', sales: 80 },
    { name: 'Drug 4', sales: 81 }
  ];

  return (
    <div>
      <BarChart width={400} height={350} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <h3>Sales Chart</h3>
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="black" />
      </BarChart>
    </div>
  );
};

export default ProductSalesChart;
