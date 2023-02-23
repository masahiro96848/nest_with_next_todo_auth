type Props = JSX.IntrinsicElements['textarea'];

export const TextArea = ({ disabled = false, value, placeholder, onChange }: Props) => {
    return (
        <textarea
            disabled={disabled}
            className="textarea"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};
