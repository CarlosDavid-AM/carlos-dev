/* eslint-disable @next/next/no-img-element */
const about = () => {
  return (
    <div className="container mx-auto text-center lg:text-start">
      {/* Body 1 */}
      <h2 className='text-3xl  mt-8 mb-6'>
        SOBRE MI
      </h2>
      <div className='flex flex-col lg:flex-row justify-between font-light'>
        <div className='lg:w-1/2'>
          <p className='pt-14 mx-6 lg:mx-0'>
            Como aspirante a desarrollador web front-end, estoy emocionado de iniciar mi carrera profesional y contribuir con mi 
            pasión por la creación de experiencias digitales excepcionales. Mi formación y proyectos personales me han brindado sólidos 
            conocimientos en HTML, CSS, JavaScript, React, TailwindCSS y TypeScript.
          </p>
          <p className='pt-12 mx-6 lg:mx-0'>
            Estoy comprometido con el aprendizaje continuo y seguiré explorando nuevas tecnologías y mejores prácticas para mejorar mis 
            habilidades. Estoy entusiasmado por ser parte de un equipo dinámico y seguir creciendo como profesional. 
          </p>
        </div>
        <img className='mx-auto lg:mx-0 h-56 lg:h-80' src="/imagenes/miPerfil.jpg" alt="miPerfil" />
      </div>

      {/* Body 2 Responsive Design */}
      <div className='lg:hidden'>
        <div className='flex flex-col lg:flex-row mt-16 gap-x-24 mb-8'>
          <div className='lg:w-1/2'>
            <h3 className='text-2xl pb-8'>
              HABILIDADES
            </h3>
            <div className='bg-gray-850 p-4 h-96'>
              <div className='flex justify-center gap-x-16 pt-7'>
                <div>
                  <div>
                    <img className='h-16 mx-auto' src="/imagenes/svg/html.svg" alt="html" />
                    <h4>HTML</h4>
                  </div>
                  <div className='pt-14'>
                    <img className='h-16 mx-auto' src="/imagenes/svg/javascript.svg" alt="javascript" />
                    <h4>JavaScript</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img className='h-16 mx-auto' src="/imagenes/svg/css.svg" alt="css" />
                    <h4>CSS</h4>
                  </div>
                  <div className='pt-14'>
                    <img className='h-16 mx-auto' src="/imagenes/svg/typescript.svg" alt="typescript" />
                    <h4>TypeScript</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img className='h-16 mx-auto' src="/imagenes/svg/tailwind_css.svg" alt="tailwind_css" />
                    <h4>Tailwind CSS</h4>
                  </div>
                  <div className='pt-7'>
                    <img className='h-16 mx-auto' src="/imagenes/svg/react.svg" alt="react" />
                    <h4>React</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:w-1/2'>
            <h3 className='text-2xl pb-8 pt-16 lg:pt-0'>
              ESTUDIANDO
            </h3>
            <div className='bg-gray-850 p-4 h-96'>
              <div className='flex justify-center gap-x-16 pt-7'>
                <div>
                  <img className='h-16 mx-auto' src="/imagenes/svg/node-js.svg" alt="node-js" />
                  <h4>NodeJs</h4>
                </div>
                <div>
                  <img className='h-16 mx-auto' src="/imagenes/svg/nextjs.svg" alt="nextjs" />
                  <h4>NextJs</h4>
                </div>
                <div>
                  <img className='h-16 mx-auto' src="/imagenes/svg/prisma.svg" alt="prisma" />
                  <h4>Prisma ORM</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Body 2 Desktop */}
      <div className='hidden lg:block'>
        <div className='flex flex-col lg:flex-row justify-between mt-16 gap-x-24 mb-8'>
          <div className='lg:w-1/2'>
            <h3 className='text-2xl pb-8'>
              HABILIDADES
            </h3>
            <div className='bg-gray-850 p-4 h-96'>
              <div className='flex text-center gap-x-20 pt-7'>
                <div>
                  <img className='h-16 mx-auto' src="/imagenes/svg/html.svg" alt="html" />
                  <h4>HTML</h4>
                </div>
                <div>
                  <img className='h-16 mx-auto' src="/imagenes/svg/css.svg" alt="css" />
                  <h4>CSS</h4>
                </div>
                <div>
                  <img className='h-16 mx-auto' src="/imagenes/svg/tailwind_css.svg" alt="tailwind_css" />
                  <h4>Tailwind CSS</h4>
                </div>
                <div>
                  <img className='h-16 mx-auto' src="/imagenes/svg/javascript.svg" alt="javascript" />
                  <h4>JavaScript</h4>
                </div>
              </div>
              <div className='flex text-center gap-x-16 pt-24'>
                <div>
                  <img className='h-16 mx-auto' src="/imagenes/svg/typescript.svg" alt="typescript" />
                  <h4>TypeScript</h4>
                </div>
                <div>
                  <img className='h-16 mx-auto' src="/imagenes/svg/react.svg" alt="react" />
                  <h4>React</h4>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:w-1/2'>
            <h3 className='text-2xl pb-8'>
              ESTUDIANDO
            </h3>
            <div className='bg-gray-850 p-4 h-96'>
              <div className='flex gap-x-20 pt-7'>
                <div>
                  <img className='h-16 mx-auto' src="/imagenes/svg/node-js.svg" alt="node-js" />
                  <h4>NodeJs</h4>
                </div>
                <div>
                  <img className='h-16 mx-auto' src="/imagenes/svg/nextjs.svg" alt="nextjs" />
                  <h4>NextJs</h4>
                </div>
                <div>
                  <img className='h-16 mx-auto' src="/imagenes/svg/prisma.svg" alt="prisma" />
                  <h4>Prisma ORM</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about