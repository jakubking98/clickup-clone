import { getSpaces } from "@/app/server-actions/space/getSpaces";
import { useQuery } from "@tanstack/react-query";
import { getAuth } from "firebase/auth";
import { useUsersGetUserById } from "./useUsersGetUserById";

function useSpacesQuery() {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const userId = currentUser?.uid;

  const { data: userData, isLoading: isUserLoading } = useUsersGetUserById(
    userId ?? ""
  );

  const workspaceId = userData?.activeWorkspace;

  return useQuery({
    queryKey: ["spaces", workspaceId],
    queryFn: () => {
      if (!workspaceId) throw new Error("Workspace is undefined");
      return getSpaces(workspaceId);
    },
    enabled: !!workspaceId && !isUserLoading,
  });
}

export default useSpacesQuery;
