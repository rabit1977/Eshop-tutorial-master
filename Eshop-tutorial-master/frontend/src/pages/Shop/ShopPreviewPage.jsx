import React from 'react'
import styles from '../../styles/styles'
import ShopInfo from "../../components/Shop/ShopInfo";
import ShopProfileData from "../../components/Shop/ShopProfileData";

const ShopPreviewPage = () => {
  return (
    <div className={`${styles.section} bg-[#f5f5f5] m-12`}>
         <div className="flex justify-center gap-3">
          <div className="w-1/5 bg-[#fff] rounded-[4px] border-1  overflow-auto h-auto sticky top-10 left-0 z-10">
            <ShopInfo isOwner={false} />
          </div>
          <div className="w-4/5 rounded-">
            <ShopProfileData isOwner={false} />
          </div>
         </div>
    </div>
  )
}

export default ShopPreviewPage