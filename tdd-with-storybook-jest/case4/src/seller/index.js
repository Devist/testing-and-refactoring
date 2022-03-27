import React from 'react'
import PropTypes from 'prop-types';

import './index.css'
import sellerData from '../__fixtures__/seller.json'

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}
    
async function getSellerInfo(email) {
    await sleep(1000);
    if (sellerData[email]) {
        return sellerData[email]
    }
    return null
}
  
function Seller(props) {
    const { email } = props

    const [ show, setShow ] = React.useState(false)
    const [ info, setInfo ] = React.useState(null)

    const handleToggle = React.useCallback(async () => {
        setShow(!show)
    }, [show])

    React.useEffect(() => {
        if (show && !info) {
           getSellerInfo(email).then(res => setInfo(res))
        }
    }, [show, info, email])

    return (
        <div className='seller-comp-container'>
            <p onClick={handleToggle}> 판매자 </p>
            <div className={show ? 'show' : 'hide'}>
                { info && 
                    <table>
                        <tbody>
                            <tr className='row'>
                                <td className='label'>이메일</td>
                                <td className='value'>{email}</td>
                            </tr>
                            <tr className='row'>
                                <td className='label'>이름</td>
                                <td className='value'>{info.name}</td>
                            </tr>
                            <tr className='row'>
                                <td className='label'>연락처</td>
                                <td className='value'>{info.contact}</td>
                            </tr>
                        </tbody>
                    </table>
                }
            </div>
        </div>
       
    )
}

Seller.propTypes = {
    email: PropTypes.string.isRequired,
};

export default Seller

