import Alert from "../Alert/Alert";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { chartDays } from "../../Helper/constants";

Chart.register(CategoryScale);

function CoinInfo({
  currency,
  days,
  coinHistoricData,
  setCoinInterval,
  setDays,
}) {
  if (!coinHistoricData) {
    return <Alert message={"No data available"} type={"warning"} />;
  }

  function handleDayChange(e) {
    const daysSelected = e.target.options[e.target.selectedIndex].value;
    if (daysSelected == 1) {
      setCoinInterval?.("");
    } else {
      setCoinInterval?.("daily");
    }
    setDays(e.target.options[e.target.selectedIndex].value);
  }
  return (
    <div className="flex flex-col items-center justify-center mt-6 p-6 w-full">
      <div className="h-[500px] w-full">
        <Line
          data={{
            labels: coinHistoricData.prices.map((price) => {
              const date = new Date(price[0]);
              const time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
              {
                label: `price(Past ${days} ${
                  days === 1 ? "Day" : "Days"
                })  in ${currency.toUpperCase()}`,
                data: coinHistoricData.prices.map((price) => price[1]),
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              point: {
                radius: 0,
              },
            },
          }}
        />
      </div>
      <div className=" flex justify-center items-center mt-5">
        <select
          className="select select-primary w-full max-w-xs"
          onChange={handleDayChange}
        >
          {chartDays.map((day, index) => {
            return (
              <option
                selected={days == day.value}
                key={index}
                value={day.value}
              >
                {day.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
export default CoinInfo;
