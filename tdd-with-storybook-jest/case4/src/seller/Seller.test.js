import { cleanup, render, fireEvent, waitFor } from '@testing-library/react';

import Seller from './index';
import sellerData from '../__fixtures__/seller.json'

afterEach(cleanup);

it('판매자 정보가 다 나온다.', async () => {
    render(<Seller {...sellerData['jake@jake.com']} />)

    const container = document.querySelector('.seller-comp-container')
    const sellerTag = container.querySelector('p')

    fireEvent.click(sellerTag)

    await waitFor(() =>{
        const rowContents = container.querySelectorAll('tr.row')
        
        expect(rowContents[0].childNodes[1].textContent.trim()).toBe("jake@jake.com")

        expect(rowContents[1].childNodes[1].textContent.trim()).toBe("jake")

        expect(rowContents[2].childNodes[1].textContent.trim()).toBe('010-2222-3444')
    })
})