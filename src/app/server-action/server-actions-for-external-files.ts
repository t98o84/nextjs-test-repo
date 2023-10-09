'use server';

import { revalidatePath, revalidateTag } from "next/cache";

export async function serverActionsForExternalFiles(args?: object) {
    console.log('[SSA] ServerActionsForExternalFiles', args);
    // revalidatePath('server-actions-for-external-files');
    // revalidateTag('server-actions-for-external-files');
    return 'OK'
}
