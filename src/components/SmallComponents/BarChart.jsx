

import { BarChart } from "keep-react";
const BarChartData = [
  {
    name: "2",
    price: 340,
    sell: 140,
  },
  
  {
    name: "8",
    price: 190,
    sell: 130,
  },
  
];
// barSize={30}
const BarComponent = () => {
  return (
    <BarChart
    barSize={20}
      width={200}
      height={150}
      barRadius={[4, 4, 0, 0]}
      dataKey="price"
      secondaryDataKey="sell"
      chartData={BarChartData}
      showBg={true}
      showLegend={true}
      showTooltip={true}
      showXaxis={true}
      showYaxis={true}
    />
  );
}

export default BarComponent