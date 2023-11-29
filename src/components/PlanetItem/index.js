// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  console.log(planetDetails)
  const {name, imageUrl, description} = planetDetails
  return (
    <div className="planet-container">
      <img src={imageUrl} className="planet-image" alt={`Planet ${name}`} />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
