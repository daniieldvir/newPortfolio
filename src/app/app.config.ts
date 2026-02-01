import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
  heroArrowDownCircle,
  heroArrowRightCircle,
  heroBriefcase,
  heroCodeBracket,
  heroDevicePhoneMobile,
  heroEnvelope,
  heroGlobeAlt,
  heroHome,
  heroIdentification,
  heroMoon,
  heroServer,
  heroSun,
  heroUser,
} from '@ng-icons/heroicons/outline';
import { provideStore } from '@ngxs/store';
import { routes } from './app.routes';
import { ProjectsState } from './state/projects/projects.state';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore([ProjectsState]),
    provideIcons({
      heroHome,
      heroUser,
      heroCodeBracket,
      heroEnvelope,
      heroSun,
      heroMoon,
      heroArrowRightCircle,
      heroServer,
      heroGlobeAlt,
      heroDevicePhoneMobile,
      heroBriefcase,
      heroArrowDownCircle,
      heroIdentification

    }),
  ]
};
