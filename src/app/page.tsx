/* eslint-disable @next/next/no-img-element */
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto'>
      {/* Header */}
      <div className='flex justify-between'>
        <div className='w-1/2 flex flex-col gap-y-5 pt-14'>
          <h1 className='text-6xl font-semibold'>
            Carlos A. Mendoza
          </h1>
          <h2 className='text-3xl'>
            Programador Wen Front-End &lt;/&gt;
          </h2>
          <p className='mr-28 pt-3 font'>
            Desarrollador web front end con experiencia en diseño y desarrollo de aplicaciones web utilizando
            tecnologías front-end.
          </p>
        </div>
        <img className='h-72 mr-20' src="/imagenes/miPerfil.jpg" alt="miPerfil" />
      </div>

      {/* Body */}
      <div>
        <h2 className='text-center mt-20 mb-14 text-2xl font-semibold'>
          ¿Qué me hace diferente?
        </h2>
        <div className='flex text-center'>
          <div className='w-1/3 flex flex-col gap-y-4 mx-4'>
            <img src="/imagenes/Proyectos.png" alt="project-img" className='h-20 mx-auto'/>
            <h3 className='font-medium'>
              Proyectos personales y portafolio
            </h3>
            <p className=' font-light'>
              Desarrollé varios proyectos front-end, incluyendo mi propia página web usando React.js y una aplicación web de lista 
              de tareas con HTML, CSS y JavaScript.
            </p>
          </div>
          <div className='w-1/3 flex flex-col gap-y-4 mx-4'>
            <img src="/imagenes/Conosimientos.png" alt="knowledge-img" className='h-20 mx-auto'/>
            <h3 className='font-medium'>
              Conocimientos y habilidades técnicas
            </h3>
            <p className=' font-light'>
              Experiencia en el desarrollo de interfaces interactivas utilizando React.js. Conocimiento básico de HTML5 y CSS3 para 
              estructurar y estilizar contenido. Uso efectivo de herramientas como Git y GitHub para el flujo de trabajo de desarrollo.
            </p>
          </div>
          <div className='w-1/3 flex flex-col gap-y-4 mx-4'>
            <img src="/imagenes/Formacion.png" alt="training-img" className='h-20 mx-auto'/>
            <h3 className='font-medium'>
              Formación académica y cursos
            </h3>
            <p className=' font-light'>
              Tengo desarrollo Web: Cursos en línea en EDteam. Estoy certificado en Introducción a React. 
              Plataforma de educación en línea.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div></div>
    </div>
  )
}

export default page