import './Services.css'
import { arrayServices } from '../../../../Array'

export const Services = () => {
    return (
    <>
      <div className="Services">
        <fieldset className='Container__Services'>
            <section className='Section_Services Hand-Services'>
              <h2>Servicios de Manicura</h2>
            {arrayServices.map ((service, id) => (
            <div className="target" key={id}>
            <div className="Hand Hand__Title" ><h3>{service.titulo}</h3></div>
            <div className="Hand Hand__Description"><p>- {service.descripcion}</p></div>
            <div className="Hand Note"><span><b>Nota</b> {service.nota}</span></div>
            </div>
            ))}
            </section>
        
          <section className='Section_Services Foot-Services'></section>
          <section className='Section_Services Hair-Services'></section>
        </fieldset>
      </div>
    </>
  )
}
