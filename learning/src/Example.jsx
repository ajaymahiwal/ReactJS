import { useEffect, useState } from 'react';

const ExampleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      console.log('Component will unmount or dependency changed, cleanup here');
      // Perform cleanup tasks, such as canceling subscriptions
    };


  }, []); // Empty dependency array means the effect runs only once after the initial render

  return (
        <div>
            {data ? <h2>Joke Type:{data.type} <br /> {data.setup} <br /> {data.punchline}</h2> : <p>Loading...</p>}
        </div>
    );
};

export default ExampleComponent;
