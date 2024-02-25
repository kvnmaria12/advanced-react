import useResizer from '../hooks/useResizer';
import Button from './Button';

const DisplayContent = () => {
  const { isOpen, onOpen, onClose } = useResizer();

  return (
    <div>
      <Button onClick={onOpen}>Click Me</Button>
      {isOpen ? <h1>Button Clicked</h1> : <h1>Button not clicked</h1>}
    </div>
  );
};

export default DisplayContent;
