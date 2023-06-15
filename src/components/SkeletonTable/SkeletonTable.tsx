import { styled } from 'styled-components';
import { globalColors } from '../../global/styles';

const SkeletonSearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
`;
const SkeletonSearchLabel = styled.div`
    height: 18px;
    border-radius: 5px;
    width: 100px;
    background-color: ${globalColors.grey};
`;
const SkeletonInput = styled.div`
    width: 230px;
    height: 18px;
    border-radius: 5px;
    margin-top: 5px;
    background-color: ${globalColors.grey};
`;
const SkeletonWrapper = styled.div`
    display: flex;
`;
const Square = styled.div<{height: string, marginTop: string}>`
    flex: 1;
    width: 400px;
    border-radius: 15px;
    background-color: ${globalColors.grey};
    margin-right: 5px;
    height: ${props => props.height};
    margin-top: ${props => props.marginTop};
`;

export const SkeletonTable: React.FC = () => {
    return (
        <>
            <SkeletonSearchWrapper>
                <SkeletonSearchLabel/>
                <SkeletonInput/>
            </SkeletonSearchWrapper>
            
            <SkeletonWrapper>
                {[...Array(4)].map((_, index) => (
                    <Square 
                        key={index} 
                        height={'24px'} 
                        marginTop='24px'
                    />
                ))}
            </SkeletonWrapper>
            <SkeletonWrapper>
                {[...Array(4)].map((_, index) => (
                    <Square 
                        key={index} 
                        height={'100vh'}
                        marginTop='5px'
                    />
                ))}
            </SkeletonWrapper>
        </>
    );
};