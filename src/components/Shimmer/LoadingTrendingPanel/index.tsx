import React from 'react';

import { Container } from './styles';
import Skeleton from '../../Skeleton';

const LoadingTrendingPanel: React.FC = () => {
    const Row = () => (
        <div className="row">
            <Skeleton className="square-skeleton white"></Skeleton>
            <div className="column">
                <Skeleton className="row-skeleton white"></Skeleton>
                <Skeleton className="row-skeleton white"></Skeleton>
                <Skeleton className="row-skeleton white"></Skeleton>
            </div>
        </div>
    );

  return (
      <Container>
          <Row/>
          <Row/>
          <Row/>
      </Container>
  )
}

export default LoadingTrendingPanel;