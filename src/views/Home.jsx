import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import SearchClose from '../components/SearchClose'
import SearchOpen from '../components/SearchOpen'
import { getUsers } from '../redux/actions'

const Home = ({ navigation }) => {

  const [searchIsOpen, setSearchIsOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

 return (
    searchIsOpen
      ? <SearchOpen setSearchIsOpen={setSearchIsOpen} navigation={navigation} />
      : <SearchClose setSearchIsOpen={setSearchIsOpen} />
 )
  
}

export default Home