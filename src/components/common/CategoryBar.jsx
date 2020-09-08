import React from "react";

import Button from "./Button";
import Separator from "./Seperator";
import Scroller from "./Scroller";

const CategoryBar = ({ categories }) => {
  if (!categories) return null;

  return (
    <div id="categoryBar">
      <Separator />
      <Scroller>
        {categories && (
          <div className="buttons">
            {categories.map((category) => (
              <Button
                key={category.title}
                style={{
                  marginRight: "10px",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                active={category.active}
                data-toggle="tooltip"
                title="Button"
              >
                {category.title}
              </Button>
            ))}
          </div>
        )}
      </Scroller>
      <Separator />
    </div>
  );
};

export default CategoryBar;
