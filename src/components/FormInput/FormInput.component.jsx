import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ title, inputOptions }) => {
  return (
    <Group>
      <Input {...inputOptions} />
      {title && (
        <FormInputLabel shrink={inputOptions.value.length}>
          {title}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
