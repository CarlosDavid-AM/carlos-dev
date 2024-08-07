/* eslint-disable @next/next/no-img-element */
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto'>
      {/* Header */}
      <div className='flex flex-col lg:flex-row justify-between'>
        <div className='lg:w-1/2 text-center lg:text-start flex flex-col gap-y-5 pt-14'>
          <h1 className='text-4xl lg:text-6xl font-semibold'>
            Carlos A. Mendoza
          </h1>
          <h2 className='text-2xl lg:text-3xl'>
            Programador Web Full-Stack &lt;/&gt;
          </h2>
          <p className='lg:mr-28 pt-3'>
          Desarrollador Web Full Stack con experiencia en el diseño y desarrollo de aplicaciones web. 
          </p>
        </div>
        <img className=' h-60 w-48 mx-auto lg:mx-0 lg:h-72 lg:w-56 lg:mr-20' src="/imagenes/miPerfil.jpg" alt="miPerfil" />
      </div>

      {/* Body */}
      <div>
        <h2 className='text-center mt-20 mb-14 text-2xl font-semibold'>
          ¿Qué me hace diferente?
        </h2>
        <div className='flex flex-col gap-y-12 lg:gap-y-0 lg:flex-row text-center'>
          <div className='lg:w-1/3 flex flex-col gap-y-4 mx-4'>
            <img src="/imagenes/Proyectos.png" alt="project-img" className='h-20 mx-auto'/>
            <h3 className='font-medium'>
              Proyectos personales y portafolio
            </h3>
            <p className=' font-light'>
              He desarrollado proyectos full stack, incluyendo una página web personal 
              utilizando Next.js y una aplicación de lista de tareas con Node.js, Prisma ORM, HTML, CSS 
              y JavaScript. <br /> Estos proyectos destacan mi capacidad para manejar tanto el front-end como 
              el back-end de manera efectiva.
            </p>
          </div>
          <div className='lg:w-1/3 flex flex-col gap-y-4 mx-4'>
            <img src="/imagenes/Conosimientos.png" alt="knowledge-img" className='h-20 mx-auto'/>
            <h3 className='font-medium'>
              Conocimientos y habilidades técnicas
            </h3>
            <ol className=' font-light'>
              <li>Experiencia en el desarrollo de interfaces interactivas con React.js.</li>
                <br />
              <li>Competente en el desarrollo full stack con Next.js, Node.js y Prisma ORM.</li>
                <br />
              <li>Uso eficiente de herramientas de control de versiones como Git y GitHub para la gestión del flujo de trabajo de desarrollo.</li>
            </ol>
          </div>
          <div className='lg:w-1/3 flex flex-col gap-y-4 mx-4'>
            <img src="/imagenes/Formacion.png" alt="training-img" className='h-20 mx-auto'/>
            <h3 className='font-medium'>
              Formación académica y cursos
            </h3>
            <ol className=' font-light'>
              <li>Cursos en línea de desarrollo web en diversas plataformas educativas.</li>
                <br />
              <li>Certificación en Introducción a React y en tecnologías relacionadas con el desarrollo full stack a través de plataformas de educación en línea.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>
        <img className='mx-auto my-8 h-52 lg:h-80 rounded-xl shadow-black shadow' src="/imagenes/user.jpg" alt="Carlos David" />
      </div>
    </div>
  )
}

export default page