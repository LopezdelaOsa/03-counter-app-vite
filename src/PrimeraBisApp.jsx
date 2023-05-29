//rafc

/*
export const PrimeraBisApp = (props) => {

    console.log(props)

  return ( <>
    <h1>{props.titulo}</h1>
    <p>Aqui el subtitulo</p>
  </> )
}*/
import PropTypes from 'prop-types'
// Desestructurado:
export const PrimeraBisApp = ({titulo, subTitulo, nombre}) => {
/*
    if (!titulo) {
        throw new Error('El titulo es obligatorio')
    }
*/
    //console.log(props)

  return ( <>
    <h1 data-testid="test-titulo">{titulo}</h1>
    <p>{subTitulo}</p>
    <p>{subTitulo}</p>
    <p>{nombre}</p>
  </> )
}


PrimeraBisApp.propTypes = {
    titulo: PropTypes.string.isRequired,
    subTitulo: PropTypes.string
}

PrimeraBisApp.defaultProps = {
  nombre: 'Raul Lopezosa',
  //titulo: 'No hay titulo',
  subTitulo: 'No aparece el subtitulo'
}