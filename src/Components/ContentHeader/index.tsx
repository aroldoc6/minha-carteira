import React from 'react';



import { Container, TitleConteiner, Controllers } from './styles';

interface IContentHeaderProps {
    title: string;
    lineColor: string;
    children : React.ReactNode;
}
const ContentHeader: React.FC<IContentHeaderProps> = ({
    title, lineColor, children
}) => (
        <Container>
           <TitleConteiner lineColor={lineColor}>
                <h1>{title}</h1>
           </TitleConteiner>
           <Controllers>
                {children}
            </Controllers>
        </Container>
    );


export default ContentHeader;
