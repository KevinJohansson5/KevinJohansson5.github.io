import { RatesList } from "./RatesList";

const RatesOutput = ({ list }: { list: RatesList }) => {
  return (
    <ul>
      {Object.keys(list).map((key) => (
        <li key={key}>
          {" "}
          {key} : {list[key]}{" "}
        </li>
      ))}
    </ul>
  );
};

export default RatesOutput;
