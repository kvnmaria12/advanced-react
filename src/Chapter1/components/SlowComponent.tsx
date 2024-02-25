const SlowComponent = () => {
  const wait = (milliseconds: number) => {
    const start = new Date().getTime();

    while (new Date().getTime() - start < milliseconds) {
      // do nothing
    }
  };

  wait(1000); // wait for 5 seconds

  return <div>SlowComponent</div>;
};

export default SlowComponent;
