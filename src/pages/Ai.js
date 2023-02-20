import React, { useContext } from "react";
import Card from "../components/Card";
import Side from "../components/Side";
import  {motion} from  "framer-motion"
import { AppContext } from "../context/AppProvider";

const Ai = () => {
  const { blogs } = useContext(AppContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    className="ai single">
      <h1>Artifial intelligence /</h1>
      <div className="content">
        <div className="allai">
          {blogs?.map((item, index) => {
            return <Card key={item.id} item={item} index={index} />;
          })}
        </div>
        <Side />
      </div>
    </motion.div>
  );
};

export default Ai;
