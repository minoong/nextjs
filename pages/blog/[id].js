import { useRouter } from 'next/router';
import posts from '../../posts.json';

export default () => {
  const router = useRouter();
  const post = posts[router.query.id];

  if (!post) return null;

  return (
    <div>
      <h1>blog post</h1>
      <span>post id : {post.id}</span>
    </div>
  );
};
