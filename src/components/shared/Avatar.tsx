/* eslint-disable react/require-default-props */
import classNames from 'classnames';

interface AvatarProps {
  src: string;
  alt: string;
  width?: string;
  customClass?: string;
}

const Avatar = (props: AvatarProps) => {
  const { src, alt, width = 'w-16', customClass } = props;
  return (
    <div className={classNames('avatar', customClass)}>
      <div className={classNames('mask mask-squircle', width)}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Avatar;
