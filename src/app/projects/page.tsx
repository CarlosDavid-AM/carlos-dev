"use client"

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from "react"
interface Repository {
  id: number
  name: string
  html_url: string
}

function projects() {

  const [repos, setRepos] = useState<[]>([])
    
  useEffect(() => {
    fetch('https://api.github.com/users/CarlosDavid-AM/repos')
    .then(res => res.json())
    .then(data => setRepos(data))
  }, [])

  return (
    <div className="container mx-auto">
      <h2 className='text-xl lg:text-3xl mt-7 text-center lg:text-start'>
        Estos son mis proyectos personales en los que he trabajado a lo largo de mi carrera como programador. 
      </h2>
      <div className='container mx-auto p-4 mb-8'>
        <div className='grid lg:grid-cols-2 gap-4 mt-12 mb-4'>
          {
            repos.map(({id, name, html_url}: Repository) => (
              <a href={html_url} target='_blank' key={id} 
              className='bg-gray-850 hover:bg-gray-900 p-4 rounded-md shadow flex justify-between items-center mx-14'>
                <h3> 
                  {name} 
                </h3>
                <span>
                  <img src="/imagenes/svg/arrow-up-right.svg" alt="arrow-up-right" className='h-6' />
                </span>
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default projects