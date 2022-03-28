import { useState } from 'react'
import styled from 'styled-components'
import { Input as AntdInput, Button, Checkbox } from 'antd'
import { postUser } from '../../libs/user'

const join = () => {
    //회원가입 Input 데이터를 State로 관리합니다.
    const [terms, setTerms] = useState(false)
    const [joinData, setJoinData] = useState({
        email: '',
        nick: '',
        password: '',
        phone: '',
        company: ''
    })

    //유효성 검사 경고문구 입니다.
    const [emailWarn, setEmailWarn] = useState('')
    const [nickWarn, setNickWarn] = useState('')
    const [passwordWarn, setPasswordWarn] = useState('')
    const [phoneWarn, setPhoneWarn] = useState('')
    const [companyWarn, setCompanyWarn] = useState('')

    //유효성 검사 함수 입니다.
    const vaildationCheck = () => {
        let allGreen = true;

        if (!joinData.email) {
            allGreen = false;
            setEmailWarn('이메일 주소를 입력해 주세요.')
        }

        var emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        if (!emailRegExp.test(joinData.email)) {
            setEmailWarn('이메일 형식에 맞지 않습니다.')
            allGreen=false 
        }

        if (!joinData.nick) {
            setNickWarn('닉네임을 입력해 주세요.')
            allGreen=false 
        }

        if (!joinData.password) {
            setPasswordWarn('비밀번호를 입력해 주세요.')
            allGreen=false 
        }

        var pwRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&^+=_])[A-Za-z\d$@$!%*#?&^+=_]{8,12}$/
        if (!pwRegExp.test(joinData.password)) {
            setPasswordWarn('비밀번호는 영문, 숫자, 특수문자를 혼합한 8~12자 이내로 입력해 주세요.')
            allGreen=false 
        }


        if (!joinData.phone) {
            setPhoneWarn('휴대폰 번호를 입력해 주세요.')
            allGreen=false 
        }

        if (joinData.phone.length > 11 || joinData.phone.length < 10) {
            setPhoneWarn('휴대폰 번호는 11자리 또는 12자리 입니다.')
            allGreen=false 
        }

        if (!joinData.company) {
            setCompanyWarn('재직중인 회사를 입력해 주세요.')
            allGreen=false 
        }

        return allGreen
    }

    //회원 가입 클릭 시 유효성 검사 후 문제 없으면 서버와 통신해 회원가입처리 합니다.
    const onJoinClick = async (e) => {
        e.preventDefault();
        
        
        if (!vaildationCheck()) {
            return
        }

        try {
            const result = await postUser(joinData)
            if (result.status === 200) {
                alert('회원가입 완료')
            }
        } catch (err) {
            
        }

        
    }

    //Input이 변경될때 마다 데이터를 state에 저장하고 경고문구를 삭제합니다.
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
        <Wrapper>
            <JoinWrapper>
                <Title>회원가입</Title>
                <InputWrapper>
                    <InputItem>
                        <Label>이메일</Label>
                        <Input name='email' onChange={onInputChange} />
                        <Warning>{emailWarn}</Warning>
                    </InputItem>
                    <InputItem>
                        <Label>닉네임</Label>
                        <Input name='nick' onChange={onInputChange} />
                        <Warning>{nickWarn}</Warning>
                    </InputItem>
                    <InputItem>
                        <Label>비밀번호</Label>
                        <Input.Password name='password' onChange={onInputChange} />
                        <Warning>{passwordWarn}</Warning>
                    </InputItem>
                    <InputItem>
                        <Label>휴대폰번호</Label>
                        <Input name='phone' onChange={onInputChange} />
                        <Warning>{phoneWarn}</Warning>
                    </InputItem>
                    <InputItem>
                        <Label>회사</Label>
                        <Input name='company' onChange={onInputChange} />
                        <Warning>{companyWarn}</Warning>
                    </InputItem>
                    <Checkbox name='terms' checked={terms} onChange={e=> setTerms(e.target.checked)}>이용 약관 및 개인정보처리방침에 모두 동의합니다.</Checkbox>
                    <SubmitButton disabled={!terms} onClick={onJoinClick} size={'large'} htmlType={'submit'} type={'primary'}>회원가입</SubmitButton>
                </InputWrapper>
            </JoinWrapper>
        </Wrapper>
    )

}

//스타일

const Wrapper = styled.div`
    width : 100%;
`

const JoinWrapper = styled.div`
    width: 320px;
    margin: 0 auto;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const Title = styled.h2`
    font-weight: bold;
`

const InputWrapper = styled.div`
    width: 100%;
    margin: 20px 0;
`

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

const Input = styled(AntdInput)`
    width: 100%;
`

const SubmitButton = styled(Button)`
    width: 100%;
    margin-top: 10px;
`



export default join