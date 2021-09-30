import React from "react";

export function aside(props) {
  let sizes = props.products
    .reduce((acc, cv) => {
      acc = acc.concat(cv.availableSizes);
      return acc;
    }, []).reduce((acc, cv) => {
      if (!acc.includes(cv)) {
        acc.push(cv);
      }
      return acc;
    }, []);
}