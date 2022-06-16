/* eslint-disable react/require-default-props */
import Head from 'next/head';

type SEOHeadProps = {
  title?: string;
  description?: string;
};
const SEOHead = (props: SEOHeadProps) => {
  const { title, description } = props;
  const mixedTitle = ` ${title || 'Home'} | Rajeev Rajchal`;
  return (
    <Head>
      <title>{mixedTitle}</title>
      <meta name="description" content={description || 'Software Developer'} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEOHead;
