import React from 'react';

import FeedShare from './FeedShare';
import LoadingFeedShare from '../Shimmer/LoadingFeedShare';
import FeedPost from './FeedPost';
import LoadFeedPost from '../Shimmer/LoadFeedPost';

import { Container } from './styles';

const MiddleColumn: React.FC <LoadingProps>= ({isLoading}) => {
  return (
    <Container className="middle-column">
      {isLoading?
        (
          <>
            <LoadingFeedShare/>
            <LoadFeedPost/>
            <LoadFeedPost/>
            <LoadFeedPost/>
            <LoadFeedPost/>
          </>
        ):
        (
          <>
            <FeedShare />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
          </>
        )}
    </Container>
  );
};

export default MiddleColumn;
