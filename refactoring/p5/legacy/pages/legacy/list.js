import { Component, useEffect } from 'react'
import _List from '../../components/template/_List'
import Router from 'next/router'
import { inject, observer } from 'mobx-react'

@inject('product')
@observer
export default class list extends Component {

    static async getInitialProps({ query }) {
        return {
            page: query.page || 1,
            limit: query.limit || 4,
            category: query.category || 'all'
        }
    }

    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        const { product } = this.props
        await product.callProductList(Number(this.props.page), Number(this.props.limit), this.props.category)
    }

    async componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        const { product } = nextProps
        await product.callProductList(Number(nextProps.page), Number(nextProps.limit), nextProps.category)
    }

    onPaginationChange = (page, pageSize) => {
        Router.push(`/legacy/list?page=${page}&limit=4&category=${this.props.category}`)
    }

    onCategoryChange = (value) => {
        console.log(value)
        Router.push(`/legacy/list?page=1&limit=4&category=${value}`)
    }

    render() {
        const { product } = this.props
        return (
            <_List
            list={product.list}
            page={Number(this.props.page)}
            pageSize={Number(this.props.limit)}
            category={this.props.category}
            onCategoryChange={this.onCategoryChange}
            totalCount={product.totalCount}
            onPaginationChange={this.onPaginationChange} />
        )
    }
}
