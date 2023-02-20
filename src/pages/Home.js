import React from "react";
import SingleList from "../components/SingleList";
import Slider from "../components/Slider";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main className="home">
        <h1>
          <span>Tech</span>trends
        </h1>
        <p>
          We are dedicated to covering the latest developments, news, and
          opinions in the field of technology. we provides insights into the
          latest technological trends, gadgets, and software, as well as
          offering tips and tutorials on how to get the most out of these
          products.
        </p>
      </main>
      <Slider />

      <div className="all">
        {[1, 2, 3, 4].map((item, index) => {
          return <SingleList key={index} />;
        })}
      </div>
    </motion.div>
  );
};

export default Home;
