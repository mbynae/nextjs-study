type Props = {
    children: React.ReactNode;
};

const layout = ({ children }: Props) => {
    return (
        <div>
            <h4>컴포넌트 레이아웃</h4>
            <span>{children}</span>
        </div>
    );
};

export default layout;
