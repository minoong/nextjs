import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>hello</h1>
      <Link href="/blog">
        <a>blog</a>
      </Link>
    </div>
  );
};

export default Index;
