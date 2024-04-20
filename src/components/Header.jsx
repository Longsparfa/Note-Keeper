import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';


const Header = () => {
  return (
    <div>
      <header className="bg-[#f5ba13] my-auto mx-[16px] py-[16px] px-[32px] shadow-[0_0_10px_0_rgba(0,0,0,0.3)] ">
        <h1 className="text-white font-extralight"><TipsAndUpdatesIcon /> Notes Keeper</h1>
      </header>
    </div>
  );
};

export default Header;
