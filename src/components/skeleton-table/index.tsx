import { css, styled } from 'styled-components';
import { globalColors } from '../../global/styles';

const SkeletonWrapper = styled.div`
    display: flex;
`;

const CommonSkelettonStyles = css`
    flex: 1;
    width: 400px;
    border-radius: 15px;
    background-color: ${globalColors.grey};
    margin-right: 5px;
`;

const Square = styled.div`
    ${CommonSkelettonStyles}
    height: 24px;
    margin-top: 24px;
`;
const Rectangle = styled.div`
    ${CommonSkelettonStyles}
    height: 100vh;
    margin-top: 5px;
`;

const SkeletonTable: React.FC = () => {
    return (
        <>
            <SkeletonWrapper>
                {[...Array(4)].map((_, index) => (
                    <Square key={index} />
                ))}
            </SkeletonWrapper>
            <SkeletonWrapper>
                {[...Array(4)].map((_, index) => (
                    <Rectangle key={index} />
                ))}
            </SkeletonWrapper>
        </>
    );
};
export default SkeletonTable;
