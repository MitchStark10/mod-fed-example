import { FC, useEffect } from "react";

export interface RemoteModuleProps {
  accessToken: string;
  children: React.ReactNode;
  basePathName: string;
}

export const ModuleWrapper: FC<RemoteModuleProps> = ({
  accessToken,
  children,
}) => {
  useEffect(() => {
    console.log("Recevied access token in remote:", accessToken);
  }, [accessToken]);

  return <div className="p-6">{children}</div>;
};
