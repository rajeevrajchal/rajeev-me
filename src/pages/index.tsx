import Footer from '@components/Footer';
import Nav, { NavLink } from '@components/Nav';
import SEOHead from '@components/SeoHead';
import Spacer from '@components/Spacer';
import { useColorMode } from '@hooks/UseColorMode';
import ArticleMenu from 'module/home/ArticleMenu';
import Hero from 'module/home/Hero';
import Projects from 'module/home/Projects';

export default function Home() {
  const { htmlLyout, colorMode } = useColorMode();

  const menu: NavLink[] = [
    {
      label: 'Articles',
      link: '/articles',
      type: 'link',
    },
    {
      label: 'My Journey',
      link: '/my-journey',
      type: 'link',
    },
    {
      label: 'Works',
      link: '/works',
      type: 'link',
    },
    {
      label: 'Contact',
      link: '/contact',
      type: 'button',
    },
  ];

  return (
    <div data-theme={colorMode} className="h-full w-full relative">
      {/* page head */}
      <SEOHead />
      {/* items */}
      <Nav menu={menu} customContent={htmlLyout} colorMode={colorMode} />
      <div className="px-8 lg:px-96 h-screen w-full pt-28 overflow-y-scroll">
        <Hero />
        <Spacer />
        <ArticleMenu />
        <Spacer />
        <Projects />
        <Spacer />
        <Footer />
      </div>
    </div>
  );
}
