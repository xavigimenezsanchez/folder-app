let filesStructure = [
  {
    name: "fileName1",
    extname: "",
    isDirectory: true,
  },
  {
    name: "fileName2",
    extname: "",
    isDirectory: true,
  },
];
const Axios = {
  get: () =>
    new Promise((resolve, reject) => {
      resolve({ data: filesStructure });
    }),
  getFileStructure: () => filesStructure,
  setFileStructure: (files) => {
    filesStructure = files;
  },
};

interface IAxiosMock {
  get: Function;
  getFileStructure: Function;
  setFileStructure: Function;
}

export default Axios;
export type { IAxiosMock };
