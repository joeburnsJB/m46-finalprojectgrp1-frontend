import './Toggle.css';

const Toggle = ({ onToggle, isFlipped, setIsFlipped }) => {
  const handleToggle = () => {
    setIsFlipped(!isFlipped);
    onToggle && onToggle(!isFlipped);
  };

  return (
    <div>
      <input type="checkbox" id="toggle" checked={isFlipped} onChange={handleToggle} />
      <label htmlFor="toggle"></label>
    </div>
  );
};

export default Toggle;