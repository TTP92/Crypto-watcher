import { useDispatch } from "react-redux";
import { login } from "../../redux/reducer/loginSlice";
import { useState } from "react";
import { styled } from "styled-components";
import { globalColors } from "../../global/styles";
import { Title } from "../../components/Title";

const mockLogin = {email: 'test@test.dk', password: '1234'};
const inputs = [{label: 'Email'}, {label : 'Password'}];

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const Form = styled.form`
    background-color: ${globalColors.grey1};
    padding: 32px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    max-width: 320px;
`;
const Label = styled.label`
    display: grid;
    grid-template-columns: 100px 1fr; // adjust 1st grid
    align-items: center;
    margin-bottom: 5px;
`;
const Input = styled.input``;
const LoginButton = styled.input`
    cursor: pointer;
    border: none;
    background-color: ${globalColors.white};
    height: 40px;
    width: 120px;
    border-radius: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    &:hover {
        border: 2px solid ${globalColors.blue};
    }
`;
const TitleWrapper = styled.div`
    display: flex;
    margin-bottom: 24px;
    justify-content: center;
`;
const LoginButtonWrapper = styled.div`
    display: flex; 
    justify-content: flex-end;
    margin-top: 16px;
`;

export const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch();

    const submit = () => {
        const isSuccess =
            credentials.email === mockLogin.email &&
            credentials.password === mockLogin.password;

        if (!isSuccess) {
            return;
        }

        dispatch(login('SUCCESS'));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
        if(label === 'Email') {
            setCredentials({...credentials, email: e.target.value})
            return;
        } 
        
        setCredentials({...credentials, password: e.target.value})
    }

    return <FormContainer>
        <Form onSubmit={submit}>
            <TitleWrapper>
                <Title titleType={"H1"}>
                    LOGIN
                </Title>
            </TitleWrapper>


            {inputs.map((input) =>
                <Label key={input.label}>
                    {input.label}:
                    <Input
                        type="text"
                        name={input.label.toLowerCase()}
                        onChange={(e) => {
                            handleChange(e, input.label)
                        }}
                    />
                </Label>)}
            <LoginButtonWrapper>
                <LoginButton
                    type="submit"
                    value="Log in"
                />
            </LoginButtonWrapper>
            
        </Form>
    </FormContainer>
};