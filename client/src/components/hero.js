import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Hero = () => {
  const { user } = useAuth0();
return(
  <div className="text-center hero">
    <h1 className="mb-4">Welcome home, {JSON.stringify(user, null, 0).split('"')[3]}</h1>
  </div>
);
};

export default Hero;
