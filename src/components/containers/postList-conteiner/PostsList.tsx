import React, { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getPosts } from '../../../store/selectors/postSelector';
import PostsList from '../../PostsList/PostsList';
import Loading from '../../ui/Loading';

const PostsListContainer: FC = memo(() => {
  const posts = useSelector(getPosts);

  return (
    <div>
      ll
      {/* {posts ? <PostsList state={posts} /> : <Loading /> } */}
    </div>

  );
});

export default PostsListContainer;
PostsListContainer.displayName = 'PostsListContainer';
