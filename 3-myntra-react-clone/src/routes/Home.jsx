import React from "react";
import HomeItem from "../components/HomeItem.jsx";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);
  //console.log("Got items", items);

  return (
    <main>
      <div className="items-container">
        {items.map((item, index) => (
          <HomeItem key={index} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
