import React, { useRef, useEffect } from 'react'
import * as typeformEmbed from '@typeform/embed'

const ReviewForm = ({productName}) =>{
  const typeformRef = useRef(null)

  useEffect(() => {
    typeformEmbed.makeWidget(typeformRef.current, `https://form.typeform.com/to/SL09LYJ3#product_name=${productName}`, {
      hideFooter: true,
      hideHeaders: true,
      opacity: 50,
    })
  }, [typeformRef, productName])

    return (<div ref={typeformRef} style={{ height: '100vh', width: '100%' }}></div>)
}

export default ReviewForm;