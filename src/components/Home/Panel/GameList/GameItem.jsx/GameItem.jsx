import './GameItem.css'

export const GameItem = ({ name, image }) => {
  return (
    <div className="gameItem">
      <p>{ name }</p>
      <i className='bx bx-plus'></i>
    </div>
  );
};
