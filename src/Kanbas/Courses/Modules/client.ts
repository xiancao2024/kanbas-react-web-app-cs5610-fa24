import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;


export const deleteModule = async (moduleId: string) => {
  try {
    const response = await axios.delete(`${MODULES_API}/${moduleId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete module");
  }
};

export const updateModule = async (module: any) => {
  const { data } = await axiosWithCredentials.put(`${MODULES_API}/${module._id}`, module);
  return data;
};