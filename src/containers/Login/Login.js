import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import React from "react";
import { withRouter } from "react-router";

const LoginContainer = () => {
  console.log("llgin");
  return (
    <div className="text-align-center">
      <AmplifyAuthenticator usernameAlias="email">
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            { type: "email" },
            {
              type: "password",
              label: "Password *",
              placeholder: "Enter your password",
              required: true,
            },
          ]}
        />
      </AmplifyAuthenticator>
    </div>
  );
};

export default withRouter(LoginContainer);
