import { useQuery } from "@tanstack/react-query";
import fetchAllData from "./fetchAllData";

export default async function useFetchDataByID(id: number) {
  // if (typeof id !== "number" || id === 0) {
  //   return { data: false, status: "error" };
  // }

  const { data, status } = useQuery(["store"], fetchAllData);

  return;
}
