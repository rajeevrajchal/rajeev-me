/* eslint-disable react/require-default-props */
import classNames from 'classnames';

interface AvatarProps {
  src: string;
  alt: string;
  width?: string;
  customClass?: string;
  imageClass?: string;
}

const Avatar = (props: AvatarProps) => {
  const { src, alt, width = 'w-16', customClass, imageClass } = props;
  return (
    <div className={classNames('avatar', customClass)}>
      <div className={classNames('mask mask-squircle', width, imageClass)}>
        <img src={src} alt={alt} className={imageClass} />
      </div>
    </div>
  );
};

export default Avatar;
