/* eslint-disable @next/next/no-img-element */
const about = () => {
  return (
    <div className="container mx-auto">
      <h2 className='text-3xl mt-28 mb-10'>
        SOBRE MI
      </h2>
      <div className='flex justify-between font-light'>
        <div className='w-1/2'>
          <p className='pt-14'>
            Como aspirante a desarrollador web front-end, estoy emocionado de iniciar mi carrera profesional y contribuir con mi 
            pasión por la creación de experiencias digitales excepcionales. Mi formación y proyectos personales me han brindado sólidos 
            conocimientos en HTML, CSS, JavaScript, React, TailwindCSS y TypeScript.
          </p>
          <p className='pt-12'>
            Estoy comprometido con el aprendizaje continuo y seguiré explorando nuevas tecnologías y mejores prácticas para mejorar mis 
            habilidades. Estoy entusiasmado por ser parte de un equipo dinámico y seguir creciendo como profesional. 
          </p>
        </div>
        <img className='h-80' src="/imagenes/miPerfil.jpg" alt="miPerfil" />
      </div>
    </div>
  )
}

export default about