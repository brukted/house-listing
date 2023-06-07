import { Button } from "@mui/material";

export const NavBar: React.FC = () => {
  return (
    <nav className="flex px-16 py-4 shadow-sm items-center gap-16">
      <span className="prose">
        <h2>Tripster</h2>
      </span>
      <div className="flex gap-16">
        <span className="text-gray-400">Properties</span>
        <span className="text-gray-400">Attractions</span>
        <span className="text-gray-400">Popular</span>
      </div>
      <div className="flex-grow"></div>
      <div className="flex gap-5">
        <Button variant="outlined">Sign up</Button>
        <Button variant="contained" disableElevation>
          Log in
        </Button>
      </div>
    </nav>
  );
};
