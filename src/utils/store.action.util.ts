export const action: (namespace: string, actionName: string) => string =
    (namespace, actionName) =>
        `${namespace}/${actionName}`;
