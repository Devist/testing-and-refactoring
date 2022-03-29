import { useState } from 'react'
import styled from 'styled-components'
import LabeledInput from '../../atom/LabeledInput'
import { Button, Checkbox } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const validationScheme = Yup.object().shape({
    email: Yup.string().email('이메일 형식이 맞지 않습니다.').required('이메일 주소를 입력해 주세요.'),
    nick: Yup.string().required('닉네임을 입력해 주세요.'),
    password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&^+=_])[A-Za-z\d$@$!%*#?&^+=_]{8,12}$/, '비밀번호는 영문, 숫자, 특수문자를 혼합한 8~12자 이내로 입력해 주세요.').required('비밀번호를 입력해 주세요.'),
    phone: Yup.string().min(10, '휴대폰 번호는 10자리 또는 11자리 입니다.').max(11, '휴대폰 번호는 10자리 또는 11자리 입니다.').required('휴대폰 번호를 입력해 주세요.'),
    company: Yup.string().required('재직중인 회사를 입력해 주세요.'),
});

//Organism
const JoinForm = ({ 
    onJoinClick
}) => {

    const { register, handleSubmit, formState: { errors }, setValue, clearErrors } = useForm({
        resolver: yupResolver(validationScheme)
    });

    const [terms, setTerms] = useState(false)
    
    //React Hook Form 에 데이터 전달 및 오류 메시지 초기화
    const onChange = (e) => {
        clearErrors([e.target.name])
        setValue(e.target.name, e.target.value)
    }

    return (
        <InputWrapper onSubmit={handleSubmit(onJoinClick)}>
            <LabeledInput onChange={onChange} register={register} warning={errors.email ? errors.email.message : ''} name={'email'} label={'이메일'} />
            <LabeledInput onChange={onChange} register={register} warning={errors.nick ? errors.nick.message : ''} name={'nick'} label={'닉네임'} />
            <LabeledInput onChange={onChange} register={register} warning={errors.password ? errors.password.message : ''} name={'password'} label={'비밀번호'} isPassword />
            <LabeledInput onChange={onChange} register={register} warning={errors.phone ? errors.phone.message : ''} name={'phone'} label={'휴대폰번호'} />
            <LabeledInput onChange={onChange} register={register} warning={errors.company ? errors.company.message : ''} name={'company'} label={'회사'} />
            
            <Checkbox name='terms' checked={terms} onChange={e=> setTerms(e.target.checked)}>이용 약관 및 개인정보처리방침에 모두 동의합니다.</Checkbox>
            <SubmitButton htmlType={'submit'} disabled={!terms} size={'large'} htmlType={'submit'} type={'primary'}>회원가입</SubmitButton>
        </InputWrapper>
    )
}

const InputWrapper = styled.form`
    width: 100%;
    margin: 20px 0;
`
const SubmitButton = styled(Button)`
    width: 100%;
    margin-top: 10px;
`
export default JoinForm