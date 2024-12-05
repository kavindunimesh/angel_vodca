import React, { ReactNode } from 'react';

const HoverAppendCenterOverlay = ({ children }: { children: ReactNode }) => {
  return (
    <div className='absolute left-0 top-0 flex size-full items-center justify-center bg-white opacity-0 transition-all ease-linear group-hover:opacity-90'>
      {children}
    </div>
  );
};

export default HoverAppendCenterOverlay;