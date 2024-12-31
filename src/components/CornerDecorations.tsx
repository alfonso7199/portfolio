import React from 'react';

export const CornerDecorations: React.FC = () => {
  return (
    <>
      {/* Top-left corner */}
      <div className="fixed top-8 left-8 pointer-events-none">
        <div className="w-[200px] md:w-[400px] h-[2px] bg-current dark:opacity-40 opacity-70"></div>
        <div className="w-[2px] h-[200px] md:h-[400px] bg-current dark:opacity-40 opacity-70"></div>
      </div>
      
      {/* Bottom-right corner */}
      <div className="fixed bottom-8 right-8 pointer-events-none">
        <div className="w-[200px] md:w-[400px] h-[2px] bg-current dark:opacity-40 opacity-70 absolute bottom-0 right-0"></div>
        <div className="w-[2px] h-[200px] md:h-[400px] bg-current dark:opacity-40 opacity-70 absolute bottom-0 right-0"></div>
      </div>
    </>
  );
};