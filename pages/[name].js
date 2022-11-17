// Dynamic page

import React from "react";
import { useRouter } from "next/router";

function Name() {
  const router = useRouter();
  const { name } = router.query;
  console.log(name);

  return (
    <div>
      <h1>Welcome {name}</h1>
    </div>
  );
}

export default Name;
