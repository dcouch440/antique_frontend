import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { variants as transition } from './variants';
import { Context } from '../../Context';
import { Container } from './styles';


const PageTransition = ({attr, transitionTime, ...props}) => {
  const { setInTransition } = useContext(Context);

  useEffect(() => {

    const transitioning = setTimeout(
      () => {
        setInTransition(false);
      }, (transitionTime * 1000)
    );

    return () => clearTimeout(transitioning);

  }, [setInTransition, transitionTime]);


  return (
    <Container as={motion.div}
      variants={transition({attr, transitionTime})}
      initial="hidden"
      animate="visible"
      timing="timing"
      transition="transition"
      exit="exit"
    >
      {props.children}
    </Container>
  );
};

PageTransition.defaultProps = {
  attr: {
    direction: 'right'
  },
  transitionTime: 2
};

export default PageTransition;