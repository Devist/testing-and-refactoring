import styled from 'styled-components'
import ProductItem from '../atom/ProductItem'

const ProductList = ({ list = [] }) => {

    return (
        <List>
            {list.map(item => (
                <ProductItem
                    key={String(item.idx)}
                    thumbnail={item.thumbnail}
                    title={item.title}
                    amount={item.amount}
                    categoryName={item.categoryName}
                />
            ))}
        </List>
    )
}

const List = styled.ul`
    width: 100%;
    padding: 20px 0;
    margin-bottom: 0;
    list-style: none;
`

export default ProductList