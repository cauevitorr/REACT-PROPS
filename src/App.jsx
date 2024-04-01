/* eslint-disable react/prop-types */

// Props
const Titulo = (props) => {
 return(
  <h1 style={{color: props.cor}}>{props.text}</h1>
 )
}

const Subtitulo = ({color, text}) => {
 return(
  <p style={{color: color}}>{text}</p>
 )
}

const Cabecalho = (props) => {
 return(
  <h1 style={{color: props.color}}>{props.children}</h1>
 )
}

const Header = () => {
 return(
  <>
  <Cabecalho>
   <p style={{color: "green"}}>Hello, World!</p>
  </Cabecalho>
  <Titulo cor="#FF0000" text = "1º título"/>
  <Subtitulo color="#0000FF" text="Subtítulo"/>
  </>
 )
}

export default Header;
