/* eslint-disable @next/next/no-img-element */
const contact = () => {
  return (
    <div className='mt-8 items-center justify-center'>
      <div className='container mx-auto text-center p-5'>
        <h2 className='text-3xl mt-10'>
          Contáctame en:
        </h2>
        <div className='mt-5'>
          <div className='mb-4'>
            <span className='font-bold'>
              Teléfono
            </span>
            <div className='flex items-center justify-center p-2'>
              <img src='/imagenes/contact/telefono.png' alt='teléfono' className='mr-2 h-10 w-10' />
              <a href='tel:933376104' target='_blank' className='text-blue-500'>
                +51 933 376 104
              </a>
            </div>
          </div>
          <div className='mb-4'>
            <span className='font-bold'>
              Correo Electrónico
            </span>
            <div className='flex items-center justify-center p-2'>
              <img src='/imagenes/contact/gmail.png' alt='correo' className='mr-2 h-10 w-10' />
              <a href='mailto:apolayamendozacarlos@gmail.com' target='_blank' className='text-blue-500'>
                apolayamendozacarlos@gmail.com
              </a>
            </div>
          </div>
        </div>

        <h3 className='text-xl mt-5'>
          Redes sociales
        </h3>
        <div className='flex justify-center mt-3 gap-x-9'>
          <a href='https://www.facebook.com/david.apolaya.526/' target='_blank'>
            <img src='/imagenes/contact/facebook.svg' alt='facebook' className='h-10 w-10' />
          </a>
          <a href='tel:933376104'>
            <img src='/imagenes/contact/whatsapp.svg' alt='Whatsapp' className='h-10 w-10' />
          </a>
          <a href='https://www.linkedin.com/in/carlosdavidfront-end' target='_blank'>
            <img src='/imagenes/contact/linkedin.svg' alt='Linkedin' className='h-10 w-10' />
          </a>
        </div>
      </div>
    </div>

  )
}

export default contact