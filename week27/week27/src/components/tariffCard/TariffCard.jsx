import "./tariffCard.css";

function TariffCard(props) {
    const { tariff } = props;

    return (
        <div className={"tariff " + (tariff.isSelected ? "selected" : "")}>
            <h2 className={"tariff__title " + (tariff.isSelected && "selected__title")}>{tariff.title}</h2>
            <div className="tariff__rate">
                <div className="tariff__currency rate-details">руб</div>
                <div className="tariff__price">{tariff.rate}</div>
                <div className="tariff__term rate-details">/мес</div>
            </div>
            <div className="tariff__speed details">до {tariff.speed} Мбит/сек</div>
            <div className="tariff__details details">{tariff.details}</div>
        </div>
    );
}

// function Tariff({ title, rate, speed, details, isSelected }) {
//     return (
//         <div className={"tariff " + (isSelected ? "selected" : "")}>
//             <h2 className={"tariff__title " + (isSelected && "selected__title")}>{title}</h2>
//             <div className="tariff__rate">
//                 <div className="tariff__currency rate-details">руб</div>
//                 <div className="tariff__price">{rate}</div>
//                 <div className="tariff__term rate-details">/мес</div>
//             </div>
//             <div className="tariff__speed details">до {speed} Мбит/сек</div>
//             <div className="tariff__details details">{details}</div>
//         </div>
//     );
// }

export default TariffCard;
