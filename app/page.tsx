import { Suspense } from "react";
import HomePosts from "./components/HomePosts";

export default function Home() {
  return (
    <Suspense fallback={`...loading`}>
      <HomePosts />
    </Suspense>
  );
}
