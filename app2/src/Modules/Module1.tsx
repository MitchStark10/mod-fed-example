import { ModuleWrapper, RemoteModuleProps } from "Components/ModuleWrapper";
import { memo } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

const Module1DeepLinkContent = memo(() => {
  console.log("Module1DeepLinkContent rendered");
  return (
    <div>
      <p style={{ marginBottom: "8px" }}>Hello from Module1 deep link</p>
      <Link
        to="/module1"
        style={{
          border: "1px solid black",
          padding: "8px",
        }}
      >
        Go back to Module1 base content
      </Link>
    </div>
  );
});

const Module1BaseContent = memo(() => {
  console.log("Module1Content rendered");

  return (
    <div>
      <p style={{ marginBottom: "8px" }}>Hello from Module1</p>
      <Link
        style={{
          border: "1px solid black",
          padding: "8px",
          marginRight: "8px",
        }}
        to="/module1/deeplink"
      >
        Click here to try deep linking!
      </Link>

      <Link style={{ border: "1px solid black", padding: "8px" }} to="/module2">
        Click here to try navigating across modules
      </Link>
    </div>
  );
});

export const Module1 = (props: RemoteModuleProps) => (
  <ModuleWrapper {...props}>
    <Routes>
      <Route path="deeplink" element={<Module1DeepLinkContent />} />
      <Route index element={<Module1BaseContent />} />
    </Routes>
  </ModuleWrapper>
);
