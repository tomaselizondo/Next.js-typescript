import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [avoList, setAvoList] = React.useState([])
  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((res) => res.json())
      .then((data) => setAvoList(data.data))
  }, [])
  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      <div>{avoList && avoList.map((avo: any) => <h3>{avo.name}</h3>)}</div>
    </div>
  )
}

export default HomePage
