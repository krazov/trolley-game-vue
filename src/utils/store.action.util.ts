import { Store } from 'vuex';
import { RootState } from '@/meta/store._.meta';

export const action: (namespace: string, actionName: string) => string =
    (namespace, actionName) =>
        `${namespace}/${actionName}`;

export const dispatchActionWith: (store: Store<RootState>) => (namespace: string, actionLabel: string) => Promise<any> =
    (store) => (namespace, actionLabel) =>
        store.dispatch(action(namespace, actionLabel), null, { root: true });
