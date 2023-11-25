"use client";

export function CatchError({ action }: { action: () => void }) {
  const clickHandler = async () => {
    try {
      await action();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <button onClick={clickHandler}>CatchError</button>
    </>
  );
}
