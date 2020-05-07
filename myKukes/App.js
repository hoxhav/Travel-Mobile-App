import * as React from 'react';
import { HomepageInit } from './app/inits/HomepageInit.js';
import { AttractionsInit } from './app/inits/AttractionsInit.js';
import { BusInit } from './app/inits/BusInit.js';
import { HotelInit } from './app/inits/HotelInit.js';
import { HistoryInit } from './app/inits/HistoryInit.js';
import { Architecture } from './app/sections/historyPages/Architecture.js';
import { Communist } from './app/sections/historyPages/Communist.js';
import { Kosovo } from './app/sections/historyPages/Kosovo.js';
import { Ottoman } from './app/sections/historyPages/Ottoman.js';
import { Ww1 } from './app/sections/historyPages/Ww1.js';
import { Ww2 } from './app/sections/historyPages/Ww2.js';
import { Castle } from './app/sections/attractionPages/Castle.js';
import { Mosque1 } from './app/sections/attractionPages/Mosque1.js';
import { Mosque2 } from './app/sections/attractionPages/Mosque2.js';
import { Mountain } from './app/sections/attractionPages/Mountain.js';
import { Sea } from './app/sections/attractionPages/Sea.js';
import { Thethi } from './app/sections/attractionPages/Thethi.js';
import { DirLocation } from './app/sections/locations/DirLocation.js';
import { HotelResult } from './app/sections/searchResult/HotelResult.js';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    HomepageInit: {
      screen: HomepageInit,
    },
    History: {
      screen: HistoryInit,
    },
    Bus: {
      screen: BusInit,
    },
    Attractions: {
      screen: AttractionsInit,
    },
    Hotel: {
      screen: HotelInit,
    },
    Architecture: {
      screen: Architecture,
    },
    Communist: {
      screen: Communist,
    },
    Kosovo: {
      screen: Kosovo,
    },
    Ottoman: {
      screen: Ottoman,
    },
    Ww1: {
      screen: Ww1,
    },
    Ww2: {
      screen: Ww2,
    },
    Thethi: {
      screen: Thethi,
    },
    Castle: {
      screen: Castle,
    },
    Mosque1: {
      screen: Mosque1,
    },
    Sea: {
      screen: Sea,
    },
    Mosque2: {
      screen: Mosque2,
    },
    Mountain: {
      screen: Mountain,
    },
    DirLocation: {
      screen: DirLocation,
    },
    HotelResult: {
      screen: HotelResult,
    }
  },
  {
   initialRouteName: 'HomepageInit',
  }
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer;
