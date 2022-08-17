import styled  from 'styled-components';

export const Container = styled.div`
    width:480px ;
    height:480px ;
`;

export const ContentHeader= styled.div`
    
    background-color: ${props => props.theme.colors.warning} ; ;
   

    >h1{
        font-size:14px;
        margin-bottom: 40px ;
        color: ${props => props.theme.colors.white};
    
    
    }
`;