import { useEffect, useRef } from 'react';

export default function useReffedValue<T>(value: T): React.MutableRefObject<T> {
    const ref = useRef(value);

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref;
}
