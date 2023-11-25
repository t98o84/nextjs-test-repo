"use client ";

export function ThrowError({ action }: { action: () => void }) {
  return (
    <>
      <button onClick={action}>ThrowError</button>
    </>
  );
}
