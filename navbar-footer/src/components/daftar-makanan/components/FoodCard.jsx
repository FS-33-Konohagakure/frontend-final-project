import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FoodCard = ({ name, imgSrc, id }) => {
  return (
    <div className="bg-white p-5 rounded-3xl shadow-xl">
      <img
        src={imgSrc}
        alt={"Image " + name}
        className="w-[210px] h-[150px] rounded-3xl"
      />
      <p className="text-center p-2.5 text-lg font-semibold">{name}</p>
      <div className="text-right py-1.5">
        <Link
          to={`/makanan/${name}`}
          className="py-1.5 px-2.5 text-[10px] border border-green-theme inline rounded-xl"
        >
          View Detail
        </Link>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FoodCard;
