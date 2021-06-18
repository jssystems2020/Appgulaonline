import axios from 'axios'
import { useEffect, useState } from 'react'

const GitUser = props => {
  const [getName, setName] = useState('')
  const [getUrlAvatar, setUrlAvatar] = useState('')
  const [getBio, setBio] = useState('')
  const [getUrl, setUrl] = useState('')

  async function setup () {
    const { data } = await axios.get(`https://api.github.com/users/${props.nick}`)
    setName(data.name)
    setUrlAvatar(data.avatar_url)
    setBio(data.bio)
    setUrl(data.html_url)
  }

  useEffect(() => setup())

  return (
    <a target="_blank" href={getUrl} rel="noreferrer" >
      <div className="user">
        <img src={getUrlAvatar} alt="UserGitPerfil" />
        <p>
          {getName}
        </p>
        <p>
          {getBio}
        </p>
      </div>
    </a>
  )
}
