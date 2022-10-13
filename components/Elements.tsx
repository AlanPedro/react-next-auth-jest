const config = {
  themeRef: "test",
};

const { default: FormWrapper } = await import(
  `./${config.themeRef}/FormWrapper`
);

export { FormWrapper };
