export type COMMON_CSS = {
    w?: string | number;
    h?: string | number;
    p?: string | number;
    fz?: string | number;
    fw?: string | number;
};

export type HasHydrated = { _hasHydrated: boolean; setHasHydrated: (state: boolean) => void };
