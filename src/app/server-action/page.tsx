import {serverActionsForExternalFiles} from "@/app/server-action/server-actions-for-external-files";
import {ClientComponent} from "@/app/server-action/client-component";

export default function Page() {
    async function inlineServerAction(args?: object ) {
        'use server'
        console.log('[SSA] inlineServerAction', args);
    }

    console.log('InlineServerActionResult ', inlineServerAction({ok: 'ok'}));
    console.log('serverActionsForExternalFiles ', serverActionsForExternalFiles({ok: 'ok'}));

    return (
        <>
            <h1>ServerActionPage</h1>

            <hr />

            <ClientComponent />
        </>
    );
}
