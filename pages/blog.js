import Link from 'next/link';
import posts from '../posts.json';

const Blog = () => {
  console.log('@@@@@@@', posts);
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {Object.entries(posts).map((v, i) => {
          return (
            <li key={i}>
              <Link href="/blog/[id]" as={'/blog/' + v[0]}>
                <a>{v[1].id}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Blog;
