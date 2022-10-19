const config = {
  themeRef: "test",
};


// read https://stackoverflow.com/questions/65370019/next-js-dynamic-import-vs-await-import
const FormWrapper = import(`./${config.themeRef}/FormWrapper`);

export {FormWrapper};
