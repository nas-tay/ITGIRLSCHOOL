// import "./App.css";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ["Watermelon", "Cucumber", "Kiwi", "Olive", "Lemon"],
    datasets: [
        {
            label: "# of Votes",
            data: [14, 17, 5, 9, 4],
            backgroundColor: ["rgba(0, 148, 69, 0.8)", "rgba(57, 181, 74, 0.8)", "rgba(141, 199, 63, 0.8)", "rgba(215, 224, 34, 0.8)", "rgba(249, 237, 50, 0.8)"],
            borderColor: ["rgba(0, 148, 69, 1)", "rgba(57, 181, 74, 1)", "rgba(141, 199, 63, 1)", "rgba(215, 224, 34, 1)", "rgba(249, 237, 50, 1)"],
            borderWidth: 1,
        },
    ],
};

export function App() {
    return (
        <>
            <h1 className="pieTitle">Pie Chart</h1>
            <div className="pieChart">
                <Pie data={data} />;
            </div>
        </>
    );
}

export default App;
