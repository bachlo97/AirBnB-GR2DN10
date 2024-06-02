export const getNumColumns = () => {
    const width = window.innerWidth;
    if (width >= 1200) return 4;
    if (width >=1024) return 3;
    if (width >= 768) return 2;
    return 1;
  };

