import React, { Fragment, ReactNode } from 'react';
import {  motion } from 'framer-motion';

type Props = {
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, x: -20 , y: -0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0 , y: 20 }
};

const PageLayout = ({ children }: Props): JSX.Element => (
<Fragment>
 <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ 
        type: 'linear',
        duration: .5,
      }}
    >
      {children}
    </motion.main>
  </Fragment>
   
);

export default PageLayout;
