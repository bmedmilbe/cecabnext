import { GolListAction } from "../../lib/services/gols";
import { PathnerAction } from "../../lib/services/pathner";
import { PostListAction } from "../../lib/services/posts";
import { TeamListAction } from "../../lib/services/teams";
import About from "../components/About";
import Banner from "../components/Banner";
import JoinNow from "../components/JoinNow";
import Medias from "../components/Medias";
import OurBlogSection from "../components/OurBlogSection";
import OurBlog from "../components/OurBlogSection";
import OurTeamSlider from "../components/OurTeamSlider";
import Partners from "../components/Partners";
import WhyChooseUs from "../components/WhyChooseUs";
import YearGols from "../components/YearGols";
import { sliderData } from "./../data/data";
export const revalidate = 300;
export default async function Home() {
  const posts = await PostListAction();
  const goals = await GolListAction();
  const pathners = await PathnerAction();
  const teams = await TeamListAction();
  const postsi = await PostListAction();
  return (
    <>
      <Banner slides={[...(posts.data?.results || []), ...sliderData]} />

      <About />
      <WhyChooseUs />
      <YearGols goals={[...(goals.data?.results || [])]} />
      <Partners pathners={[...(pathners.data?.results || [])]} />
      <JoinNow />
      <Medias />
      <OurTeamSlider teams={[...(teams.data?.results || [])]} />
      <OurBlogSection
        postsi={[...(postsi.data?.results || [])]}
        nextPage={postsi.data?.next || null}
      />
    </>
  );
}
