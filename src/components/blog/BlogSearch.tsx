import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search, X } from "lucide-react";

interface BlogSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function BlogSearch({ 
  onSearch, 
  placeholder = "جستجو در مقالات..." 
}: BlogSearchProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // جستجوی real-time
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md mx-auto mb-8">
      <div className="relative">
        <Input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="pl-12 pr-15 py-2 rounded-full" // pr-10 برای فضای دکمه ضربدر
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        
        {query && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-transparent"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>
    </form>
  );
}