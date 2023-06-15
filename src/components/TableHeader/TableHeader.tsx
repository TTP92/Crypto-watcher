import { styled } from 'styled-components';
import { globalColors } from '../../global/styles';

interface Props {
    headerArray: Array<{ id: number; title: string }>;
}
const HeaderWrapper = styled.div`
    display: flex;
    font-weight: bold;
    margin-bottom: 5px;
`;

const Item = styled.div`
    flex: 1;
    margin-top: 24px;
    font-size: 18px;
`;

export const TableHeader: React.FC<Props> = ({ headerArray }) => {
    return (
        <>
            <HeaderWrapper>
                {headerArray.map((item) => (
                    <Item key={item.id}>
                        {item.title}
                    </Item>
                ))}
            </HeaderWrapper>
            <div style={{ height: '2px', backgroundColor: globalColors.black }} />
        </>
    );
};
