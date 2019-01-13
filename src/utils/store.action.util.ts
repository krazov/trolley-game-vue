import { Store } from 'vuex';
import { DispatchWithStore, RootState } from '@/meta/store._.meta';

export const action: (namespace: string, actionName: string) => string =
    (namespace, actionName) =>
        `${namespace}/${actionName}`;

export const dispatchActionWith: DispatchWithStore =
    (store) => (namespace, actionLabel) => (payload = null) =>
        store.dispatch(action(namespace, actionLabel), payload, { root: true });
