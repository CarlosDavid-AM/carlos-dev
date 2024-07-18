import Link from "next/link"

const MainHeader = (): JSX.Element => {
  return (
    <div className='container mx-auto'>
      <ol className='flex items-center justify-center gap-x-4 lg:gap-x-0 lg:justify-between pt-3 pb-7 text-sm lg:text-base'>
        <li ><Link href='/'>Carlos Dev</Link> </li>
        <div className='flex gap-x-5 items-center'>
          <li> <Link href='/about'>Sobre mi</Link> </li>
          <li> <Link href='/projects'>Proyectos</Link> </li>
          <li> <Link href='/contact'>Contacto</Link> </li>
          <li className='border rounded py-1 px-3 cursor-pointer hover:bg-slate-900'> 
            <a href='https://drive.google.com/file/d/1Cg6IhhLK-UkwmNI1YN5twes71pHZKAlO/view' target='_blank'>
              CV
            </a> 
          </li>
        </div>
      </ol>
    </div>
  )
}

export default MainHeader