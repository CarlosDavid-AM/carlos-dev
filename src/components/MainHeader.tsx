import Link from "next/link"

const MainHeader = (): JSX.Element => {
  return (
    <div className='container mx-auto'>
      <ol className='flex justify-between pt-3 pb-7'>
        <li ><Link href='/'>Carlos Dev</Link> </li>
        <div className='flex gap-x-5 items-center'>
          <li> <Link href='/about'>Sobre mi</Link> </li>
          <li> <Link href='/projects'>Proyectos</Link> </li>
          <li> <Link href='/contact'>Contacto</Link> </li>
          <li className='border rounded py-1 px-3 cursor-pointer'> 
            CV 
          </li>
        </div>
      </ol>
    </div>
  )
}

export default MainHeader