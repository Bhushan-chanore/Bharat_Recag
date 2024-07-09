import loader from "../../../assets/loader.svg";

const Loader = () => {
  return (
    <div>
      <img
        src={loader}
        alt="loader"
        style={{ width: '22px', height: '22px' }}
      />
    </div>
  );
};

export default Loader;
