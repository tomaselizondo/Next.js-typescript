import React from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import fetch from 'isomorphic-unfetch'

const API = 'https://platzi-avo.vercel.app/api/avo'

export const getServerSideProps = async () => {
  const response = await fetch(API)
  const { data: productList }: TAPIAvoResponse = await response.json()
  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
