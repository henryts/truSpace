import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

export default function Navbarr() {
  return (
    <div>
      <Navbar
        variant="gradient"
        color="red"
        className="w-full bg-blue-gray-900 py-3" 
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-y-4 text-white"> {/* Add container and w-full */}
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5"
          >
            Material Tailwind
          </Typography>
          <div className="ml-auto flex gap-1 md:mr-4">
            <IconButton variant="text" color="white">
              <Cog6ToothIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="text" color="white">
              <BellIcon className="h-4 w-4" />
            </IconButton>
          </div>
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="white"
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button
              size="sm"
              color="white"
              className="!absolute right-1 top-1 rounded"
            >
              Search
            </Button>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
