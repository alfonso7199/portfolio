import React from 'react';

export const CornerDecorations: React.FC = () => {
  return (
    <>
      {/* Top-left corner */}
      <div className="fixed top-8 left-8 pointer-events-none">
        <div className="w-[300px] h-[2px] bg-current dark:opacity-20 opacity-30"></div>
        <div className="w-[2px] h-[300px] bg-current dark:opacity-20 opacity-30"></div>
      </div>
      
      {/* Bottom-right corner */}
      <div className="fixed bottom-8 right-8 pointer-events-none">
        <div className="w-[300px] h-[2px] bg-current dark:opacity-20 opacity-30 absolute bottom-0 right-0"></div>
        <div className="w-[2px] h-[300px] bg-current dark:opacity-20 opacity-30 absolute bottom-0 right-0"></div>
      </div>
    </>
  );
};