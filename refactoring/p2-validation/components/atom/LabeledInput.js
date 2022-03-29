import styled from 'styled-components'
import { Input as AntdInput } from 'antd'

//Atom
const LabeledInput = ({ className, name, onChange, warning, label, isPassword, register = ()=>{} }) => {

    const Input = isPassword ? InputPassword : InputDefault

    return (
        <InputItem className={className}>
            <Label>{label}</Label>
            <Input register={register(name)} name={name} onChange={onChange} />
            <Warning>{warning}</Warning>
        </InputItem>
    )

    
}

const InputItem = styled.div`
    width: 100%;
    margin-bottom: 20px;
`

const Label = styled.p`
    font-size: 14px;
    margin-bottom: 5px;
`

const Warning = styled.p`
    font-size: 12px;
    color: red;
    margin-top: 5px;
    margin-bottom: 0;
`

const InputDefault = styled(AntdInput)`
    width: 100%;
`

const InputPassword = styled(AntdInput.Password)`
    width: 100%;
`

export default LabeledInput