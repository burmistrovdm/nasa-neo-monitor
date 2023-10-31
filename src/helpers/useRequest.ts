'use client';
import { useCallback, useEffect, useRef, useReducer, Reducer } from 'react';

export type UseRequestResult<T, U extends unknown[]> = [
    (...props: U) => void,
    T | null,
    boolean,
    Error | null,
    boolean,
    U | null,
    (patch: IUseRequestAction<T, U>) => void,
];
export type UseRequestRequest<T, U extends unknown[]> = (...props: U) => Promise<T>;

interface IUseRequestState<T, U extends unknown[]> {
    data: T | null;
    loading: boolean;
    error: Error | null;
    inited: boolean;
    lastProps: U | null;
    update: (patch: IUseRequestAction<T, U>) => void;
}

type IUseRequestAction<T, U extends unknown[]> = Partial<IUseRequestState<T, U>>;

type useRequestReducerType<T, U extends unknown[]> = Reducer<IUseRequestState<T, U>, IUseRequestAction<T, U>>;

const reducer = <T, U extends unknown[]>(state: IUseRequestState<T, U>, action: IUseRequestAction<T, U>) => ({
    ...state,
    ...action,
});

/**
 * returns [load, data, loading, error, inited, lastProps, forceUpdate]
 */
export function useRequest<T, U extends unknown[]>(
    request: UseRequestRequest<T, U>,
    initialState: T | null = null,
): UseRequestResult<T, U> {
    const [state, update] = useReducer<useRequestReducerType<T, U>>(reducer, {
        data: initialState,
        loading: false,
        error: null,
        inited: false,
        lastProps: null,
    } as IUseRequestState<T, U>);

    const activeReqIndex = useRef(0);

    useEffect(() => {
        activeReqIndex.current = 0;
        return () => {
            activeReqIndex.current = -1;
        };
    }, []);

    const load = useCallback(
        (...props: U) => {
            if (activeReqIndex.current === -1) {
                return;
            }

            update({ loading: true });

            activeReqIndex.current += 1;
            const reqIndex = activeReqIndex.current;

            request(...props)
                .then(res => {
                    if (reqIndex !== activeReqIndex.current) {
                        return;
                    }

                    update({ error: null, data: res, loading: false, inited: true, lastProps: props });
                })
                .catch(err => {
                    console.error(new Error(err));

                    if (reqIndex !== activeReqIndex.current) {
                        return;
                    }

                    update({ error: err, data: null, loading: false, inited: true, lastProps: props });
                });
        },
        [request],
    );

    const { data, loading, error, inited, lastProps } = state;

    return [load, data, loading, error, inited, lastProps, update];
}
