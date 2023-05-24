import Layout from "../components/layout";
import PostList from "../components/postList";

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// };
// export async function getStaticProp({post, params: {context, slug: string }}) {
//   const postId = context.params.slug;
//   if (!post) return { redirect: "/posts", permanent: false }; // redirect to main blog posts page if post doesn't exist, or any other page you want
// };

// TODO: delete all tags code
export default function Articles({ posts }) {
  const title = `Articles`;
  return (
    <Layout title={title} description="A list of every article I've written.">
      <h1>{title}</h1>
      <main>
        <p className="articles-intro">Here's a chronological list of all the posts on this website.
        </p>
        <PostList item={posts} showYears={true} />
      </main>
      <style jsx>{`
        .articles-intro {
          padding-bottom: 24px;
        }
      `}</style>
    </Layout>
  );
}
