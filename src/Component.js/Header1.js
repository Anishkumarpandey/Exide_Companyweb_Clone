import React from 'react'
import { Link } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Header1 = () => {
    return (
        <>
            <div className='container-fluid py-2' style={{ backgroundColor: "#00008B" }}>
                <div className='row '>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                        <div className='d-flex justify-content-end'>
                            <Link to="#" style={{color:"white"}} className="px-3">
                                <TwitterIcon />
                            </Link>
                            <Link to="#" style={{color:"white"}} className="px-3">
                                <FacebookIcon />
                            </Link>
                            <Link to="#" style={{color:"white"}} className="px-3">
                                <WhatsAppIcon />
                            </Link>
                            <Link to="#" style={{color:"white"}} className="px-3">
                                <YouTubeIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header1
