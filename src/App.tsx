import Content from './Chapter1/components/Content';
import DisplayContent from './Chapter1/components/DisplayContent';
import SlowComponent from './Chapter1/components/SlowComponent';

function App() {
  console.log('App gets re-rendered');

  return (
    <div>
      <DisplayContent />
      <SlowComponent />
      <Content />
    </div>
  );
}

export default App;
