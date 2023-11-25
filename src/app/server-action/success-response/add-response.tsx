"use client";

import { useState } from "react";

export default function AddResponse({
  action,
  init,
}: {
  action: () => object;
  init: object;
}) {
  const [result, setResult] = useState<object[]>([init]);

  const clickHandler = async () => {
    const res = await action();
    setResult([...result, res]);
  };

  return (
    <>
      <button onClick={clickHandler}>AddResponse</button>
      <pre>{JSON.stringify(result)}</pre>
    </>
  );
}
