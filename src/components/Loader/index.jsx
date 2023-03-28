import loading from '../../assets/gifs/loading.gif'


function Loader(props) {
  return (
    <span className={`text-center ${props.className}`}>
      <img src={loading} alt='loading results' height={props.height}/>
    </span>
  )
}

export default Loader
