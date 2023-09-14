import PropTypes from 'prop-types'

const SingleCard = ({ cardSingleData,handleSelect }) => {
  const {
    actor_name,
    actor_photo,
    description,
    salary,
    designation,
  } = cardSingleData
  return (
    <div>
      <div className="card shadow-xl">
        <figure className="px-5 pt-8">
          <img
            src={actor_photo}
            alt="Not found"
            className="rounded-full h-52 w-52"
          />
        </figure>
        <div className="card-body space-y-3">
          <h2 className="card-title">{actor_name}</h2>
          <p>{description.substring(0, 50)}</p>
          <div className="flex justify-between gap-2 md:gap-0">
            <h3>Salary: {salary}</h3>
            <h3>{ designation}</h3>
          </div>
          <div className="card-actions grid justify-center">
            <button className="btn btn-primary" onClick={()=>handleSelect(cardSingleData)}>Select</button>
          </div>
        </div>
      </div>
    </div>
  )
}
SingleCard.propTypes = {
  cardSingleData: PropTypes.object.isRequired,
  handleSelect: PropTypes.func
}
export default SingleCard
