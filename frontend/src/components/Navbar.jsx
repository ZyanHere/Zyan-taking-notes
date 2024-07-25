import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import ProfileInfo from './Cards/ProfileInfo'
import { useState } from 'react'

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = () => { }

    const onClearSearch = () => {
        setSearchQuery("");
    }

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
    <Link to={"/"}>
      <h2 className="text-xl font-medium text-black py-2">
        <span className="text-slate-500">Notes</span>
        <span className="text-slate-900">Here</span>
      </h2>
    </Link>

    <SearchBar
        value={searchQuery}
        onChange={({ target }) => setSearchQuery(target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />


    <ProfileInfo />
    
  </div>
  )
}

export default Navbar
