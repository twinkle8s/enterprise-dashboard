import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useAppSelector } from "../../../store/hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      suggestedMin: 360,
      suggestedMax: 460,
      ticks: {
        stepSize: 20,
      },
    },
  },
};

export function OrderTrendChart() {
  const orderHistory = useAppSelector((state) => state.data.orderHistory);

  const chartData: ChartData<"line"> = {
    labels: ["10s ago", "8s ago", "6s ago", "4s ago", "2s ago", "Now"], // X axis labels
    datasets: [
      {
        label: "Orders Trend",
        data: orderHistory, // Y axis data points
        borderColor: "rgb(59, 130, 246)", // Tailwind blue-500
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.3, // smoothness of the line
      },
    ],
  };

  return (
    <div className="w-full h-64">
      <Line options={options} data={chartData} />
    </div>
  );
}
