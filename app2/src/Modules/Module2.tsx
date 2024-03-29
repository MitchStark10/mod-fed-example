import { ModuleWrapper, RemoteModuleProps } from "Components/ModuleWrapper";
import { memo } from "react";

const Module2Content = memo(() => {
  console.log("Module2Content rendered");
  return (
    <div>
      <p>Hello from Module2</p>
      <p>
        Try typing in the input below and verify that your text doesn't get
        cleared when the access token changes!
      </p>
      <input
        className="mt-2 p-2 border border-black"
        type="text"
        placeholder="Try typing!"
      ></input>
    </div>
  );
});

export const Module2 = (props: RemoteModuleProps) => (
  <ModuleWrapper {...props}>
    <Module2Content />
  </ModuleWrapper>
);
