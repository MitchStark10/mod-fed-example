import { ModuleWrapper, RemoteModuleProps } from "Components/ModuleWrapper";
import { memo } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

const Module1DeepLinkContent = memo(() => {
  console.log("Module1DeepLinkContent rendered");
  return (
    <div>
      <p className="mb-6">Hello from Module1 deep link</p>
      <Link className="border border-black p-4" to="/module1">
        Go back to Module1 base content
      </Link>
    </div>
  );
});

const Module1BaseContent = memo(() => {
  console.log("Module1Content rendered");

  return (
    <div>
      <p className="mb-6">Hello from Module1</p>
      <Link className="border border-black p-4 mr-2" to="/module1/deeplink">
        Click here to try deep linking!
      </Link>

      <Link className="border border-black p-4" to="/module2">
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
