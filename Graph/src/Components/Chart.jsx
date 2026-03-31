// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

// export default function Chart() {
//   const data = [
//   { name: "Jan", uv: 400 },
//   { name: "Feb", uv: 300 },
//   { name: "Mar", uv: 500 },
//   { name: "Apr", uv: 200 },
//   { name: "May", uv: 150 }
// ];
//   return (
//     <LineChart width={500} height={300} data={data}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//     </LineChart>
//   );
// }

import React from 'react'

const Chart = () => {
  const data = {"anji" : 21, "vamsi" : 22, "sai"  : 23, "gani" : 24};
  return (
    <div>
      {Object.entries(data).map(([name, age], idx) => (
        <p key={idx}>{name} : {age}</p>
      ))}
    </div>
  )
}

export default Chart
