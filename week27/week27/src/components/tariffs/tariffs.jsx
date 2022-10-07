import Tariff from "../tariff/card";
import "./tariffs.css";

const tariffs = [
    {
        id: "01",
        title: "Безлимитный 300",
        rate: 300,
        speed: 10,
        details: "Объем включенного трафика не ограничен",
    },
    {
        id: "02",
        title: "Безлимитный 450",
        rate: 450,
        speed: 50,
        details: "Объем включенного трафика не ограничен",
    },
    {
        id: "03",
        title: "Безлимитный 550",
        rate: 550,
        speed: 100,
        details: "Объем включенного трафика не ограничен",
        isSelected: true,
    },
    {
        id: "04",
        title: "Безлимитный 1000",
        rate: 1000,
        speed: 200,
        details: "Объем включенного трафика не ограничен",
    },
];

export default function Tariffs() {
    return (
        <div className="tariffs">
            {tariffs.map((tariff) => (
                <Tariff title={tariff.title} rate={tariff.rate} speed={tariff.speed} details={tariff.details} isSelected={tariff.isSelected} key={tariff.id}></Tariff>
            ))}
        </div>
    );
}
