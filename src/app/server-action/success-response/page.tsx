import AddResponse from "./add-response";

async function action() {
  "use server";
  return {
    ok: "ok",
  };
}

export default async function Page() {
  const result = await action();
  return (
    <>
      <h1>ServerActionPage</h1>
      <AddResponse action={action} init={result} />
    </>
  );
}
