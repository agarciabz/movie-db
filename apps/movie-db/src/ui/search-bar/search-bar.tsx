import { FormEventHandler } from "react";

import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

export interface SearchBarProps {
  onChange: (term: string) => void
}

export function SearchBar(props: SearchBarProps) {
  const searchTerm$ = new Subject<string>();
  const { onChange } = props;

  searchTerm$.pipe(
    debounceTime(400),
    distinctUntilChanged()
  ).subscribe((value: string) => {
    const term = value.trim();
    if (term !== "") {
      onChange(term);
    }
  });

  const handleInput: FormEventHandler<HTMLInputElement> = (event) => {
    const {value} = event.target as any;
    searchTerm$.next(value);
  };

  return (
    <div className="h-16 bg-teal-500 flex flex-row px-4 py-2 ">
      <input className="w-full p-2 rounded-lg xl:w-4/5 xl:mx-auto" onInput={handleInput} type="search" placeholder="Search movie titles"></input>
    </div>
  );
}

export default SearchBar;
 