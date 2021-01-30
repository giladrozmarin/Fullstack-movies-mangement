import{Container, Text,   Base,  Input,Submit} from './styles/form';


export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}
Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}
Form.Base = function FormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>;
}
Form.Input = function FormInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>;
}

Form.Submit = function FormSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>
}