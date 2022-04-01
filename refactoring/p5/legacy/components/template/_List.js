import styled from 'styled-components'
import { Pagination, Select } from 'antd'
import ProductList from '../organism/ProductList'


const _List = ({ list, page, pageSize, totalCount, onPaginationChange, category, onCategoryChange }) => {
    
    return (
        <Wrapper>
            <ListWrapper>
                <Title>상품 목록</Title>
                <Filter defaultValue={category} onChange={onCategoryChange}>
                    <Select.Option value={'all'}>전체</Select.Option>
                    <Select.Option value={'clothes'}>의류</Select.Option>
                    <Select.Option value={'electric'}>전자기기</Select.Option>
                    <Select.Option value={'foods'}>식료품</Select.Option>
                    <Select.Option value={'camping'}>캠핑용품</Select.Option>
                </Filter>
                <ProductList list={list} />
                <Pagination
                    showSizeChanger={false}
                    current={page}
                    total={totalCount}
                    pageSize={pageSize}
                    onChange={onPaginationChange} />
            </ListWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
`

const ListWrapper = styled.div`
    width: 480px;
    margin: 0 auto;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h2`
    font-weight: bold;
`

const Filter = styled(Select)`
    width: 200px;
`

export default _List