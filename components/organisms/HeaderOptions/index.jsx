import HeaderOptionItem from "./HeaderOptionItem";
import { 
   DotsVerticalIcon,
   MapIcon,
   NewspaperIcon,
   PhotographIcon,
   PlayIcon,
   SearchIcon
} from "@heroicons/react/outline";

function HeaderOptions() {
	return( 
      <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
         {/* Left Section */}
         <div className="flex space-x-6">
            <HeaderOptionItem Icon={SearchIcon} title='All' selected />
            <HeaderOptionItem Icon={PhotographIcon} title='Images' />
            <HeaderOptionItem Icon={PlayIcon} title='Videos' />
            <HeaderOptionItem Icon={NewspaperIcon} title='News' />
            <HeaderOptionItem Icon={MapIcon} title='Maps' />
            <HeaderOptionItem Icon={DotsVerticalIcon} title='More' />
         </div>

         {/* Right Section */}
         <div className="flex space-x-4">
            <p className="link">Settings</p>
            <p className="link">Tools</p>
         </div>
      </div>
   );
}

export default HeaderOptions;
