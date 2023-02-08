import { Link } from "react-router-dom";

const NotFound: React.FC = ({}) => {
  return (
    <div className="flex flex-col h-60 justify-around items-center">
      <div>
        <h1>We have not found the page you are looking for :( </h1>
      </div>
      <div>
        <Link to="/">
          <button className="text-white">{`<-- Wish to Continue shopping`}</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
