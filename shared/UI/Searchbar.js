import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
function Searchbar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    if (query.trim().length === 0) return;
    router.push(`/search/${query}`);
    setQuery("");
  };

  return (
    <InputGroup as='form' onSubmit={submitHandler}>
      <Input
        focusBorderColor='coral'
        borderRadius='20px'
        placeholder='search by name'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <InputRightElement>
        <SearchIcon color='blackAlpha.300' />
      </InputRightElement>
    </InputGroup>
  );
}

export default Searchbar;
