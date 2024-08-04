import React from 'react'
import Header from '../../components/About-header/Header'
import ShopCards from '../../components/Shop-cards/ShopCards'
import CallToAction from '../../components/CallToAction/CallToAction'
import { menuItems } from '../../FrozenProductsData.json'; 


export default function Shop() {
  return (
    <>
    <Header header_title={'Frozen Items'} header_btn={'HOME/Shop/Frozen'} />
    <ShopCards shopCardData={menuItems} />
    <CallToAction />
    </>
  )
}
