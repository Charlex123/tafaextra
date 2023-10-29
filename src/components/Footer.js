import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faCheck, faCheckCircle, faCheckSquare, faCheckDouble, faRightFromBracket, faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faGoogle } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faFontAwesome, faGoogle, faCheck,faCheckCircle)

const Footer = () => {
//    const [modalState, setModalState] = useState<boolean>(false);
//    const [recipientModalState, setRecipientModalState] = useState<boolean>(false);
//    const [bulkRecipients, setBulkRecipients] = useState<string>("");
//    const [recipientsInputType, seRecipientsInputType] = useState<string>("");

   
   return (
      <div>
         <div className='footer text-white'><div className='footam p-4'><br></br><br></br>TheOutreach | ©2023 <a href='privacy-policy' rel='noopener noreferrer' className='text-white ml-4'>Privacy Policy</a> <a href='terms' rel='noopener noreferrer' className='text-white ml-8'>Terms</a> <a href='support' rel='noopener noreferrer' className='text-white ml-2'>Support</a>  <br></br><br></br><br></br></div></div>
      </div>
   )
   }

export default Footer