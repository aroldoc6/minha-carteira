import React  from 'react';

import {
    Container,
   ContentHeader
} from './styles';

interface IRegisterProps {
   title: string;
   lineColor: string;
   children : React.ReactNode;
}

const Register: React.FC<IRegisterProps> = ({
   title, lineColor, children
}) => {
     return(
        
            <Container>
               <ContentHeader title='Cadastrar'>
                    <h1>{title}</h1>
               </ContentHeader>
            </Container>
    );
}

export default Register;