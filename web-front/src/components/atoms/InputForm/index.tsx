type Props = JSX.IntrinsicElements['input'];

export const InputForm = ({ disabled = false, value, placeholder, onChange, onKeyDown }: Props) => {
    return (
        <input
            disabled={disabled}
            className="input-area"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
};
