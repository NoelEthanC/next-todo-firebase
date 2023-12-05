import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function InputWithButton() {
  return (
    <div className="flex w-full mx-auto max-w-3xl my-8 items-center ">
      <Input
        type="search"
        className="w-full  rounded-l-full focus-visible:ring-offset-0 bg-gray-900 appearance-none
         ring-offset-black outline-none text-gray-100  "
        placeholder="Search for todo..."
      />
      <Button
        className="focus:outline-blue-500  relative bg-gray-950  rounded-r-full "
        type="submit"
      >
        <Search size={20} className="py" />
        {/* <>Search</> */}
      </Button>
    </div>
  );
}
