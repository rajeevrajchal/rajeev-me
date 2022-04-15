/* eslint-disable react/require-default-props */
import classNames from 'classnames';

interface AvatarProps {
  src: string;
  alt: string;
  width?: string;
}

const Avatar = (props: AvatarProps) => {
  const { src, alt, width = 'w-14' } = props;
  return (
    <div className="avatar">
      <div className={classNames('mask mask-squircle', width)}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Avatar;
