import { ModuleWrapper, RemoteModuleProps } from "Components/ModuleWrapper";
import { memo } from "react";

const Module2Content = memo(() => {
  console.log("Module2Content rendered");
  return <p>Hello from Module2</p>;
});

export const Module2 = (props: RemoteModuleProps) => (
  <ModuleWrapper {...props}>
    <Module2Content />
  </ModuleWrapper>
);
