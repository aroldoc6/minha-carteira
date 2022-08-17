import React,{  ReactNode } from 'react';
import { Container } from './styles';


const Content: React.FC <{children: React.ReactNode}> = ({ children }) =>  (
        <Container>
            {children}
        </Container>
    );


export default Content;