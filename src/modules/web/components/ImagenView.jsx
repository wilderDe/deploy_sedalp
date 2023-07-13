
import { motion } from 'framer-motion'
import { SeccionAnimatrionY } from '../../../helpers/Animaciones/SeccionAnimatrionY'
import close_icons from '../../../assets/icons/close.svg'

import '../styles/imagenview.css'
import { container } from '../../../helpers/framerMotion'

export const ImagenView = ( { modalData } ) => {
    

    const handleCloseImage = () => {
        modalData.setModalImage({active: false })
    }

    if( !modalData.active ){
        return<>  </>
    }

    return (

            <motion.div className="imagen-view" variants={container} initial="hidden" animate="visible" >
                <div className="imagen-row-end">
                    <img src={ close_icons } onClick={()=> handleCloseImage() } />
                </div>

                <div className="image-center">
                    <img src={ modalData.urlImage } />
                </div>
            </motion.div>
    
    )
}
