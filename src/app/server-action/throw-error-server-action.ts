'use server';

export async function throwErrorServerAction(args?: object) {
    console.log('[SSA] ThrowErrorServerAction', args);
    throw new Error('This is an error from server action')
}
