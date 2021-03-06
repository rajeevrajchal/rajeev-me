import Text from '@components/shared/Text';
import NextLink from '@components/shared/Link';

const Demo = () => (
  <div>
    <Text text="Hello World" variant="h1" />
    <Text text="Hello World" variant="h2" />
    <Text text="Hello World" variant="h3" />
    <Text text="Hello World" variant="h4" />
    <Text text="Hello World" variant="h5" />
    <Text text="Hello World" variant="h6" />
    <Text text="Hello World" variant="p" />
    <NextLink href="/about" label="About" />
  </div>
);

export default Demo;
