/* eslint-disable react/jsx-wrap-multilines */
import Button from '@components/Button';
import { MessageSquare } from 'react-feather';

const HomeRequest = () => (
  <div className="bg-base-300 rounded-md px-8 py-16 flex flex-col items-center justify-center gap-8">
    <h1 className="text-3xl font-bold">What are you working on?</h1>
    <p className="w-full lg:w-2/4 text-center">
      Let’s have a conversation! I’d love to hear about what you’re working on
      and find a way to work together.
    </p>
    <Button
      variant="success"
      className="btn btn-success"
      label={
        <div className="flex items-center gap-2">
          <MessageSquare />
          <span>Chat</span>
        </div>
      }
    />
  </div>
);

export default HomeRequest;
