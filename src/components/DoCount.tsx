import React, { useEffect, useState } from "react";

const DoCount = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return <div>DoCount</div>;
};

export default DoCount;
