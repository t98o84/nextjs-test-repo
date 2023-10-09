'use client';

import { useTransition } from "react";
import {serverActionsForExternalFiles} from "@/app/server-action/server-actions-for-external-files";
import {throwErrorServerAction} from "@/app/server-action/throw-error-server-action";

export function ClientComponent() {
    console.log('serverActionsForExternalFiles(Error) ', serverActionsForExternalFiles({ok: 'ok'}));

    const [isPending, startTransition] = useTransition();
    function transitionAction() {
        console.log('transitionAction / serverActionsForExternalFiles ', serverActionsForExternalFiles({ok: 'ok'}));
    }

    return (
        <>
            <h2>ClientComponent</h2>
            <button onClick={() => startTransition(() => transitionAction())}>Exec serverActionForExternalFiles ({isPending ? 'Loading...' : 'Success'})</button><br />
            <button onClick={() => throwErrorServerAction()}>Exec throwErrorServerAction</button>
        </>
    );
}
