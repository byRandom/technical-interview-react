import React, { useEffect, useLayoutEffect, useState } from 'react'

const App = () => {

  const CAT_ENDPOIT_IMAGE_API = "https://cataas.com/cat/says/"
  const CAT_ENDPOIT_RANDOM_FACT_API = "https://catfact.ninja/fact"

  const [fact, setFact] = useState('cat facts are awesome')
  const [firstWord, setFirstWord] = useState('');
  const [catImage, setCatImage] = useState('');
  
  useEffect(() => {
    fetch(CAT_ENDPOIT_RANDOM_FACT_API)
      .then((res) => res.json()
      .then((factData) => {
        const factPhrase = factData.fact;
        setFact(factPhrase);
        let tempWord = factPhrase.split(' ', 3).join(' ');
        setFirstWord(tempWord);
        setCatImage(CAT_ENDPOIT_IMAGE_API + tempWord)
      })
    )

  }, []);

  return (
    <main>
      <h1>Cats App</h1>
      {fact && <p>{fact}</p>}
      {catImage && <img src={catImage} alt={`Cat image with  ${firstWord} written`} width="500px"/>}
    </main>
  )
}

export default App