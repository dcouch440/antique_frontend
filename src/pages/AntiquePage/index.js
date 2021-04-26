import React from 'react';
import * as styles from './styles';
import Loading from '../../Framer/Loading';
import Antique from './AntiqueInfo';
import { useParams , withRouter} from 'react-router-dom';
import PageTransition from '../../Framer/PageTransition';
import * as variants from './variants';
import { motion } from 'framer-motion';

const AntiquePage = ({antique, ...props}) => {
  const { id } = useParams();
  console.log(props)
  const [loading, setLoading] = React.useState(true);

  const handleClick = () => {
    props.history.push('/antiques');
  }


  setTimeout(() => {
    // API CALL
    setLoading(false);
  }, 1000)


  return (
    <PageTransition>
      <styles.Page>
        <Loading
          loadingState={loading}
          render={
            <>
              <styles.GoBackButton
                variants={variants.fromRightSide}
                initial="hidden"
                animate="visible"
                timing="timing"
                transition="transition"
                exit="exit"
                as={motion.button}
                onClick={handleClick}
              >
                Go Back
              </styles.GoBackButton>
              <Antique antique={antique[id]} />
            </>
          }
        />
      </styles.Page>
    </PageTransition>
  )

}

export default withRouter(AntiquePage)