import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService
      .getPosts()
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .catch((err) => console.log("error in allPost ::", err));
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full h-dvh mt-1 py-8 text-center">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="p-2">
              <h1 className="text-4xl font-bold hover:text-gray-500 font-serif">
                Welcome to BlogSphere
              </h1>
              <p className="text-lg font-semibold mt-4 ">
                Transform your memories into digital treasures. Capture, create,
                and cherish every moment, beautifully preserved.
              </p>
            </div>
            <div className="p-2 mt-2 ">
              <img
                className="cam object-bottom-center"
                src="/news.png"
                alt="camera"
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
