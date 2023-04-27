
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

function Loader() {
  let color = '#ffffff';

return (
  <div
    className="sweet-loading"
    style={{
      position: 'absolute',
      top: '10%',
      left: '50%',
    }}
  >
    <ClipLoader
      color={color}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
);
}

export default Loader;
