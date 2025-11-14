function App() {
  return (
    <>
      {/* SVG Filter Definitions */}
      <svg width="0" height="0" style={{ position: 'absolute', visibility: 'hidden' }}>
        <defs>
          <filter id="noiseFilter" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              baseFrequency="3.375"
              numOctaves="5"
              result="noise"
              seed="2"
            />
            <feColorMatrix
              in="noise"
              type="saturate"
              values="0"
              result="monoNoise"
            />
            <feComponentTransfer in="monoNoise" result="adjustedNoise">
              <feFuncA type="discrete" tableValues="0.375 0.5625 0.75 0.9375"/>
            </feComponentTransfer>
            <feBlend
              mode="multiply"
              in="SourceGraphic"
              in2="adjustedNoise"
              result="noiseBlend"
            />
          </filter>
        </defs>
      </svg>
      
      <div className="bg-svg-container">
        <img src="/bg.svg" alt="" className="bg-svg" />
      </div>
      <div className="app">
        <h1>Portfolio project setup complete.</h1>
        <p>Ready for UI development.</p>
      </div>
    </>
  )
}

export default App
