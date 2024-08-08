import { useState } from 'react';

type InputType<T extends string | object> = T extends string ? string : Extract<T, object>;
type BooleanType<T extends boolean | object> = T extends boolean ? boolean : Extract<T, object>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;
type MouseEvent = React.MouseEvent<HTMLElement>;

//string, number 등의 입력 값 핸들러
export const useInputHandler = <T extends string | object>(initialState: InputType<T>) => {
    // type StateType = T extends string ? string : T;
    const [state, setState] = useState(initialState);

    const onChange = (e: ChangeEvent) => {
        const { value, name } = e!.target;

        if (typeof state === 'object') {
            setState((prev) => ({ ...(prev as typeof state), [name]: value }));
            return;
        }
        setState(value as typeof state);
    }; //text input 핸들러

    const onReset = (updater?: typeof state | ((e: typeof state) => typeof state)) => {
        let resetState: typeof state;

        if (typeof updater === 'undefined') resetState = initialState;
        else if (typeof updater === 'function') resetState = updater(state);
        else resetState = updater;

        setState(resetState);
    };

    return [state, onChange, onReset] as const;
};

//boolean 값 변경 핸들러
export const useBooleanHandler = <T extends boolean | object>(initialState: BooleanType<T>) => {
    const [state, setState] = useState(initialState);

    const onChange = (event?: ChangeEvent | MouseEvent) => {
        event?.target && event?.stopPropagation();

        if (typeof initialState === 'object') {
            const { name } = event?.target as HTMLInputElement & { name: string };
            setState((prev) => ({ ...(prev as typeof state & object), [name]: !(prev as Record<typeof name, boolean>)[name] }));
            return;
        }
        setState((prev) => !prev as typeof state);
    }; //토글 이벤트 핸들러

    const onReset = (value?: typeof state) => {
        const update = value ?? initialState;
        setState(update as typeof state);
    }; //초기화

    return [state, onChange, onReset] as const;
};
