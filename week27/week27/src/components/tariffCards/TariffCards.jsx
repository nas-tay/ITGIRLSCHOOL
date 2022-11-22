import React, { useState } from "react";
import TariffCard from "../tariffCard/TariffCard";
import "./tariffCards.css";
import { tariffs } from "../../tariff-data";

export default function TariffCards() {
    const [tariffsState, changeState] = useState({
        selectedTariff: null,
    });

    const toggleSelected = (id) => {
        tariffs.map((tariff) => {
            if (tariff.id === id) {
                changeState({ ...tariffsState, selectedTariff: tariff.id });
            }
        });
    };

    const toggleSelectedStyles = (id) => {
        if (id === tariffsState.selectedTariff) {
            return "tariff selected";
        } else {
            return "tariff non-selected";
        }
    };

    return (
        <div className="tariffs">
            {tariffs.map((tariff) => (
                <TariffCard data={tariff} key={tariff.id} toggleSelected={toggleSelected} toggleSelectedStyles={toggleSelectedStyles} />
            ))}
        </div>
    );
}
