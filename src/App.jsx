import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import CountryService from './modules/CountryService'
import NewsSearch from "./components/NewsSearch"
import { Container, Menu, Header, Image } from 'semantic-ui-react'
import NewsIndex from './components/NewsIndex'
import logo from './nwn.png'

const App = () => {
  const [location, setLocation] = useState({})
  const dispatch = useDispatch()
  const getCountryCode = async () => {
    const countryCode = await CountryService(location)
    dispatch({ type: 'SET_COUNTRY_CODE', payload: countryCode })
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLocation(position.coords)
    })
  }, [])


  
  useEffect(() => {
    getCountryCode()
  }, [location])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Menu style={{ borderRadius: 0, background: '' }}>
        <Menu.Item data-cy="logo">
          <Image href="/" data-cy="logoImg"src={logo} size='tiny' centered />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item data-cy="location-display">{location.latitude} {location.longitude}</Menu.Item>
          <Menu.Item>
            <NewsSearch data-cy="news-search" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Container textAlign="left">
        <Header as='h2' data-cy="header">
          News Wire Network
          </Header>
        <p data-cy="header-card">News from around the world</p>
        <NewsIndex />
      </Container>
    </>
  )
}

export default App
