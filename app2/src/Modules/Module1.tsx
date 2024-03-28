import { ModuleWrapper, RemoteModuleProps } from "Components/ModuleWrapper";
import { memo } from "react";

const Module1Content = memo(() => {
  console.log("Module1Content rendered");
  return <p>Hello from Module1</p>;
});

export const Module1 = (props: RemoteModuleProps) => (
  <ModuleWrapper {...props}>
    <Module1Content />
  </ModuleWrapper>
);
