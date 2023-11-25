async function errorAction() {
  "use server";
  throw new Error("Error in server action");
}

export default async function Page() {
  await errorAction();
  return (
    <>
      <h1>Not displayed</h1>
    </>
  );
}
