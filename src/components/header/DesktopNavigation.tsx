
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { ChevronRight, ArrowRight } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import ContactIcons from './ContactIcons';

interface DesktopNavigationProps {
  isActive: (path: string) => boolean;
  location: {
    pathname: string;
  };
  isMBBSIndiaRoute?: boolean;
}

// Unique vibrant colors for each state
const stateColors = [
  "bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-500",
  "bg-pink-50 hover:bg-pink-100 border-l-4 border-pink-500",
  "bg-cyan-50 hover:bg-cyan-100 border-l-4 border-cyan-500",
  "bg-amber-50 hover:bg-amber-100 border-l-4 border-amber-500",
  "bg-red-50 hover:bg-red-100 border-l-4 border-red-500",
  "bg-emerald-50 hover:bg-emerald-100 border-l-4 border-emerald-500",
  "bg-blue-50 hover:bg-blue-100 border-l-4 border-blue-500",
  "bg-violet-50 hover:bg-violet-100 border-l-4 border-violet-500",
  "bg-lime-50 hover:bg-lime-100 border-l-4 border-lime-500",
  "bg-sky-50 hover:bg-sky-100 border-l-4 border-sky-500",
  "bg-fuchsia-50 hover:bg-fuchsia-100 border-l-4 border-fuchsia-500",
  "bg-rose-50 hover:bg-rose-100 border-l-4 border-rose-500",
  "bg-indigo-50 hover:bg-indigo-100 border-l-4 border-indigo-500",
  "bg-teal-50 hover:bg-teal-100 border-l-4 border-teal-500",
  "bg-yellow-50 hover:bg-yellow-100 border-l-4 border-yellow-500",
  "bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-500",
  "bg-slate-50 hover:bg-slate-100 border-l-4 border-slate-500"
];

// Reordered states according to requirements
const states = [
  "Deemed Universities", "Karnataka", "Uttar Pradesh", "Rajasthan", 
  "Maharashtra", "Madhya Pradesh", "Haryana", "Himachal Pradesh",
  "Bihar", "West Bengal", "Uttarakhand", "Chhattisgarh",
  "Telangana", "Kerala", "Gujarat", "Delhi", "Odisha"
];

const DesktopNavigation = ({ isActive, location, isMBBSIndiaRoute = false }: DesktopNavigationProps) => {
  return (
    <div className="flex items-center space-x-1">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive('/') && location.pathname === '/' 
                    ? "bg-medical-50 text-medical-700 shadow-sm" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                isActive('/mbbs-india') 
                  ? "bg-medical-50 text-medical-700 shadow-sm" 
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <span className="tricolor-text flex">
                <span className="text-orange-500 font-bold">M</span>
                <span className="text-blue-600 font-bold">B</span>
                <span className="text-blue-600 font-bold">B</span>
                <span className="text-green-600 font-bold">S</span>
                <span className="text-gray-800 font-bold">&nbsp;</span>
                <span className="text-orange-500 font-bold">I</span>
                <span className="text-blue-600 font-bold">n</span>
                <span className="text-blue-600 font-bold">d</span>
                <span className="text-green-600 font-bold">i</span>
                <span className="text-green-600 font-bold">a</span>
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[300px] p-4 mbbs-india-submenu bg-white shadow-2xl rounded-lg border border-gray-100">
                <div className="flex justify-end mb-3">
                  <Link 
                    to="/mbbs-india" 
                    className="flex items-center gap-1 text-sm font-medium px-3 py-2 bg-gradient-to-r from-orange-100 via-white to-green-100 text-gray-700 hover:shadow-md rounded-full transition-all"
                  >
                    <span className="text-purple-600 font-medium">MBBS India</span>
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                  </Link>
                </div>
                
                <ScrollArea className="h-[70vh] max-h-[500px] pr-4">
                  <div className="space-y-1">
                    {states.map((state, index) => (
                      <Link
                        key={state}
                        to={`/mbbs-india/${state.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`flex items-center p-3 rounded-md mb-2 transition-all transform hover:-translate-y-1 hover:shadow-md ${stateColors[index]} ${
                          isActive(`/mbbs-india/${state.toLowerCase().replace(/\s+/g, '-')}`) 
                            ? 'bg-opacity-70 shadow-sm' 
                            : ''
                        }`}
                      >
                        <div>
                          <div className="text-sm font-medium">{state}</div>
                          <p className="text-xs text-gray-500 mt-0.5">
                            Medical Colleges
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/services">
              <NavigationMenuLink
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive('/services') 
                    ? "bg-medical-50 text-medical-700 shadow-sm" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                Services
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/know-us">
              <NavigationMenuLink
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive('/know-us') 
                    ? "bg-medical-50 text-medical-700 shadow-sm" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                Know Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/terms">
              <NavigationMenuLink
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive('/terms') || isActive('/legal')
                    ? "bg-medical-50 text-medical-700 shadow-sm" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                Terms
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden md:flex items-center ml-4">
        <ContactIcons />
      </div>
    </div>
  );
};

export default DesktopNavigation;
