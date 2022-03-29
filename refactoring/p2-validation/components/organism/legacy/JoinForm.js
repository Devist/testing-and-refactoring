import { useState } from 'react'
import styled from 'styled-components'
import LabeledInput from '../../atom/LabeledInput'
import { Button, Checkbox } from 'antd'

//Organism
const JoinForm = ({ 
    onJoinClick
 }) => {

    const [terms, setTerms] = useState(false)
    const [joinData, setJoinData] = useState({
        email: '',
        nick: '',
        password: '',
        phone: '',
        company: ''
    })
    const [emailWarn, setEmailWarn] = useState('')
    const [nickWarn, setNickWarn] = useState('')
    const [passwordWarn, setPasswordWarn] = useState('')
    const [phoneWarn, setPhoneWarn] = useState('')
    const [companyWarn, setCompanyWarn] = useState('')

    //유효성 체크
    const vaildationCheck = () => {
        let allGreen = true;

        if (!joinData.email) {
            allGreen = false;
            setEmailWarn('이메일 주소를 입력해 주세요.')
        }

        if (joinData.email) {
            var emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
            if (!emailRegExp.test(joinData.email)) {
                setEmailWarn('이메일 형식에 맞지 않습니다.')
                allGreen=false 
            }
        }
        

        if (!joinData.nick) {
            setNickWarn('닉네임을 입력해 주세요.')
            allGreen=false 
        }

        if (!joinData.password) {
            setPasswordWarn('비밀번호를 입력해 주세요.')
            allGreen=false 
        }

        if (joinData.password) {
            var pwRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&^+=_])[A-Za-z\d$@$!%*#?&^+=_]{8,12}$/
            if (!pwRegExp.test(joinData.password)) {
                setPasswordWarn('비밀번호는 영문, 숫자, 특수문자를 혼합한 8~12자 이내로 입력해 주세요.')
                allGreen=false 
            }
        }


        if (!joinData.phone) {
            setPhoneWarn('휴대폰 번호를 입력해 주세요.')
            allGreen=false 
        }

        if (joinData.phone) {
            if (joinData.phone.length > 11 || joinData.phone.length < 10) {
                setPhoneWarn('휴대폰 번호는 11자리 또는 12자리 입니다.')
                allGreen=false 
            }
        }
        

        if (!joinData.company) {
            setCompanyWarn('재직중인 회사를 입력해 주세요.')
            allGreen=false 
        }

        return allGreen
    }

    //회원가입 클릭 시 유효성 체크 후 올바른 경우만 props 함수 실행
    const onClick = (e) => {
        e.preventDefault();
        if (vaildationCheck()) {
            //joinData를 인자로 넘겨 줍니다.
            onJoinClick(joinData)
        }
    }

    const onInputChange = (e) => {
        let newJoinData = joinData
        newJoinData[e.target.name] = e.target.value
        setJoinData(newJoinData)
        setEmailWarn('')
        setNickWarn('')
        setPasswordWarn('')
        setPhoneWarn('')
        setCompanyWarn('')
    }

    return (
        <InputWrapper>
            <LabeledInput name={'email'} onChange={onInputChange} warning={emailWarn} label={'이메일'} />
            <LabeledInput name={'nick'} onChange={onInputChange} warning={nickWarn} label={'닉네임'} />
            <LabeledInput name={'password'} onChange={onInputChange} warning={passwordWarn} label={'비밀번호'} isPassword />
            <LabeledInput name={'phone'} onChange={onInputChange} warning={phoneWarn} label={'휴대폰번호'} />
            <LabeledInput name={'company'} onChange={onInputChange} warning={companyWarn} label={'회사'} />
            <Checkbox name='terms' checked={terms} onChange={e=> setTerms(e.target.checked)}>이용 약관 및 개인정보처리방침에 모두 동의합니다.</Checkbox>
            <SubmitButton disabled={!terms} onClick={onClick} size={'large'} htmlType={'submit'} type={'primary'}>회원가입</SubmitButton>
        </InputWrapper>
    )
}

const InputWrapper = styled.div`
    width: 100%;
    margin: 20px 0;
`
const SubmitButton = styled(Button)`
    width: 100%;
    margin-top: 10px;
`
export default JoinForm