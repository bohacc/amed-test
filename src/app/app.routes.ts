import {Routes} from "@angular/router";
import {Home} from "./home/home.component";


export const ROUTES: Routes = [
  // Does not require authentication
  { path: '', component: Home },
];
