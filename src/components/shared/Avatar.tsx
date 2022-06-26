/* eslint-disable react/require-default-props */
import classNames from 'classnames';

interface AvatarProps {
  src: string;
  alt: string;
  width?: string;
  customClass?: string;
  imageClass?: string;
  title?: string;
}

const Avatar = (props: AvatarProps) => {
  const { src, alt, width = 'w-16', customClass, imageClass, title } = props;
  return (
    <div
      className={classNames('avatar online', customClass)}
      title={title || 'Happy to see you there.! 🤗'}
    >
      <div
        className={classNames(
          `mask mask-hexagon bg-gray-600 w-16 md:${width}`,
          imageClass
        )}
      >
        <img src={src} alt={alt} className={imageClass} />
      </div>
    </div>
  );
};

export default Avatar;
