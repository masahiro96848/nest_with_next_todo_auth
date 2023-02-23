type Props = JSX.IntrinsicElements['button'];

export const CommonButton = ({ type, title, onClick }: Props) => {
  return (
    <button className="submit-button" type={type} onClick={onClick}>
      {title}
    </button>
  );
};
