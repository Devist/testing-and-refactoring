import styled from 'styled-components'
import JoinForm from '../../organism/refactoring/JoinForm'

//Template
const _Join = ({ ...props }) => {

    return (
        <Wrapper>
            <JoinWrapper>
                <Title>회원가입</Title>
                <JoinForm {...props} />
            </JoinWrapper>
        </Wrapper>
    )
}

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

export default _Join