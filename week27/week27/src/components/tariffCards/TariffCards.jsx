import TariffCard from "../tariffCard/TariffCard";
import "./tariffCards.css";
import { tariffs } from "../../tariff-data";

export default function TariffCards() {
    return (
        <div className="tariffs">
            {tariffs.map((tariff) => (
                <TariffCard data={tariff} key={tariff.id} />
            ))}
        </div>
    );
}
