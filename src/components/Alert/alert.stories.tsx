import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Alert from "./alert";

const defaultAlert = () => {
  return <Alert title="This is a Alert test"></Alert>;
};

const closableAlert=()=>{
  return <Alert title="111" type="warning" closable description="hahhah" onClose={action("closed")}></Alert>
}

storiesOf("Alert", module)
  .add("默认样式的 Alert", defaultAlert)
  .add("可关闭的 Alert", closableAlert)
