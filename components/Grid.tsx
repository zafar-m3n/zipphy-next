import React from "react";
import { gridItems } from "@/data"
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section>
      <BentoGrid>
        {gridItems.map((item, i)=> (
            <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
