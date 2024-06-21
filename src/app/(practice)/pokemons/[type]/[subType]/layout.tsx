import { POKEMON_TYPES } from '@/types/pokemon-type';

type Props = {
    children: React.ReactNode;
    params: { type: POKEMON_TYPES.TypeList; subType: POKEMON_TYPES.TypeList };
};

const layout = ({ children, params }: Props) => {
    return <div>{children}</div>;
};

export default layout;
