import styled from 'styled-components'

const _Detail = ({ productInfo }) => {

    return (
        <Wrapper>
            <Content>
                <Title>{productInfo.title}</Title>
                <Image src={productInfo.thumbnail} />
                <Category>{productInfo.categoryName}</Category>
                <Price>{`${productInfo.amount}원`}</Price>
                <DescriptionArea>
                    <DescriptionLabel>상세설명</DescriptionLabel>
                    <Description>{productInfo.content}</Description>
                </DescriptionArea>
            </Content>
            
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width: 100%;
`

const Content = styled.div`
    width: 480px;
    margin: 0 auto;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
`

const Image = styled.img`
    width: 100%;
    margin-bottom: 20px;
`

const Category = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 5px;
`
const Price = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
`

const DescriptionArea = styled.div`
    width: 100%;
    border-top: 1px solid #e9e9e9;
    padding: 20px 0;
`

const DescriptionLabel = styled.p`
    font-size: 12px;
    margin-bottom: 5px;
    font-weight: bold;
`

const Description = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 0;
`

export default _Detail