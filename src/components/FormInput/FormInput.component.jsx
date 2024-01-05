import "./form-input.styles.scss";

const FormInput = (props) => {
  const { title, inputOptions } = props;
  return (
    <div className="group">
      <input className="form-input" {...inputOptions} />
      {title && (
        <label
          className={`${
            inputOptions.value.length && "shrink"
          } form-input-label`}
        >
          {title}
        </label>
      )}
    </div>
  );
};

export default FormInput;
