export function getInputValue(input: HTMLInputElement) {
  if (input.type === 'number') {
    return parseFloat(input.value);
  }

  return input.value;
}

export function serialize(form: HTMLFormElement) {
  const inputs = form.querySelectorAll<HTMLInputElement>(
    'input,select,textarea'
  );
  return Array.from(inputs).reduce((acc, input: HTMLInputElement) => {
    return {
      ...acc,
      [input.name]: getInputValue(input),
    };
  }, {});
}
