import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
export default function CustomAvatar() {
  return (
    <div>
      <Avatar size={45} icon={<UserOutlined />} />
    </div>
  );
}
