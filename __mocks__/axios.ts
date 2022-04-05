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
  get: (path: string) =>
    new Promise((resolve, reject) => {
      const data = path === "/api/dir?path=/" ? filesStructure : [];
      resolve({ data });
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
