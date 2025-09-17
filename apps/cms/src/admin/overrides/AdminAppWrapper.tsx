import React from "react";
import OriginalStrapiApp from "OriginalStrapiApp";

export default function AdminAppWrapper() {
/* eslint-disable no-console */
console.log("[admin] AdminAppWrapper module evaluated");

  return (
    <>
      <div style={{ padding: 16, borderBottom: "1px solid #444", color: "white" }}>
        hello, world
      </div>
      <OriginalStrapiApp />
    </>
  );
}
