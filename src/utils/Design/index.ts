export const ReponsiveGridBreakPoint = (base = 1, md = 2, lg = 3, xl = 4) => {
  return {
    base: `repeat(${base},1fr)`,
    md: `repeat(${md},1fr)`,
    lg: `repeat(${lg},1fr)`,
    xl: `repeat(${xl},1fr)`,
  };
};
