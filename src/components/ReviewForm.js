import React, { useRef, useEffect } from 'react'
import * as typeformEmbed from '@typeform/embed'

export default class ReviewForm extends React.Component {
  const typeformRef = useRef(null)

  useEffect(() => {
    typeformEmbed.makeWidget(typeformRef.current, 'https://form.typeform.com/to/MY_TYPEFORM_ID', {
      hideFooter: true,
      hideHeaders: true,
      opacity: 50,
    })
  }, [typeformRef])

  return <div ref={typeformRef} style={{ height: '100vh', width: '100%' }}></div>
}