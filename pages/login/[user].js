import { useRouter } from "next/router";
import React from "react";

function User() {
  const router = useRouter();
  const user = router.query;
  console.log(user);

  //   html here
  return (
    <div>
      <h1>Welcome {user.user} Fuck your dad too</h1>
    </div>
  );
}

export default User;
