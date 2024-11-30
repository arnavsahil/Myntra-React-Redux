import React from "react";
import BagSummary from "../components/BagSummary.jsx";
import BagItem from "../components/BagItem.jsx";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item, index) => (
              <BagItem key={index} item={item}></BagItem>
            ))}
          </div>
          <BagSummary></BagSummary>
        </div>
      </main>
    </>
  );
};

export default Bag;
