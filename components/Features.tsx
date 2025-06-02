import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const FAQS = [
  {
  question: '¿Es seguro usar Wi-Fi público mientras viajo?',
  answer: 'No se recomienda conectarse a redes Wi-Fi públicas sin una VPN, ya que pueden ser utilizadas por ciberdelincuentes para interceptar tus datos.',
},
{
  question: '¿Debo compartir una foto de mi DNI o pasaporte al reservar?',
  answer: 'Solo debes compartir documentos oficiales con plataformas confiables y seguras; verifica que el sitio tenga HTTPS y buena reputación.',
},
{
  question: '¿Cómo puedo proteger mis datos personales al reservar en línea?',
  answer: 'Utiliza contraseñas fuertes, activa la autenticación en dos pasos y evita introducir datos en sitios no verificados.',
},
{
  question: '¿Qué hago si sospecho que una web de reservas es falsa?',
  answer: 'No realices ninguna compra, evita ingresar información personal y repórtala a las autoridades correspondientes o a tu banco si ya diste datos.',
},
{
  question: '¿Es recomendable usar una tarjeta virtual al reservar?',
  answer: 'Sí, usar tarjetas virtuales reduce el riesgo de fraude porque están diseñadas para uso temporal y tienen límites de gasto.',
},
{
  question: '¿Cómo sé si una app de viajes es segura?',
  answer: 'Revisa las valoraciones, los permisos que solicita, la política de privacidad y si ha sido verificada por la tienda oficial de aplicaciones.',
}
]

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-container mt-32 px-4 lg:px-0">
        <h2 className="bold-40 lg:bold-64 text-center mb-16">Recomendaciones A Nivel Ciberseguridad para Cuando Viajes</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white/90 p-6 rounded-2xl shadow-md">
              <h3 className="bold-20 mb-4">{faq.question}</h3>
              <p className="regular-16 text-gray-30">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">{description}</p>
    </li>
  )
}

export default Features
