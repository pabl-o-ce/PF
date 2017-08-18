import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { LocationComponent } from './location/location.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: MenuComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'history', component: HistoryComponent },
            { path: 'location', component: LocationComponent },
            // { path: '**', redirectTo: '' }
        ]),
    ],
    exports: [
        RouterModule,
    ],
    providers: [],
})
export class AppRoutingModule { }
