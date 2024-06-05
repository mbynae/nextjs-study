type Props = {
    params: { slug?: string[] };
};

export default function optional({ params }: Props) {
    return <div>옵셔널 params: {params?.slug ? params.slug.join('/') : '최상위 페이지'}</div>;
}
