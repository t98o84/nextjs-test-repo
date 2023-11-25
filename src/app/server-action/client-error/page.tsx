import { CatchError } from "./catch-error";
import { ThrowError } from "./throw-error";

async function errorAction() {
  "use server";
  throw new Error("Error in server action");
}

export default async function Page() {
  return (
    <>
      <h1>Client error</h1>
      <form action={errorAction}>
        <button>Throw error (formAction)</button>
      </form>
      <hr />
      <ThrowError action={errorAction} />
      <hr />
      <CatchError action={errorAction} />
    </>
  );
}
