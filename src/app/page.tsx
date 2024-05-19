import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto'>
      {/* Header */}
      <div className='flex justify-between'>
        <div className='w-1/2 flex flex-col gap-y-5 pt-14'>
          <h1 className='text-6xl'>
            Carlos A. Mendoza
          </h1>
          <h2 className='text-3xl'>
            Programador Wen Front-End &lt;/&gt;
          </h2>
          <p className='mr-28 pt-3'>
            Desarrollador web front end con experiencia en diseño y desarrollo de aplicaciones web utilizando
            tecnologías front-end.
          </p>
        </div>
        <img className='h-72 mr-20' src="/imagenes/miPerfil.jpg" alt="miPerfil" />
      </div>

      {/* Body */}
      <div></div>

      {/* Footer */}
    </div>
  )
}

export default page