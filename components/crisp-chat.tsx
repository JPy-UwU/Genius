"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("cd720332-b4bb-476d-a1b0-9aaa1e73dbe3");
  }, [])

  return null;
}