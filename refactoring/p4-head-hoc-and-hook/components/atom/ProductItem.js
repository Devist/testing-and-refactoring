import styled from 'styled-components'

const ProductItem = ({ thumbnail, title, amount, categoryName }) => {

    return (
        <Item>
            <img src={thumbnail} />
            <CategoryName>{categoryName}</CategoryName>
            <Title>{title}</Title>
            <Price>{`${amount}원`}</Price>
        </Item>
    )
}

const Item = styled.li`
    width: 200px;
    display: flex;
    flex-direction: column;
    float: left;
    margin: 20px;
`
const CategoryName = styled.p`
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 12px;
`

const Title = styled.h3`
    font-weight: bold;
    margin-bottom: 5px;
`

const Price = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 0;
`

export default ProductItem