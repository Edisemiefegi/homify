import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

export type Options = {
  value: string;
  label: string;
  path?: string;
};

interface Props {
  options?: Options[];
  col?: boolean
}

function Tab({ options, col }: Props) {
  const navigate = useNavigate();

  // info about current url
  const location = useLocation();
  

  const handleClick = (tab: Options) => {
    if (tab.path) {
      navigate(tab.path);
    }
  };

  return (
    <div className={`w-full flex gap-10` + (col ? " flex-col" : "")}>
      {options?.map((tab, index) => {
        const isActive = tab.path && location.pathname === tab.path;
        return (
          <Button
            key={index}
            variant="text"
            className={`!px-0 !py-0 transition ${isActive
              ? "!font-semibold text-primary border-b-2 border-primary"
              : "!font-light text-gray-600 hover:text-primary"
              }`}
            onclick={() => handleClick(tab)}
          >
            {tab.label}
          </Button>
        );

      }

      )}
    </div>
  );
}

export default Tab;
