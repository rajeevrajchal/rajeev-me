import SEOHead from '@components/SeoHead';
import Spacer from '@components/Spacer';
import LandingLayout from 'layouts/LandingLayout';
import ArticleMenu from 'module/home/ArticleMenu';
import Hero from 'module/home/Hero';
import HomeRequest from 'module/home/HomeRequest';
import Projects from 'module/home/Projects';

export default function Home() {
  return (
    <LandingLayout>
      <>
        <SEOHead />
        <>
          <Hero />
          <Spacer />
          <ArticleMenu />
          <Spacer />
          <Projects />
          <Spacer />
          <HomeRequest />
        </>
      </>
    </LandingLayout>
  );
}
