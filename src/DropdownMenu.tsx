import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/DropdownMenu.css"; // CSSファイルをインポート

export default function DropdownMenu() {
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPath = event.target.value;
    setSelectedPage(newPath);
    if (newPath) {
      navigate(newPath);
    }
  };

  return (
    <div className="dropdown-container">
      <select
        className="dropdown-select"
        value={selectedPage}
        onChange={handleChange}
      >
        <option value="" disabled>
          見たい写真を選択してね
        </option>
        <option value="/sky-app/train">電車の写真</option>
        <option value="/sky-app/sky">空の写真</option>
      </select>
    </div>
  );
}
