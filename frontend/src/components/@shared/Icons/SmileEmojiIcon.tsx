const SmileEmojiIcon = ({ color = '#fff', width = '32px', height = '32px' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill={color}
      width={width}
      height={height}
      aria-labelledby="smile-emoji-icon-title"
    >
      <title id="smile-emoji-icon-title">웃는 얼굴</title>
      <path d="M16,2A14,14,0,0,1,30,16a13.71,13.71,0,0,1-.07,1.38v.06a13.74,13.74,0,0,1-3.72,8.15,14,14,0,0,1-20.4,0A14,14,0,0,1,2,16,14,14,0,0,1,16,2m0-2A16,16,0,0,0,0,16c0,.53,0,1.06.08,1.58A16,16,0,0,0,27.66,27a15.91,15.91,0,0,0,4.26-9.38s0,0,0,0c0-.52.08-1,.08-1.57A16,16,0,0,0,16,0Z" />
      <ellipse cx="9" cy="14" rx="2" ry="3" />
      <ellipse cx="23" cy="14" rx="2" ry="3" />
      <path d="M16,25.5c-3.8,0-7.13-1.95-7.53-4.5a.49.49,0,0,1,.41-.57.49.49,0,0,1,.57.41c.35,2.14,3.57,3.81,7,3.65,3.12-.15,5.7-1.71,6-3.64a.5.5,0,0,1,.56-.42.49.49,0,0,1,.42.57c-.36,2.43-3.28,4.32-6.93,4.49Z" />{' '}
    </svg>
  );
};

export default SmileEmojiIcon;
