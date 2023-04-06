import { useSelector } from "react-redux";
import { useState } from "react";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.length === 0) {
      return;
    }


  }
}