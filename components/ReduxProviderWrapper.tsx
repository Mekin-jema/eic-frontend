// components/ReduxProviderWrapper.tsx
"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/App/store";

export default function ReduxProviderWrapper({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
