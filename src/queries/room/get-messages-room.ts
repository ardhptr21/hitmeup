import { Message } from "@prisma/client";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";

type Params = {
  roomId: number;
};

type Response = {
  meta: {
    status: number;
    success: boolean;
    message: string;
  };
  data: Omit<Message[], "roomId">;
};

export const getMessagesRoomHandle = async (
  params: Params
): Promise<Response> => {
  const { data } = await axios.get<Response>(
    `/api/rooms/${params.roomId}/messages`
  );
  return data;
};

export const useGetMessagesRoom = (
  params: Params,
  options?: Partial<UseQueryOptions<Response>>
) => {
  return useQuery({
    queryKey: ["room", 1, "messages"],
    queryFn: () => getMessagesRoomHandle(params),
    ...options,
  });
};
