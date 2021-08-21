import React from 'react'


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}

const WindowAPI = () => {
    const [windowSize, setWindowSize] = React.useState<any>(getWindowDimensions())
    React.useEffect(() => {
        function handleResize() {
            setWindowSize(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
    }, [])

    return windowSize;
}







export default WindowAPI