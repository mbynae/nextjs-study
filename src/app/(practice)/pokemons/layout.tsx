import styles from './pokemons.module.css';

type Props = {
    children: React.ReactNode;
};

export default function PokemonLayout({ children }: Props) {
    return <div className={styles.layout}>{children}</div>;
}
