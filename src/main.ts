// Import global stylesheet
import './styles/main.css';

//for debugging
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);