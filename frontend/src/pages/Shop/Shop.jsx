import React from 'react'
import Header from '../../components/About-header/Header'
import ShopCards from '../../components/Shop-cards/ShopCards'
import CallToAction from '../../components/CallToAction/CallToAction'

export default function Shop() {
  return (
    <>
    <Header header_title={'Main dishes'} header_btn={'HOME/Shop/Main dishes'} />
    <ShopCards />
    <CallToAction />
    </>
  )
}
