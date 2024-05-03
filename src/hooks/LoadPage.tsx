import React, { useEffect, useState } from 'react'

function LoadPage(_page: any) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setIsLoading(false), 3000);
    }, []);
  
    if (isLoading) {
        return _page
      }
}

export default LoadPage
